import CaseStudy from "@/components/CaseStudy";
import { via } from "@/data/projects/via";

export const metadata = {
  title: "Via | Ruby Chen",
  description: via.description,
};

export default function ViaPage() {
  return <CaseStudy project={via} />;
}
