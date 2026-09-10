"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PlayGalleryItem } from "@/data/play-gallery";

type PlayCanvasProps = {
  items: PlayGalleryItem[];
};

type TileSize = {
  width: number;
  height: number;
};

const TILE_RING = [-1, 0, 1] as const;

function wrapAxis(value: number, period: number) {
  if (period <= 0) return value;
  const mod = ((value % period) + period) % period;
  return mod - period;
}

function PlayMasonry({
  items,
  tileId,
}: {
  items: PlayGalleryItem[];
  tileId: string;
}) {
  return (
    <div className="play-masonry">
      {items.map((item) => (
        <article
          key={`${tileId}-${item.id}`}
          className="play-masonry-item"
          style={{ aspectRatio: item.aspectRatio ?? "4 / 5" }}
        >
          {item.src ? (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 700px) 30vw, (max-width: 1100px) 22vw, 18vw"
              className="play-masonry-image"
            />
          ) : (
            <div className="play-masonry-placeholder" aria-label={item.alt} />
          )}
        </article>
      ))}
    </div>
  );
}

export default function PlayCanvas({ items }: PlayCanvasProps) {
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
                  <PlayMasonry items={items} tileId={tileId} />
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
