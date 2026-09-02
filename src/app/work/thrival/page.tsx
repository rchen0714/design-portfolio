import CaseStudy from "@/components/CaseStudy";
import { thrival } from "@/data/projects/thrival";

export const metadata = {
  title: "Thrival | Ruby Chen",
  description: thrival.description,
};

export default function ThrivalPage() {
  return <CaseStudy project={thrival} />;
}
