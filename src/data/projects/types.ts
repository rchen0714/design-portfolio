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
  tags: ProjectTag[];
};
