import CaseStudy from "@/components/CaseStudy";
import { terrierStudy } from "@/data/projects/terrierstudy";

export const metadata = {
  title: "TerrierStudy | Ruby Chen",
  description: terrierStudy.description,
};

export default function TerrierStudyPage() {
  return <CaseStudy project={terrierStudy} />;
}
