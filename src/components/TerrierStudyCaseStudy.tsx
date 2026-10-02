import Image from "next/image";
import Link from "next/link";
import BackToWorksLink from "@/components/BackToWorksLink";

const TERRIER_STUDY_LIVE_URL = "https://rchen0714.pythonanywhere.com";
const TERRIER_STUDY_SOURCE_URL =
  "https://github.com/rchen0714/cs412/tree/main/terrier_study";

function HighlightGif({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="ts-highlight-media">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="ts-highlight-gif"
        loading="lazy"
      />
    </div>
  );
}

const featuredHighlight = {
  title: "Browse a space on the map",
  body: "Interactive campus map showing available study locations with live status indicators.",
  gif: "/terrierstudy/browse-map.gif",
  gifWidth: 960,
  gifHeight: 608,
  gifAlt: "TerrierStudy map view showing study locations on the Boston University campus",
} as const;

const gridHighlights = [
  {
    title: "Add your own study location",
    body: "Contribute new study locations to the database so other students can discover them.",
    gif: "/terrierstudy/create-new-spot.gif",
    gifWidth: 1807,
    gifHeight: 1147,
    gifAlt: "TerrierStudy flow for creating and submitting a new study spot",
  },
  {
    title: "Filter by study needs",
    body: "Filter spaces by noise level, outlets, seating type, and hours of operation.",
    gif: "/terrierstudy/filter-by-space.gif",
    gifWidth: 960,
    gifHeight: 608,
    gifAlt: "TerrierStudy filters for narrowing study spaces by preferences",
  },
  {
    title: "Add preferred spots to your favorites",
    body: "Bookmark favorite study spaces for quick access during crunch time.",
    gif: "/terrierstudy/favorite-location.gif",
    gifWidth: 960,
    gifHeight: 608,
    gifAlt: "TerrierStudy favorites list with saved study locations",
  },
  {
    title: "Leave and read reviews",
    body: "Share your experience and read reviews from other students to find the best spots.",
    gif: "/terrierstudy/writereviews.gif",
    gifWidth: 960,
    gifHeight: 608,
    gifAlt: "TerrierStudy reviews for reading and writing spot feedback",
  },
] as const;

export default function TerrierStudyCaseStudy() {
  return (
    <main id="terrierstudy-case-study">
      <div className="ts-top">
        <div className="ts-content">
          <BackToWorksLink className="ts-back-link" />

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
              <HighlightGif
                src={featuredHighlight.gif}
                alt={featuredHighlight.gifAlt}
                width={featuredHighlight.gifWidth}
                height={featuredHighlight.gifHeight}
              />
              <h3 className="cs-subsection-title">{featuredHighlight.title}</h3>
              <p className="ts-highlight-body">{featuredHighlight.body}</p>
            </article>

            <div className="ts-highlight-grid">
              {gridHighlights.map((item) => (
                <article key={item.title} className="ts-highlight-card">
                  <HighlightGif
                    src={item.gif}
                    alt={item.gifAlt}
                    width={item.gifWidth}
                    height={item.gifHeight}
                  />
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
          <Link
            href={TERRIER_STUDY_LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ts-cta-button ts-cta-button--primary"
          >
            Visit Live Site →
          </Link>
          <Link
            href={TERRIER_STUDY_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ts-cta-button ts-cta-button--secondary"
          >
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
