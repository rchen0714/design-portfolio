"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PlayGalleryItem } from "@/data/play-gallery";

type PlayCanvasProps = {
  items: PlayGalleryItem[];
};

type TileSize = {
  width: number;
  height: number;
};

const TILE_RING = [-1, 0, 1] as const;

function parseAspectRatio(ratio: string) {
  const [width, height] = ratio.split("/").map((part) => Number(part.trim()));
  if (!width || !height) return 4 / 5;
  return width / height;
}

function distributeToColumns(items: PlayGalleryItem[], columnCount: number) {
  const columns = Array.from({ length: columnCount }, () => [] as PlayGalleryItem[]);
  const heights = Array(columnCount).fill(0);

  for (const item of items) {
    const shortestColumn = heights.indexOf(Math.min(...heights));
    columns[shortestColumn].push(item);
    heights[shortestColumn] += 1 / parseAspectRatio(item.aspectRatio ?? "4 / 5");
  }

  return columns;
}

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(5);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1101px)");
    const medium = window.matchMedia("(min-width: 701px)");

    const update = () => {
      if (wide.matches) setColumnCount(5);
      else if (medium.matches) setColumnCount(4);
      else setColumnCount(3);
    };

    update();
    wide.addEventListener("change", update);
    medium.addEventListener("change", update);

    return () => {
      wide.removeEventListener("change", update);
      medium.removeEventListener("change", update);
    };
  }, []);

  return columnCount;
}

function wrapAxis(value: number, period: number) {
  if (period <= 0) return value;
  const mod = ((value % period) + period) % period;
  return mod - period;
}

function PlayMasonryItem({ item }: { item: PlayGalleryItem }) {
  return (
    <article
      className="play-masonry-item"
      style={{ aspectRatio: item.aspectRatio ?? "4 / 5" }}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          unoptimized
          sizes="(max-width: 700px) 30vw, (max-width: 1100px) 22vw, 18vw"
          className="play-masonry-image"
        />
      ) : (
        <div className="play-masonry-placeholder" aria-hidden="true" />
      )}
    </article>
  );
}

function PlayMasonry({
  items,
  tileId,
  columnCount,
}: {
  items: PlayGalleryItem[];
  tileId: string;
  columnCount: number;
}) {
  const columns = useMemo(
    () => distributeToColumns(items, columnCount),
    [columnCount, items],
  );

  return (
    <div className="play-masonry">
      {columns.map((columnItems, columnIndex) => (
        <div key={`${tileId}-col-${columnIndex}`} className="play-masonry-column">
          {columnItems.map((item) => (
            <PlayMasonryItem key={`${tileId}-${item.id}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function PlayCanvas({ items }: PlayCanvasProps) {
  const columnCount = useColumnCount();
  const tileMeasureRef = useRef<HTMLDivElement>(null);
  const [tileSize, setTileSize] = useState<TileSize>({ width: 0, height: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragState = useRef({
    active: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  useEffect(() => {
    const node = tileMeasureRef.current;
    if (!node) return;

    const updateSize = () => {
      setTileSize({
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(node);

    return () => observer.disconnect();
  }, [items.length]);

  const applyOffset = useCallback(
    (x: number, y: number) => {
      setOffset({
        x: wrapAxis(x, tileSize.width),
        y: wrapAxis(y, tileSize.height),
      });
    },
    [tileSize.height, tileSize.width],
  );

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) return;

      dragState.current = {
        active: true,
        startX: event.clientX,
        startY: event.clientY,
        originX: offset.x,
        originY: offset.y,
      };

      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.classList.add("is-dragging");
    },
    [offset.x, offset.y],
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current.active) return;

      const deltaX = event.clientX - dragState.current.startX;
      const deltaY = event.clientY - dragState.current.startY;

      applyOffset(
        dragState.current.originX + deltaX,
        dragState.current.originY + deltaY,
      );
    },
    [applyOffset],
  );

  const endDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;

    dragState.current.active = false;
    event.currentTarget.classList.remove("is-dragging");

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

  const onWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      setOffset((current) => ({
        x: wrapAxis(current.x - event.deltaX, tileSize.width),
        y: wrapAxis(current.y - event.deltaY, tileSize.height),
      }));
    },
    [tileSize.height, tileSize.width],
  );

  return (
    <div
      className="play-viewport"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onWheel={onWheel}
    >
      <div
        className="play-canvas"
        style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      >
        <div className="play-tile-grid">
          {TILE_RING.flatMap((tileY) =>
            TILE_RING.map((tileX) => {
              const tileId = `${tileX}-${tileY}`;
              const isMeasureTile = tileX === 0 && tileY === 0;

              return (
                <div
                  key={tileId}
                  ref={isMeasureTile ? tileMeasureRef : undefined}
                  className="play-tile"
                  style={{
                    transform: `translate3d(${tileX * tileSize.width}px, ${tileY * tileSize.height}px, 0)`,
                  }}
                  aria-hidden={!isMeasureTile}
                >
                  <PlayMasonry
                    items={items}
                    tileId={tileId}
                    columnCount={columnCount}
                  />
                </div>
              );
            }),
          )}
        </div>
      </div>

      <p className="play-hint">Scroll / drag to explore</p>
    </div>
  );
}
