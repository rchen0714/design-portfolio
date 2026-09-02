import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects/types";

type CaseStudyProps = {
  project: Project;
};

const mockupImages = {
  phone: {
    src: "/placeholder-phone-mockup.png",
    width: 320,
    height: 640,
  },
  computer: {
    src: "/placeholder-computer-mockup.png",
    width: 720,
    height: 460,
  },
};

export default function CaseStudy({ project }: CaseStudyProps) {
  const mockup = mockupImages[project.mockup];

  return (
    <main id="case-study-page">
      <div className="case-study-container">
        <Link href="/work" className="case-study-back">
          ← all works
        </Link>

        <header className="case-study-header">
          <h1 className="case-study-title">{project.title.toLowerCase()}.</h1>
          <p className="case-study-description">{project.description}</p>
          <p className="case-study-meta">{project.role}</p>
        </header>

        <div className="case-study-hero">
          <Image
            src={mockup.src}
            alt={`${project.title} mockup`}
            width={mockup.width}
            height={mockup.height}
            className="case-study-hero-image"
            priority
          />
        </div>

        <div className="case-study-sections">
          <section className="case-study-section">
            <h2>overview.</h2>
            <p>{project.overview}</p>
          </section>

          <section className="case-study-section">
            <h2>problem.</h2>
            <p>{project.problem}</p>
          </section>

          <section className="case-study-section">
            <h2>solution.</h2>
            <p>{project.solution}</p>
          </section>

          <section className="case-study-section">
            <h2>outcome.</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
