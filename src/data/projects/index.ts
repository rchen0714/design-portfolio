import { smata } from "./smata";
import { talentoraAi } from "./talentora-ai";
import { thrival } from "./thrival";
import type { ProjectLink } from "./types";
import { via } from "./via";

const defaultCardImage = "/placeholder-computer-mockup.png";

export const projects: ProjectLink[] = [
  {
    ...smata,
    href: "/work/smata",
    cardImage: defaultCardImage,
    tags: [
      { label: "UI/UX", variant: "ui-ux" },
      { label: "Product Design", variant: "product-design" },
    ],
  },
  {
    ...thrival,
    href: "/work/thrival",
    cardImage: "/casebanners/thrivalbanner.png",
    cardImageWidth: 7524,
    cardImageHeight: 4800,
    cardImageFit: "cover",
    tags: [
      { label: "UI/UX", variant: "ui-ux" },
      { label: "Product Design", variant: "product-design" },
    ],
  },
  {
    ...talentoraAi,
    href: "/work/talentora-ai",
    cardImage: "/casebanners/talentoralaptop.png",
    cardImageWidth: 3798,
    cardImageHeight: 2202,
    tags: [
      { label: "UI/UX", variant: "ui-ux" },
      { label: "Product Design", variant: "product-design" },
    ],
  },
  {
    ...via,
    href: "/work/via",
    cardImage: defaultCardImage,
    tags: [
      { label: "UI/UX", variant: "ui-ux" },
      { label: "Product Design", variant: "product-design" },
    ],
  },
];

export { smata, talentoraAi, thrival, via };
export type { Project, ProjectLink } from "./types";
