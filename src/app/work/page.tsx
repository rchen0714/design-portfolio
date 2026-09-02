const projects = [
  { title: "Talentora AI", href: "/work/talentora-ai" },
  { title: "Smata", href: "/work/talentora-ai" },
  { title: "Via", href: "/work/talentora-ai" },
  { title: "Thrival", href: "/work/talentora-ai" },
];

export default function WorkPage() {
  return (
    <main id="work-page">
      <div className="works-page-container">
        <h1 className="works-page-title">works.</h1>

        <div className="works-grid">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="works-grid-item"
              aria-label={`View ${project.title} project`}
            >
              <span className="works-grid-placeholder" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
