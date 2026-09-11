import Image from "next/image";
import AboutPolaroidStack from "@/components/AboutPolaroidStack";
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
  { name: "HTML", src: "/logos/htmllogo.png", width: 169, height: 220 },
  { name: "CSS", src: "/logos/csslogo.png", width: 156, height: 219 },
  { name: "Figma", src: "/logos/figma.png", width: 220, height: 220 },
  { name: "Adobe Creative Cloud", src: "/logos/adobecloud.png", width: 225, height: 220 },
  { name: "Webflow", src: "/logos/webflow.png", width: 219, height: 219 },
  { name: "Next.js", src: "/logos/nextjs.png", width: 220, height: 220 },
  { name: "Procreate", src: "/logos/procreate.png", width: 220, height: 220 },
  { name: "Spotify", src: "/logos/spotify.png", width: 213, height: 214 },
  { name: "Pinterest", src: "/logos/pinterest.png", width: 220, height: 220 },
  { name: "Slack", src: "/logos/slack.png", width: 220, height: 220 },
  { name: "Microsoft Teams", src: "/logos/teams.png", width: 208, height: 219 },
];

const lifePhotos = [
  "Frame 1000003238.png",
  "Frame 1000003239.png",
  "Frame 1000003242.png",
  "Frame 1000003243.png",
  "Frame 1000003245.png",
  "Frame 1000003246.png",
  "Frame 1000003247.png",
  "Frame 1000003248.png",
  "Frame 1000003249.png",
  "Frame 1000003250.png",
  "Frame 1000003251.png",
  "Frame 1000003252.png",
  "Frame 1000003253.png",
  "Frame 1000003254.png",
  "Frame 1000003255.png",
  "Frame 1000003256.png",
].map((file) => `/polaroid-pictures/${encodeURIComponent(file)}`);

export default function AboutPage() {
  return (
    <main id="about-page">
      <div className="about-page-container">
        <header className="about-hero-header">
          <h1 className="about-hero-title">ABOUT ME</h1>
          <p className="about-location">📍 New York City, NY</p>
        </header>

        <section className="about-intro-section" aria-label="Introduction">
          <AboutPolaroidStack />

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
                <div className="about-tool-logo-wrap">
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

          <HorizontalCarousel
            ariaLabel="Life photos carousel"
            className="about-carousel--slow"
          >
            {lifePhotos.map((src) => (
              <div key={src} className="about-carousel-item about-life-item">
                <Image
                  src={src}
                  alt=""
                  width={654}
                  height={1056}
                  className="about-life-polaroid-image"
                  aria-hidden="true"
                />
              </div>
            ))}
          </HorizontalCarousel>
        </section>
      </div>
    </main>
  );
}
