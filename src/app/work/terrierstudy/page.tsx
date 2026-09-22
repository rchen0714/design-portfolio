import TerrierStudyCaseStudy from "@/components/TerrierStudyCaseStudy";
import { terrierStudy } from "@/data/projects/terrierstudy";

export const metadata = {
  title: "TerrierStudy | Ruby Chen",
  description: terrierStudy.description,
};

export default function TerrierStudyPage() {
  return <TerrierStudyCaseStudy />;
}
