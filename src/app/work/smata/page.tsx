import CaseStudy from "@/components/CaseStudy";
import { smata } from "@/data/projects/smata";

export const metadata = {
  title: "Smata | Ruby Chen",
  description: smata.description,
};

export default function SmataPage() {
  return <CaseStudy project={smata} />;
}
