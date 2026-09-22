import Image from "next/image";
import Link from "next/link";

function ScreenshotPlaceholder({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`ts-highlight-media${tall ? " ts-highlight-media--tall" : ""}`.trim()}
      aria-hidden="true"
    >
      <span className="ts-highlight-placeholder-label">Screenshot placeholder</span>
    </div>
  );
}

const featuredHighlight = {
  title: "Browse a space on the map",
  body: "Contribute new study locations to the database so other students can discover them.",
} as const;

const gridHighlights = [
  {
    title: "Add your own study location",
    body: "Interactive campus map showing available study locations with live status indicators.",
  },
  {
    title: "Filter by study needs",
    body: "Filter spaces by noise level, outlets, seating type, and hours of operation.",
  },
  {
    title: "Add preferred spots to your favorites",
    body: "Bookmark favorite study spaces for quick access during crunch time.",
  },
  {
    title: "Leave and read reviews",
    body: "Share your experience and read reviews from other students to find the best spots.",
  },
] as const;

export default function TerrierStudyCaseStudy() {
  return (
    <main id="terrierstudy-case-study">
      <div className="ts-top">
        <div className="ts-content">
          <Link href="/#selected-works" className="ts-back-link">
            <span className="back-to-works-icon" aria-hidden="true">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.60742 1.60742L9.64425 9.64425L1.60742 17.6811"
                  stroke="currentColor"
                  strokeWidth="3.21473"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Back to selected works
          </Link>

          <header className="ts-hero-block">
            <div className="ts-hero-red ts-hero-red--art">
              <Image
                src="/terrierstudy/terrierstudyhero.png"
                alt="TerrierStudy — Helping BU students find study spaces that fit how they work"
                width={3426}
                height={2019}
                className="ts-hero-art"
                priority
              />
              <div className="sr-only">
                <h1>TerrierStudy</h1>
                <p>Helping BU students find study spaces that fit how they work.</p>
                <p>
                  A web app that helps Boston University students discover study spots based
                  their preferences (noise level, outlet access, seating, location etc.)
                </p>
              </div>
            </div>

            <dl className="cs-meta-table">
              <div className="cs-meta-item">
                <dt>Role</dt>
                <dd>Full-Stack Developer, User Interface Designer</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Tools</dt>
                <dd>Django, Python, HTML, CSS, Javascript</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Timeline</dt>
                <dd>December 2024</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Platform</dt>
                <dd>Web Application</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Class</dt>
                <dd>
                  CS412 – Full-Stack Application Design and Development and CS391 – Web
                  Application Development
                </dd>
              </div>
            </dl>
          </header>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="ts-overview-label">
            <div className="cs-section-header">
              <p id="ts-overview-label" className="cs-section-label">
                Overview
              </p>
            </div>

            <div className="ts-stack">
              <h3 className="cs-section-title">The Challenge</h3>
              <p className="cs-body">
                All University students have different study preferences, but there was no easy
                way to compare spaces based on practical factors like noise level, outlets
                availability, swipe-access, and many other factors. Finding a good spot often
                meant trial and error which can waste a lot of time.
              </p>
            </div>

            <div className="ts-stack">
              <h3 className="cs-section-title">The Solution</h3>
              <p className="ts-solution-lead">
                I designed a tool that centralized study-space information to make discovery
                faster and more personalized.
              </p>
              <p className="cs-body">
                I created Terrier Study, a web application that helps students browse and compare
                campus study spaces through filters, ratings, and map-based navigation so they can
                quickly find a location that matches how they like to work.
              </p>
              <p className="cs-body">
                The application uses Django and Python for the backend, with a React frontend and
                a database to manage study-space information, ratings, and user preferences.
              </p>
            </div>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="ts-highlights-title">
            <div className="cs-section-header">
              <p className="cs-section-label">Key product pillars</p>
              <h2 id="ts-highlights-title" className="cs-section-title">
                Key Experience Highlights
              </h2>
            </div>

            <article className="ts-highlight-card ts-highlight-card--featured">
              <ScreenshotPlaceholder tall />
              <h3 className="cs-subsection-title">{featuredHighlight.title}</h3>
              <p className="ts-highlight-body">{featuredHighlight.body}</p>
            </article>

            <div className="ts-highlight-grid">
              {gridHighlights.map((item) => (
                <article key={item.title} className="ts-highlight-card">
                  <ScreenshotPlaceholder />
                  <h3 className="cs-subsection-title">{item.title}</h3>
                  <p className="ts-highlight-body">{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="ts-cta" aria-labelledby="ts-cta-title">
        <p className="ts-cta-eyebrow">03 / Get the full picture</p>
        <h2 id="ts-cta-title" className="ts-cta-title">
          See TerrierStudy in Action
        </h2>
        <p className="ts-cta-body">
          Explore the live project and see how Boston University students discover their ideal
          study spaces. Click the button below to interact with the full application.
        </p>
        <div className="ts-cta-actions">
          <Link href="#" className="ts-cta-button ts-cta-button--primary">
            Visit Live Site →
          </Link>
          <Link href="#" className="ts-cta-button ts-cta-button--secondary">
            View Source Code
          </Link>
        </div>
        <p className="ts-cta-footnote">
          Built with React, Django, and MongoDB — Deployed on Heroku
        </p>
      </section>
    </main>
  );
}
