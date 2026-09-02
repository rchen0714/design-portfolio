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

export type ProjectLink = Project & {
  href: string;
};
