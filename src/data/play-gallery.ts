export type PlayGalleryItem = {
  id: string;
  alt: string;
  src?: string;
  aspectRatio?: string;
};

const aspectRatios = [
  "4 / 5",
  "1 / 1",
  "3 / 4",
  "5 / 4",
  "4 / 5",
  "3 / 5",
  "4 / 3",
  "5 / 6",
  "1 / 1",
  "3 / 4",
];

export const playGalleryItems: PlayGalleryItem[] = Array.from({ length: 60 }, (_, index) => ({
  id: String(index + 1),
  alt: `Play piece ${index + 1}`,
  aspectRatio: aspectRatios[index % aspectRatios.length],
}));
