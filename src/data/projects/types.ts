export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  description: string;
  role: string;
  mockup: "phone" | "computer";
  /** Overrides default mockup art on the case study hero */
  heroImage?: ProjectImage;
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type WorkCardTagVariant =
  | "ui-ux"
  | "product-design"
  | "web-dev"
  | "ai-project"
  | "full-stack"
  | "interface-design";

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
  /** Optional class for cover-image tweaks (e.g. scale) on the work index card */
  cardImageCoverClass?: string;
  tags: ProjectTag[];
};
