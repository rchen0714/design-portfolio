import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main id="work-page">
      <div className="works-page-container">
        <h1 className="works-page-title">works.</h1>

        <ul className="works-page-list">
          {projects.map((project) => (
            <li key={project.href} className="works-page-list-item">
              <Link href={project.href} className="works-case-card">
                <div
                  className={`works-case-card-media${
                    project.cardImageFit === "cover" ? " works-case-card-media--cover" : ""
                  }`}
                >
                  {project.cardImage ? (
                    project.cardImageFit === "cover" ? (
                      <Image
                        src={project.cardImage}
                        alt=""
                        fill
                        className="works-case-card-image--cover"
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                    ) : (
                      <Image
                        src={project.cardImage}
                        alt=""
                        width={project.cardImageWidth ?? 560}
                        height={project.cardImageHeight ?? 360}
                        className="works-case-card-image"
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                    )
                  ) : (
                    <div className="works-case-card-media-placeholder" aria-hidden="true" />
                  )}
                </div>

                <div className="works-case-card-body">
                  <h2 className="works-case-card-title">{project.title}</h2>
                  <p className="works-case-card-description">{project.description}</p>
                  <div className="works-case-card-footer">
                    <ul className="works-case-card-tags" aria-label="Project categories">
                      {project.tags.map((tag) => (
                        <li key={tag.label}>
                          <span
                            className={`works-case-card-tag works-case-card-tag--${tag.variant}`}
                          >
                            {tag.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
