import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main id="work-page">
      <div className="works-page-container">
        <h1 className="works-page-title">works.</h1>

        <div className="works-grid">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="works-grid-item"
              aria-label={`View ${project.title} project`}
            >
              <span className="works-grid-placeholder" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
