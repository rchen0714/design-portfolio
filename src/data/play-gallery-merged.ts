import { playGalleryItems, type PlayGalleryItemBase } from "./play-gallery";
import webManifest from "./play-gallery-web.json";

type WebEntry = {
  src: string;
  srcFull: string;
  width: number;
  height: number;
  aspectRatio: string;
  placeholder: string;
};

export type PlayGalleryItem = PlayGalleryItemBase & WebEntry;

const manifest = webManifest as Record<string, WebEntry>;

export const playGalleryItemsOptimized: PlayGalleryItem[] = playGalleryItems.map((item) => {
  const web = manifest[item.id];
  if (!web) {
    throw new Error(`Missing play-gallery-web entry for id ${item.id}`);
  }
  return {
    ...item,
    ...web,
    alt: item.alt,
  };
});
