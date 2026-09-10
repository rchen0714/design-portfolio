import Image from "next/image";
import HorizontalCarousel from "@/components/HorizontalCarousel";

const experience = [
  {
    company: "Homestead Funding",
    role: "Marketing Coordinator",
    description:
      "Leading campaign execution and creative asset coordination across channels.",
    dates: "Aug 2026 — Present",
  },
  {
    company: "Outloud Talent",
    role: "Social Media Marketing Intern",
    description: "Supporting content planning, scheduling, and analytics reporting.",
    dates: "Mar 2025 — Present",
  },
  {
    company: "Gemi Beauty",
    role: "Freelance Graphic Designer",
    description: "Designed promotional assets for a limited campaign.",
    dates: "July 2026 — July 2026",
  },
  {
    company: "Emerging Technology Studio",
    role: "Design Specialist",
    description: "Contributed to visual design and design systems work.",
    dates: "May 2025 — May 2026",
  },
  {
    company: "Happy Medium",
    role: "Blueprint Layout Designer",
    description:
      "Focused on layout and composition for print and digital blueprints.",
    dates: "Mar 2025 — May 2025",
  },
  {
    company: "BOWIE",
    role: "Marketing Intern",
    description: "Assisted with campaign support and marketing operations.",
    dates: "Jun 2024 — Aug 2024",
  },
];

const tools = [
  { name: "HTML5", src: "/about/tools/html5.png", width: 219, height: 219 },
  { name: "Microsoft Teams", src: "/about/tools/teams.png", width: 155, height: 219 },
  { name: "Figma", src: "/about/tools/figma.png", width: 169, height: 219 },
  { name: "Adobe Creative Cloud", src: "/about/tools/adobe.png", width: 207, height: 219 },
  { name: "Webflow", src: "/about/tools/webflow.png", width: 219, height: 219 },
  { name: "Procreate", src: "/about/tools/procreate.png", width: 225, height: 219 },
  { name: "Spotify", src: "/about/tools/spotify.png", width: 219, height: 219 },
  { name: "Notion", src: "/about/tools/notion.png", width: 219, height: 219 },
  { name: "Framer", src: "/about/tools/framer.svg", width: 213, height: 213 },
  { name: "Slack", src: "/about/tools/slack.png", width: 219, height: 219 },
  { name: "Canva", src: "/about/tools/canva.png", width: 219, height: 219 },
];

function PolaroidPlaceholder({
  className = "",
  label = "Photo placeholder",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`about-polaroid ${className}`.trim()} aria-hidden="true">
      <div className="about-polaroid-frame">
        <div className="about-polaroid-photo" />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main id="about-page">
      <div className="about-page-container">
        <header className="about-hero-header">
          <h1 className="about-hero-title">ABOUT ME</h1>
          <p className="about-location">📍 New York City, NY</p>
        </header>

        <section className="about-intro-section" aria-label="Introduction">
          <div className="about-polaroids">
            <PolaroidPlaceholder className="about-polaroid--back" />
            <PolaroidPlaceholder className="about-polaroid--front" />
          </div>

          <div className="about-intro-content">
            <div className="about-bio">
              <p>Hi I&apos;m Ruby!</p>
              <p>
                I&apos;m a recent Boston University grad who&apos;s passionate about
                creating innovative and user-centered solutions to complex problems
                I&apos;m passionate about creating. My goal is to lorem ipsum
              </p>
              <p>
                When I&apos;m not designing, I&apos;m I&apos;m a I&apos;m passionate
                about creating innovative and user-centered solutions to complex
                problems I&apos;m passionate about creating
              </p>
              <p>Thanks!</p>
            </div>

            <div className="about-chat">
              <h2 className="about-section-heading about-section-heading--inline">
                Want to chat?
              </h2>
              <p>
                Whether you want to talk about projects, collabs, tech, design, or
                just want to chat, feel free to contact me :P
              </p>
              <div className="about-chat-buttons">
                <a
                  href="https://www.linkedin.com/in/rchen0714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-chat-button"
                >
                  LinkedIn
                </a>
                <a href="mailto:rc071404@bu.edu" className="about-chat-button">
                  rc071404@bu.edu
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-experience-section" aria-label="Experience">
          <h2 className="about-section-heading">experience.</h2>

          <div className="about-experience-layout">
            <ol className="about-timeline">
              {experience.map((item) => (
                <li key={`${item.company}-${item.dates}`} className="about-timeline-item">
                  <div className="about-timeline-marker" aria-hidden="true" />
                  <div className="about-timeline-content">
                    <div className="about-timeline-meta">
                      <p className="about-timeline-company">{item.company}</p>
                      <p className="about-timeline-role">- {item.role}</p>
                    </div>
                    <p className="about-timeline-dates">{item.dates}</p>
                    <p className="about-timeline-description">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="about-doodles" aria-hidden="true">
              <Image
                src="/about/doodles/star.png"
                alt=""
                width={431}
                height={431}
                className="about-doodle about-doodle--star"
              />
              <Image
                src="/about/doodles/sparkles.png"
                alt=""
                width={363}
                height={363}
                className="about-doodle about-doodle--sparkles"
              />
              <Image
                src="/about/doodles/clover.png"
                alt=""
                width={506}
                height={500}
                className="about-doodle about-doodle--clover"
              />
            </div>
          </div>
        </section>

        <section className="about-tools-section" aria-label="Tools">
          <h2 className="about-section-heading">
            tools I like to use.
          </h2>

          <HorizontalCarousel ariaLabel="Tools carousel">
            {tools.map((tool) => (
              <div key={tool.name} className="about-carousel-item about-tool-item">
                <div
                  className="about-tool-logo-wrap"
                  style={{ width: tool.width, height: tool.height }}
                >
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={tool.width}
                    height={tool.height}
                    className="about-tool-logo"
                  />
                </div>
              </div>
            ))}
          </HorizontalCarousel>
        </section>

        <section className="about-life-section" aria-label="Life outside of design">
          <div className="about-life-header">
            <h2 className="about-section-heading">my life outside of design.</h2>
            <p className="about-life-subtitle">
              some low quality photos of high quality people
            </p>
          </div>

          <HorizontalCarousel ariaLabel="Life photos carousel">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="about-carousel-item about-life-item">
                <PolaroidPlaceholder label={`Life photo placeholder ${index + 1}`} />
              </div>
            ))}
          </HorizontalCarousel>
        </section>
      </div>
    </main>
  );
}
