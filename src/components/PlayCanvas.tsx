"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PlayGalleryItem } from "@/data/play-gallery-merged";

type PlayCanvasProps = {
  items: PlayGalleryItem[];
};

type TileSize = {
  width: number;
  height: number;
};

type TileCoord = {
  x: number;
  y: number;
};

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

function shuffleItems(items: PlayGalleryItem[]) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function useInViewOnce(rootMargin = "200px") {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return { ref, visible };
}

function PlayMasonryItem({
  item,
  priority,
  onOpen,
}: {
  item: PlayGalleryItem;
  priority: boolean;
  onOpen: (item: PlayGalleryItem) => void;
}) {
  const { ref, visible } = useInViewOnce("220px");

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="play-masonry-item"
      style={{
        aspectRatio: item.aspectRatio ?? "4 / 5",
        backgroundColor: item.placeholder ?? "#e6e6e6",
      }}
    >
      {visible && item.src ? (
        <button
          type="button"
          className="play-masonry-button"
          onClick={() => onOpen(item)}
          aria-label={item.alt || "View artwork"}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 700px) 30vw, (max-width: 1100px) 22vw, 18vw"
            className="play-masonry-image"
            priority={priority}
            fetchPriority={priority ? "high" : undefined}
          />
        </button>
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
  priorityOffset,
  onOpen,
}: {
  items: PlayGalleryItem[];
  tileId: string;
  columnCount: number;
  priorityOffset: number;
  onOpen: (item: PlayGalleryItem) => void;
}) {
  const columns = useMemo(
    () => distributeToColumns(items, columnCount),
    [columnCount, items],
  );

  let index = priorityOffset;

  return (
    <div className="play-masonry">
      {columns.map((columnItems, columnIndex) => (
        <div key={`${tileId}-col-${columnIndex}`} className="play-masonry-column">
          {columnItems.map((item) => {
            const priority = index < 9;
            index += 1;
            return (
              <PlayMasonryItem
                key={`${tileId}-${item.id}`}
                item={item}
                priority={priority}
                onOpen={onOpen}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function getVisibleTiles(
  offset: { x: number; y: number },
  tileSize: TileSize,
  viewport: { width: number; height: number },
) {
  if (!tileSize.width || !tileSize.height) {
    return [{ x: 0, y: 0 }];
  }

  const buffer = 0.35;
  const minX = Math.floor((-offset.x - viewport.width * buffer) / tileSize.width);
  const maxX = Math.ceil((viewport.width - offset.x + viewport.width * buffer) / tileSize.width);
  const minY = Math.floor((-offset.y - viewport.height * buffer) / tileSize.height);
  const maxY = Math.ceil((viewport.height - offset.y + viewport.height * buffer) / tileSize.height);

  const tiles: TileCoord[] = [];
  for (let x = minX; x <= maxX; x += 1) {
    for (let y = minY; y <= maxY; y += 1) {
      tiles.push({ x, y });
    }
  }
  return tiles;
}

export default function PlayCanvas({ items }: PlayCanvasProps) {
  const columnCount = useColumnCount();
  const displayItems = useMemo(() => shuffleItems(items), [items]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const tileMeasureRef = useRef<HTMLDivElement>(null);
  const [tileSize, setTileSize] = useState<TileSize>({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [lightboxItem, setLightboxItem] = useState<PlayGalleryItem | null>(null);
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
  }, [displayItems.length, columnCount]);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const update = () => {
      setViewportSize({ width: node.clientWidth, height: node.clientHeight });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleTiles = useMemo(
    () => getVisibleTiles(offset, tileSize, viewportSize),
    [offset, tileSize, viewportSize],
  );

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

      applyOffset(dragState.current.originX + deltaX, dragState.current.originY + deltaY);
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
    <>
      <div
        ref={viewportRef}
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
            <div
              ref={tileMeasureRef}
              className="play-tile"
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              <PlayMasonry
                items={displayItems}
                tileId="0-0"
                columnCount={columnCount}
                priorityOffset={0}
                onOpen={setLightboxItem}
              />
            </div>

            {visibleTiles.map(({ x, y }) => {
              if (x === 0 && y === 0) return null;
              const tileId = `${x}-${y}`;
              return (
                <div
                  key={tileId}
                  className="play-tile"
                  style={{
                    transform: `translate3d(${x * tileSize.width}px, ${y * tileSize.height}px, 0)`,
                  }}
                  aria-hidden="true"
                >
                  <PlayMasonry
                    items={displayItems}
                    tileId={tileId}
                    columnCount={columnCount}
                    priorityOffset={9}
                    onOpen={setLightboxItem}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <p className="play-hint">Scroll / drag to explore</p>
      </div>

      {lightboxItem ? (
        <div
          className="play-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.alt || "Artwork preview"}
          onClick={() => setLightboxItem(null)}
        >
          <button
            type="button"
            className="play-lightbox-close"
            onClick={() => setLightboxItem(null)}
          >
            Close
          </button>
          <div className="play-lightbox-frame">
            <Image
              src={lightboxItem.srcFull}
              alt={lightboxItem.alt}
              width={lightboxItem.width * 2}
              height={lightboxItem.height * 2}
              className="play-lightbox-image"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
