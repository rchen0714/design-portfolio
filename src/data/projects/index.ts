import { moodcast } from "./moodcast";
import { smata } from "./smata";
import { talentoraAi } from "./talentora-ai";
import { terrierStudy } from "./terrierstudy";
import { thrival } from "./thrival";
import type { ProjectLink } from "./types";
import { via } from "./via";

export const projects: ProjectLink[] = [
  {
    ...smata,
    href: "/work/smata",
    cardImage: "/casebanners/smatabanner.png",
    cardImageWidth: 973,
    cardImageHeight: 598,
    cardImageFit: "cover",
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
    cardImage: "/casebanners/talentorabanner.png",
    cardImageWidth: 7524,
    cardImageHeight: 4800,
    cardImageFit: "cover",
    tags: [
      { label: "UI/UX", variant: "ui-ux" },
      { label: "Product Design", variant: "product-design" },
      { label: "AI project", variant: "ai-project" },
    ],
  },
  {
    ...terrierStudy,
    href: "/work/terrierstudy",
    cardImage: "/casebanners/terrierstudybanner.png",
    cardImageWidth: 7524,
    cardImageHeight: 4800,
    cardImageFit: "cover",
    tags: [
      { label: "Web Dev", variant: "web-dev" },
      { label: "Full Stack", variant: "full-stack" },
      { label: "Interface Design", variant: "interface-design" },
    ],
  },
  {
    ...moodcast,
    href: "/work/moodcast",
    cardImage: "/casebanners/moodcastbanner.png",
    cardImageWidth: 7020,
    cardImageHeight: 4467,
    cardImageFit: "cover",
    tags: [
      { label: "Web Dev", variant: "web-dev" },
      { label: "UI/UX", variant: "ui-ux" },
    ],
  },
  {
    ...via,
    href: "/work/via",
    cardImage: "/casebanners/vianewbanner.png",
    cardImageWidth: 7524,
    cardImageHeight: 4800,
    cardImageFit: "cover",
    tags: [
      { label: "UI/UX", variant: "ui-ux" },
      { label: "Product Design", variant: "product-design" },
    ],
  },
];

export { moodcast, smata, talentoraAi, terrierStudy, thrival, via };
export type { Project, ProjectLink } from "./types";
