import ViaCaseStudy from "@/components/ViaCaseStudy";
import { via } from "@/data/projects/via";

export const metadata = {
  title: "Via | Ruby Chen",
  description: via.description,
};

export default function ViaPage() {
  return <ViaCaseStudy />;
}
