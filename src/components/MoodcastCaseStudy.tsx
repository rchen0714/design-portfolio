import Image from "next/image";
import Link from "next/link";

function MediaPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`mc-media-placeholder ${className}`.trim()} aria-hidden="true">
      <span>Image placeholder</span>
    </div>
  );
}

const moodCards = [
  {
    title: "Sunny Mood Card",
    body: "Bright gradients and upbeat playlist cues for clear-sky days.",
    image: "/moodcast/card-sunny.png",
    alt: "MoodCast sunny weather screen with a clear-sky Spotify playlist recommendation",
  },
  {
    title: "Rainy Mood Card",
    body: "Soft blues and mellow tracks when the forecast turns wet.",
    image: "/moodcast/card-rainy.png",
    alt: "MoodCast rainy weather screen with a rain-themed Spotify playlist recommendation",
  },
  {
    title: "Cloudy Mood Card",
    body: "Balanced tones and easy-listening picks for overcast weather.",
    image: "/moodcast/card-cloudy.png",
    alt: "MoodCast cloudy weather screen with an overcast Spotify playlist recommendation",
  },
  {
    title: "Snowy Mood Card",
    body: "Cool tones and cozy playlists when snow is in the forecast.",
    image: "/moodcast/card-snow.png",
    alt: "MoodCast snowy weather screen with a winter Spotify playlist recommendation",
  },
] as const;

const MOOD_CARD_WIDTH = 1878;
const MOOD_CARD_HEIGHT = 1827;

export default function MoodcastCaseStudy() {
  return (
    <main id="moodcast-case-study">
      <div className="mc-top">
        <div className="mc-content">
          <Link href="/#selected-works" className="mc-back-link">
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

          <header className="mc-hero-block">
            <div className="mc-hero-panel mc-hero-panel--art">
              <Image
                src="/moodcast/moodcasthero.png"
                alt="MoodCast — Designing a weather app that feels as dynamic as the forecast itself"
                width={3426}
                height={2019}
                className="mc-hero-art"
                priority
              />
              <div className="sr-only">
                <h1>MoodCast</h1>
                <p>Designing a weather app that feels as dynamic as the forecast itself.</p>
                <p>
                  MoodCast connects weather updates with Spotify playlists, turning everyday
                  forecasts into a more engaging, mood-based experience.
                </p>
              </div>
            </div>

            <dl className="cs-meta-table">
              <div className="cs-meta-item">
                <dt>Role</dt>
                <dd>Web Developer and User Interface Designer</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Tools</dt>
                <dd>React, Next.js, CSS, Tailwind, Spotify API, Weather API</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Timeline</dt>
                <dd>Summer 2025</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Platform</dt>
                <dd>Web Application</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Class</dt>
                <dd>CS391 – Web Application Development</dd>
              </div>
            </dl>
          </header>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="mc-challenge-title">
            <p className="cs-section-label">01 / The challenge</p>
            <h2 id="mc-challenge-title" className="cs-section-title">
              How might we bring more personality and fun to the everyday weather
              experience?
            </h2>
            <div className="mc-split">
              <MediaPlaceholder className="mc-media-placeholder--tall" />
              <p className="cs-body">
                Weather apps are designed to deliver information updates, but the experience
                feels overly functional. MoodCast explores how visual design and mood can make
                checking the forecast feel more engaging and memorable.
              </p>
            </div>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="mc-role-title">
            <p className="cs-section-label">02 / My role</p>
            <h2 id="mc-role-title" className="cs-section-title">
              I created a weather experience that connects forecasts with playlists for each
              mood
            </h2>
            <div className="mc-split">
              <div className="mc-stack">
                <div className="mc-prompt-callout">
                  <p className="mc-prompt-label">The Prompt</p>
                  <p>
                    Create a web application using React and Next.js while making at least one
                    API call. Make sure the application is fully responsive.
                  </p>
                </div>
                <p className="cs-body">
                  I designed and built MoodCast to loop real-time weather data into curated
                  Spotify playlists. Users enter a city, see the forecast, and get music that
                  matches the mood of the day—combining API integration, responsive layout, and
                  playful visual design.
                </p>
              </div>
              <MediaPlaceholder className="mc-media-placeholder--tall" />
            </div>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="mc-components-title">
            <p className="cs-section-label">03 / Component design</p>
            <h2 id="mc-components-title" className="cs-section-title">
              Card Components
            </h2>
            <div className="mc-card-grid">
              {moodCards.map((card) => (
                <article key={card.title} className="mc-card-item">
                  <div className="mc-card-media">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={MOOD_CARD_WIDTH}
                      height={MOOD_CARD_HEIGHT}
                      className="mc-card-image"
                    />
                  </div>
                  <h3 className="cs-subsection-title">{card.title}</h3>
                  <p className="mc-card-caption">{card.body}</p>
                </article>
              ))}
            </div>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section mc-final-section" aria-labelledby="mc-final-title">
            <p className="cs-section-label">04 / The final look</p>
            <h2 id="mc-final-title" className="cs-section-title">
              See MoodCast in action
            </h2>
            <p className="cs-body mc-final-lead">
              Explore the live project and interact with the full weather-to-playlist
              experience—from city search to mood-based music recommendations.
            </p>
            <MediaPlaceholder className="mc-media-placeholder--final" />
            <div className="mc-final-actions">
              <Link href="#" className="mc-cta-button mc-cta-button--primary">
                Visit Live Site
              </Link>
              <Link href="#" className="mc-cta-button mc-cta-button--secondary">
                View Source Code
              </Link>
            </div>
            <p className="mc-final-footnote">
              Built with React, Next.js, and Spotify API · Hosted on Vercel
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
