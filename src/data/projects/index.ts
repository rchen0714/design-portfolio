import { smata } from "./smata";
import { talentoraAi } from "./talentora-ai";
import { thrival } from "./thrival";
import type { ProjectLink } from "./types";
import { via } from "./via";

export const projects: ProjectLink[] = [
  { ...talentoraAi, href: "/work/talentora-ai" },
  { ...smata, href: "/work/smata" },
  { ...via, href: "/work/via" },
  { ...thrival, href: "/work/thrival" },
];

export { smata, talentoraAi, thrival, via };
export type { Project, ProjectLink } from "./types";
