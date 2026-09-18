import CaseStudy from "@/components/CaseStudy";
import { moodcast } from "@/data/projects/moodcast";

export const metadata = {
  title: "Moodcast | Ruby Chen",
  description: moodcast.description,
};

export default function MoodcastPage() {
  return <CaseStudy project={moodcast} />;
}
