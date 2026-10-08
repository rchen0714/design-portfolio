import Image from "next/image";
import Link from "next/link";
import BackToWorksLink from "@/components/BackToWorksLink";

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

const MOODCAST_LIVE_URL =
  "https://mp-4-pkry2htmy-rc071404-buedus-projects.vercel.app";

const MOODCAST_SOURCE_URL = "https://github.com/rchen0714/Weather-Playlist-Project";

const roleWorkflowScreens = [
  {
    src: "/moodcast/section2-1.png",
    alt: "MoodCast home screen where users search for a city to load the weather forecast",
    width: 2085,
    height: 1483,
  },
  {
    src: "/moodcast/section2-2.png",
    alt: "MoodCast weather results with forecast details and mood-based playlist recommendations",
    width: 2475,
    height: 1482,
  },
  {
    src: "/moodcast/section2-3.png",
    alt: "MoodCast Spotify playlist view matched to the current weather mood",
    width: 2475,
    height: 1482,
  },
] as const;

const challengeWeatherExamples = [
  {
    src: "/moodcast/challenge-weather-manhattan.png",
    alt: "Manhattan weather forecast interface showing alerts, current rain conditions, and hourly outlook",
    width: 957,
    height: 1024,
  },
  {
    src: "/moodcast/challenge-weather-google.png",
    alt: "Google Search weather results for Brooklyn with temperature graph and weekly forecast",
    width: 1024,
    height: 748,
  },
] as const;

export default function MoodcastCaseStudy() {
  return (
    <main id="moodcast-case-study">
      <div className="mc-top">
        <div className="mc-content">
          <BackToWorksLink className="mc-back-link" />

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
            <p className="cs-section-label">The challenge</p>
            <h2 id="mc-challenge-title" className="cs-section-title">
              How might we bring more personality and fun to the everyday weather
              experience?
            </h2>
            <p className="cs-body">
              Weather apps are designed to deliver information updates, but the experience
              feels overly functional. MoodCast explores how visual design and mood can make
              checking the forecast feel more engaging and memorable.
            </p>
            <div className="mc-challenge-examples">
              {challengeWeatherExamples.map((example) => (
                <div key={example.src} className="mc-challenge-example-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={example.src}
                    alt={example.alt}
                    width={example.width}
                    height={example.height}
                    className="mc-challenge-example-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="mc-role-title">
            <p className="cs-section-label">My role</p>
            <h2 id="mc-role-title" className="cs-section-title">
              I created a weather experience that connects forecasts with playlists for each
              mood
            </h2>
            <div className="mc-stack">
              <div className="cs-callout cs-callout--prompt">
                <div className="cs-callout-block-layout">
                  <div className="cs-callout-icon-wrap" aria-hidden>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/moodcast/solution.svg"
                      alt=""
                      width={44}
                      height={44}
                      className="cs-callout-icon"
                    />
                  </div>
                  <h3>The Prompt</h3>
                  <p>
                    Create a web application using React and Next.js while making at least one
                    API call. Make sure the application is fully responsive.
                  </p>
                </div>
              </div>
              <p className="cs-body">
                I designed and built MoodCast to loop real-time weather data into curated
                Spotify playlists. Users enter a city, see the forecast, and get music that
                matches the mood of the day—combining API integration, responsive layout, and
                playful visual design.
              </p>
              <div className="mc-role-workflow">
                {roleWorkflowScreens.map((screen, index) => (
                  <div className="mc-role-workflow-group" key={screen.src}>
                    {index > 0 ? (
                      <span className="mc-workflow-arrow" aria-hidden="true">
                        →
                      </span>
                    ) : null}
                    <div className="mc-role-workflow-screen">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        width={screen.width}
                        height={screen.height}
                        className="mc-role-workflow-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section" aria-labelledby="mc-components-title">
            <p className="cs-section-label">Component design</p>
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
            <p className="cs-section-label">The final look</p>
            <h2 id="mc-final-title" className="cs-section-title">
              See MoodCast in action
            </h2>
            <p className="cs-body mc-final-lead">
              Explore the live project and interact with the full weather-to-playlist
              experience—from city search to mood-based music recommendations.
            </p>
            <Link
              href={MOODCAST_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-final-preview-link"
            >
              <Image
                src="/casebanners/moodcastbanner.png"
                alt="MoodCast app landing page — open live site"
                fill
                sizes="(max-width: 768px) 100vw, 56rem"
                className="mc-final-preview-image"
              />
            </Link>
            <div className="mc-final-actions">
              <Link
                href={MOODCAST_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mc-cta-button mc-cta-button--primary"
              >
                Visit Live Site
              </Link>
              <Link
                href={MOODCAST_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mc-cta-button mc-cta-button--secondary"
              >
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
