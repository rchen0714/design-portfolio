import Image from "next/image";
import AboutPolaroidStack from "@/components/AboutPolaroidStack";
import EmailCopyButton from "@/components/EmailCopyButton";
import HorizontalCarousel from "@/components/HorizontalCarousel";

type AboutExperienceItem = {
  company: string;
  role: string;
  dates: string;
  description: string;
};

const experience: AboutExperienceItem[] = [
  {
    company: "Thrival",
    role: "Contract Product Designer",
    dates: "Feb 2026 — Present",
    description:
      "Sole designer for a B2B2C fitness app. Redesigned discovery, onboarding, guided sessions, and a scalable mobile design system with engineers and stakeholders. Supported product strategy and launch growth, contributing to 1.58K first-time downloads and 10.4K App Store impressions.",
  },
  {
    company: "Smata",
    role: "Founding Designer",
    dates: "Dec 2025 — Present",
    description:
      "Led end-to-end mobile design from flows through launch, including brand identity, a component system, and 50+ screens across core product areas. Partnered on launch marketing and strategy, helping drive 181 downloads from 403 page views (42.6% conversion).",
  },
  {
    company: "Caidya",
    role: "HR Operations and AI Solutions Intern",
    dates: "Jul 2026 — Aug 2026",
    description:
      "Built an AI-assisted CV review workflow to automate formatting and compliance checks, reducing manual review time per candidate. Supported HR and business teams through workflow design, prompt development, and cross-functional stakeholder communication.",
  },
  {
    company: "Boston University",
    role: "Teaching Assistant, DS280 — Spark! UX Design Workshop",
    dates: "Jan 2025 — May 2026",
    description:
      "Led UX lectures, demos, and hands-on workshops for 20–30 students each semester. Taught research methods, design thinking, and interface design in Spark! UX Design Workshop.",
  },
  {
    company: "Talentora AI",
    role: "Co-Founder & Head of Design",
    dates: "Sept 2024 — Sept 2025",
    description:
      "Co-founded an HR tech platform with LLM-based assessments and ATS integrations; led UX, branding, and user research on a 7-person team. Raised $1K and participated in Innovate@BU Innovation Pathway, Launch Lab, and Spark! Demo Day.",
  },
  {
    company: "BostonHacks",
    role: "Design Head",
    dates: "Jan 2023 — Dec 2025",
    description:
      "Led a 7-person design team across three annual BostonHacks events. Owned branding, merchandise, and promotional graphics with directors and 50+ org members.",
  },
  {
    company: "Chinese Student Association",
    role: "GD Chair, PR Chair, Upperclassmen Advisor",
    dates: "Dec 2022 — May 2026",
    description:
      "Directed design, PR, and branding for 10+ cultural and networking events each year. Mentored members and supported engagement across a 150+ person student organization.",
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
                I&apos;m a recent Boston University graduate who&apos;s passionate about
                creating innovative and multi-disciplinary design solutions to complex problems. 
                My goal is to help businesses by building products that are visually impactful while
                being technologically advanced, intentional and functional.
              </p>
              <p>
                When I&apos;m not designing, I&apos;m probably exploring new restaurants around the city, 
                cafe hopping, or doing fun little arts and crafts. 
              </p>
              <p>Thanks for stopping by! ⋆𐙚 ̊.𝜗𝜚</p>
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
                <EmailCopyButton variant="about" className="about-chat-button" />
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
                    <p className="about-timeline-company">{item.company}</p>
                    <p className="about-timeline-role-dates">
                      {item.role} | {item.dates}
                    </p>
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
                src="/about/doodles/clovernew.png"
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
