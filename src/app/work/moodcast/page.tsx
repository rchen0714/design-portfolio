import MoodcastCaseStudy from "@/components/MoodcastCaseStudy";
import { moodcast } from "@/data/projects/moodcast";

export const metadata = {
  title: "Moodcast | Ruby Chen",
  description: moodcast.description,
};

export default function MoodcastPage() {
  return <MoodcastCaseStudy />;
}
