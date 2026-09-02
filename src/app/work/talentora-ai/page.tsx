import CaseStudy from "@/components/CaseStudy";
import { talentoraAi } from "@/data/projects/talentora-ai";

export const metadata = {
  title: "Talentora AI | Ruby Chen",
  description: talentoraAi.description,
};

export default function TalentoraAIPage() {
  return <CaseStudy project={talentoraAi} />;
}
