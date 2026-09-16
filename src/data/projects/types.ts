export type Project = {
  title: string;
  description: string;
  role: string;
  mockup: "phone" | "computer";
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type WorkCardTagVariant = "ui-ux" | "product-design" | "web-dev";

export type ProjectTag = {
  label: string;
  variant: WorkCardTagVariant;
};

export type ProjectLink = Project & {
  href: string;
  /** Cover image for the work index card; omit to show a placeholder */
  cardImage?: string;
  /** Intrinsic width/height for the card image (defaults to 560×360) */
  cardImageWidth?: number;
  cardImageHeight?: number;
  /** Banner art fills the media area; mockups use contain + padding */
  cardImageFit?: "contain" | "cover";
  tags: ProjectTag[];
};
