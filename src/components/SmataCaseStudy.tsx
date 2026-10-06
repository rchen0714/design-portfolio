import Image from "next/image";
import Link from "next/link";
import BackToWorksLink from "@/components/BackToWorksLink";

function nameInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Placeholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`sm-placeholder ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    />
  );
}

function PhonePair({
  labels,
  screens,
  stacked,
}: {
  labels: readonly string[];
  screens?: readonly string[];
  stacked?: boolean;
}) {
  if (screens) {
    const isTriple = screens.length === 3;
    return (
      <div
        className={`sm-phone-pair sm-phone-pair--side-by-side${stacked ? " sm-phone-pair--stacked" : ""}${isTriple ? " sm-phone-pair--triple" : ""}`.trim()}
      >
        {screens.map((src, index) => (
          <div key={src} className="sm-phone-pair-frame">
            <img
              src={src}
              alt={labels[index]}
              width={1080}
              height={1920}
              className="sm-phone-pair-image"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="sm-phone-pair">
      <Placeholder className="sm-placeholder--phone" label={labels[0]} />
      <Placeholder className="sm-placeholder--phone" label={labels[1]} />
    </div>
  );
}

type IterationScreenPair = {
  before: readonly string[];
  after: readonly [string, string];
  beforeAlt: readonly string[];
  afterAlt: readonly [string, string];
};

function SmataIterationArrow() {
  return (
    <svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="sm-iteration-arrow"
      aria-hidden
    >
      <path
        d="M1.60742 1.60742L9.64425 9.64425L1.60742 17.6811"
        stroke="currentColor"
        strokeWidth={3.21473}
        strokeLinecap="round"
      />
    </svg>
  );
}

function IterationFlow({
  beforeLabel = "Before",
  afterLabel = "After",
  screens,
  widePair,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  screens: IterationScreenPair;
  widePair?: boolean;
}) {
  return (
    <div className={`sm-iteration-flow${widePair ? " sm-iteration-flow--wide-pair" : ""}`.trim()}>
      <div className="sm-iteration-group">
        <p className="sm-iteration-label">{beforeLabel}</p>
        <PhonePair labels={screens.beforeAlt} screens={screens.before} stacked={widePair} />
      </div>
      <SmataIterationArrow />
      <div className="sm-iteration-group">
        <p className="sm-iteration-label">{afterLabel}</p>
        <PhonePair labels={screens.afterAlt} screens={screens.after} stacked={widePair} />
      </div>
    </div>
  );
}

const stats = [
  {
    value: "84%",
    body: "of 45 studies found a negative relationship between smartphone use and university students' academic performance.",
  },
  {
    value: "84.7%",
    body: "of university students in a 2025 study reported spending more than 3 hours per day on social media.",
  },
  {
    value: "55%",
    body: "of students in one recent study were classified as having problematic levels of smartphone use.",
  },
];

const features = [
  {
    reverse: false,
    number: "01",
    title: "Start and track a study session",
    lead: "The timer is one of Smata's core interactions.",
    body: "Students can begin a study session, track their study time, and record the activity as part of their broader progress. Throughout the study flow, Marty is integrated into key screens to make the experience feel more encouraging, playful, and supportive rather than purely functional.",
    screens: [
      "/smata/gifs/smatafeature01-1.gif",
      "/smata/gifs/smatafeature01-2.gif",
    ] as [string, string],
  },
  {
    reverse: true,
    number: "02",
    title: "Protect focus with Lockdown Mode",
    lead: "Choose distracting apps to block while you study and keep your attention on the work in front of you.",
    body: "Lockdown Mode supports Smata's goal of encouraging healthier study habits instead of competing for more screen time.",
    screens: [
      "/smata/gifs/smatafeature02-1.png",
      "/smata/gifs/smatafeature02-2.gif",
    ] as [string, string],
  },
  {
    reverse: false,
    number: "03",
    title: "Turn study activity into something social",
    lead: "After finishing a session, users can turn their progress into a post by adding photos, captions, titles, and location details.",
    body: "The feed puts more emphasis on the people and moments behind studying, making progress something friends can celebrate together.",
    screens: [
      "/smata/gifs/smatafeature03-1.gif",
      "/smata/gifs/smatafeature03-2.gif",
    ] as [string, string],
  },
  {
    reverse: true,
    number: "04",
    title: "Make progress with a little competition",
    lead: "Compare your study activity with friends through Smata's leaderboard.",
    body: "The leaderboard lets users compare study activity with friends, introducing a layer of friendly competition and accountability. Future versions are intended to extend this concept to broader communities such as campuses.",
    screens: [
      "/smata/gifs/smatafeature04-1.png",
      "/smata/gifs/smatafeature04-2.gif",
    ] as [string, string],
  },
  {
    reverse: false,
    number: "05",
    title: "Creating a foundation for location-based studying",
    lead: "Use the map to see where friends are studying and discover opportunities to study together in-person.",
    body: "Location sharing is intended to remain optional, with privacy controls giving users more control over when and with whom their location is visible.",
    screens: [
      "/smata/gifs/smatafeature05-1.gif",
      "/smata/gifs/smatafeature05-2.gif",
    ] as [string, string],
  },
];

const iterationCards = [
  {
    badge: "01",
    title: "Reducing friction at signup",
    summary:
      "We simplified the onboarding flow to reduce friction during signup and to identify whether a user was a student. This will help us connect them to their Campus Leaderboard.",
    changed:
      "We added a clearer way for users to sign up with student status. We also made the onboarding more visually appealing.",
    why: "The goal was to reduce friction to get as many users on for testing and feedback so we decreased the amount of steps for regular email signup. We also added more visual graphics of Marty enforce the branding more.",
    screens: {
      before: [
        "/smata/iteration1before-1.png",
        "/smata/anothersignup.png",
        "/smata/iteration1before-2.png",
      ],
      after: ["/smata/iteration1after-1.png", "/smata/iteration1after-2.png"] as [
        string,
        string,
      ],
      beforeAlt: [
        "Smata signup flow before redesign — Reap onboarding screen",
        "Smata signup flow before redesign — alternate signup screen",
        "Smata signup flow before redesign — Join a Campus screen",
      ],
      afterAlt: [
        "Smata signup flow after redesign — screen 1",
        "Smata signup flow after redesign — screen 2",
      ] as [string, string],
    },
  },
  {
    badge: "02",
    title: "Shifting attention from location to people",
    summary:
      "We redesigned the feed card to prioritize user photos and the shared study moment instead of the map location",
    changed:
      "The photo became the dominant visual element within the feed card element. The map location information became a smaller visual component of the card.",
    why: "We felt that the documentation of the social aspect should be the primary focus of each post. Since Smata is centered around who students are studying with and the moments they share, we made photos more prominent and moved the map into a supporting role.",
    screens: {
      before: [
        "/smata/iteration2cardbefore.png",
        "/smata/iteration2card-before2.gif",
      ] as [string, string],
      after: [
        "/smata/iteration2cardafter.png",
        "/smata/iteration2card-after2.gif",
      ] as [string, string],
      beforeAlt: [
        "Smata feed card before redesign",
        "Smata feed experience before redesign",
      ] as [string, string],
      afterAlt: [
        "Smata feed card after redesign",
        "Smata feed experience after redesign",
      ] as [string, string],
    },
  },
];

const feedbackThemes = [
  {
    badge: "01",
    title: "More intentional study sessions",
    body: "Users wanted more control over how a session works, including goals, countdown timers, breaks, and different ways to structure their study time.",
  },
  {
    badge: "02",
    title: "Social studying & discovery",
    body: "Testers repeatedly saw potential for Smata to help them study alongside friends, discover nearby users, and more easily invite people into sessions.",
  },
  {
    badge: "03",
    title: "Motivation & rewards",
    body: "Users wanted stronger incentives for returning to Smata, especially through streaks, badges, achievements, progress tracking, and Marty customization.",
  },
  {
    badge: "04",
    title: "Clearer core interactions",
    body: "While users generally liked the interface, several important actions felt too small or visually unclear, especially starting sessions, following users, and granting permissions.",
  },
  {
    badge: "05",
    title: "Marty & AI as a meaningful companion",
    body: "Users liked Smata’s encouraging personality, but wanted the AI experience to provide more value or feel more closely tied to Marty as a character.",
  },
];

const testimonials = [
  {
    name: "Eleanor Janotta",
    quote: "I just studied w it for like an hour… I liked it.",
    themeLabel: "Core study experience",
  },
  {
    name: "Maya Thompson",
    quote:
      "I appreciate how you can choose what apps to block and start or stop whenever you want so you aren’t tied down to a specific time.",
    themeLabel: "Lockdown Mode",
  },
  {
    name: "Jordan Lee",
    quote: "The AI message at end is funny but could prob be slightly more useful.",
    themeLabel: "Marty & AI",
  },
  {
    name: "Alex Morgan",
    quote: "Character or avatar would be huge, let people customize Marty.",
    themeLabel: "Motivation & rewards",
  },
];

const betaThemes = [
  "Make study sessions more intentional",
  "Strengthen social accountability",
  "Reward continued progress",
  "Improve discoverability of key actions",
  "Give Marty a more meaningful role",
];

const SMATA_APP_STORE_URL =
  "https://apps.apple.com/us/app/smata-study-smarter/id6775473971";

export default function SmataCaseStudy() {
  return (
    <main id="smata-case-study">
      <div className="sm-page-container">
        {/* Hero */}
        <section className="sm-hero">
          <BackToWorksLink className="sm-back-link" />

          <div className="sm-hero-banner">
            <Image
              src="/smata/smatahero.png"
              alt="Smata: Study Smarter — collaborative study app hero"
              width={3818}
              height={1796}
              className="sm-hero-image"
              priority
              sizes="100vw"
            />
          </div>

          <dl className="sm-meta-table">
            <div className="sm-meta-item">
              <dt>Role</dt>
              <dd>Founding Designer</dd>
            </div>
            <div className="sm-meta-item">
              <dt>Timeline</dt>
              <dd>November 2025 – present</dd>
            </div>
            <div className="sm-meta-item">
              <dt>Platform</dt>
              <dd>iOS App</dd>
            </div>
            <div className="sm-meta-item">
              <dt>Status</dt>
              <dd>
                <a
                  href={SMATA_APP_STORE_URL}
                  className="cs-live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Product
                  <Image
                    src="/thrival/right-arrow-icon.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="button-arrow"
                    aria-hidden="true"
                  />
                </a>
              </dd>
            </div>
            <div className="sm-meta-item">
              <dt>Team</dt>
              <dd>
                Jack Devine (Co-founder), Joseph Marotta (Co-founder), Cameron Smith,
                Azra Ozgur (Illustrator), Matthew Smallhouse (Developer), Halit Ozgur
                (Developer)
              </dd>
            </div>
          </dl>
        </section>

        <hr className="sm-divider" />

        {/* Overview */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="cs-section-label">Overview</p>
            <h2 className="sm-section-title">
              Designing a study app to make productive habits feel social, motivating,
              and rewarding
            </h2>
          </div>

          <div className="sm-stack">
            <p>
              Smata is a social study app designed to make studying feel more motivating,
              collaborative, and rewarding. Students can track study sessions, stay
              focused with lockdown tools, share their activity with friends, and engage
              with a community built around productive habits.
            </p>
            <p>
              I joined an early-stage startup as a contract designer. An initial interface
              and brand direction had already been mocked up, but it did not reflect the
              friendly, playful personality the founders of Smata wanted to have.
            </p>
            <p>
              Over the next nine months, I redesigned the product UI, visual system, and
              branding while collaborating closely with the founders, developers, and a
              character artist. Together, we brought Smata from an early concept into beta
              and ultimately to a fully launched application.
            </p>
          </div>

          <div className="sm-split">
            <div className="sm-phone-pair sm-phone-pair--side-by-side">
              <Image
                src="/smata/smataherophone1.png"
                alt="Smata app overview screen"
                width={1251}
                height={2544}
                className="sm-phone-pair-image"
              />
              <Image
                src="/smata/smataherophone2.png"
                alt="Smata app study session screen"
                width={1251}
                height={2544}
                className="sm-phone-pair-image"
              />
            </div>

            <div className="sm-problem-column">
              <p className="cs-section-label">Background and problem</p>
              <h3 className="sm-problem-heading">
                Students are struggling to stay focused when trying to be productive.
                Why is that happening?
              </h3>

              <div className="sm-stat-stack">
                {stats.map((stat) => (
                  <div className="sm-stat-card" key={stat.value}>
                    <p className="sm-stat-value">{stat.value}</p>
                    <p>{stat.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sm-callout-row">
            <div className="sm-inline-callout">
              <h3>The Problem</h3>
              <p>
                How can we help students stay focused, build healthier study habits, and
                make progress feel more motivating and social?
              </p>
            </div>
            <div className="sm-inline-callout">
              <h3>My Solution</h3>
              <p>
                Create a study tool that combines focus tools, study tracking, social
                accountability, progress sharing, and positive reinforcement to help
                students spend less time distracted and more time investing in their
                goals.
              </p>
            </div>
          </div>
        </section>

        <hr className="sm-divider" />

        {/* Branding */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="cs-section-label">THE BRANDING</p>
            <h2 className="sm-section-title">Finding Smata&apos;s Visual Identity</h2>
            <h3 className="sm-section-kicker">REDESIGNING AND REBRANDING</h3>
          </div>

          <div className="sm-stack">
            <p>
              Smata began with an early set of product mockups and branding. However, the
              founders felt the direction was too dark, serious, and visually generic for
              the fun, collaborative, and playful experience they wanted to create. They
              wanted studying to feel more approachable. I asked them what words and vibes
              did they want their application to give:{" "}
              <strong>
                Friendly. Playful. Collaborative. Approachable. Colorful
              </strong>
            </p>
            <p>
              However, I had to keep in mind, the product still needed enough structure
              and clarity to support practical study tools, social activity, statistics,
              and focus features without becoming visually overwhelming.
            </p>
          </div>

          <div className="sm-callout sm-callout--design-challenge">
            <div className="sm-callout-header">
              <div className="sm-callout-icon-wrap" aria-hidden>
                <img
                  src="/smata/solution-star.svg"
                  alt=""
                  width={44}
                  height={44}
                  className="sm-callout-star-icon"
                />
              </div>
              <h3>The Design Challenge</h3>
            </div>
            <p>
              Create a product that makes studying feel fun and social while still
              maintaining a clean, interactive UI.
            </p>
          </div>

          <div className="sm-visual-identity-breakout">
            <Image
              src="/smata/smatavisualidentitynew.png"
              alt="Smata visual identity evolution from early mockups to redesigned branding"
              width={3818}
              height={1279}
              className="sm-visual-identity-image"
              sizes="92vw"
            />
          </div>

          <h3 className="sm-section-kicker">SAY HI TO MARTY!</h3>

          <div className="sm-stack">
            <p>
              Smata was highly collaborative. I worked with the founders, developers, and
              character designer through weekly meetings where we constantly reviewed new
              features, design progress, technical challenges, and visual directions.
              Because branding decisions can be subjective, I often brought multiple
              versions of logos, typography, or visual treatments into these reviews.
              Giving the team tangible alternatives made it easier to identify what felt
              right and continue moving forward.
            </p>
            <p>
              One example involved the mascot illustrations. The mascot itself was
              illustrated by our character designer. I collaborated closely with her by
              identifying where character artwork was needed, requesting specific
              expressions or poses, and integrating the illustrations into the larger
              brand and product system. Early versions of Marty used outlines that no
              longer matched the cleaner UI we were developing. When removing them became
              part of the new direction, the design team recommended having the original
              character artist revise the illustrations herself rather than modifying the
              artwork through AI tools.
            </p>
            <p>
              This kept the character work consistent with the artist&apos;s original style
              while allowing it to fit naturally into the evolving interface.
            </p>
          </div>

          <div className="sm-marty-showcase sm-marty-showcase-breakout">
            <div className="sm-marty-showcase-graphics">
              <Image
                src="/smata/martygraphics.png"
                alt="Marty mascot illustrations and character graphics used across Smata"
                width={13680}
                height={7221}
                className="sm-visual-identity-image"
                sizes="(max-width: 900px) 92vw, 62vw"
              />
            </div>
            <figure className="sm-marty-showcase-in-action">
              <figcaption className="sm-marty-in-action-caption">Marty in action</figcaption>
              <Image
                src="/smata/marty-notifications.jpg"
                alt="Smata push notifications featuring Marty encouraging users during study sessions"
                width={905}
                height={1024}
                className="sm-marty-in-action-image"
                sizes="(max-width: 900px) 72vw, 18rem"
              />
            </figure>
          </div>
        </section>
      </div>

      {/* Product experience banner */}
      <section className="sm-experience-banner">
        <div className="sm-experience-banner-inner">
          <p className="sm-experience-label">The Product Experience</p>
          <h2 className="sm-experience-title">Smata is more than a study timer.</h2>
          <p className="sm-experience-subtitle">
            Connecting focus, progress, and community
          </p>
          <p className="sm-experience-body">
            Smata&apos;s product direction centers on making productive behavior something
            students can share and feel encouraged to continue. The product combines
            individual study tools with social reinforcement rather than treating studying
            as an isolated activity.
          </p>
        </div>
      </section>

      <div className="sm-page-container">
        {/* Features */}
        <section className="sm-section">
          <p className="cs-section-label">THE Features</p>

          {features.map((feature) => (
            <div
              className={`sm-feature-row${feature.reverse ? " sm-feature-row--reverse" : ""}`}
              key={feature.number}
            >
              <div className="sm-feature-copy">
                <h2 className="sm-feature-title">
                  {feature.number} — {feature.title}
                </h2>
                <p className="sm-feature-lead">{feature.lead}</p>
                <p>{feature.body}</p>
              </div>
              <PhonePair
                labels={[`${feature.title} screen 1`, `${feature.title} screen 2`]}
                screens={"screens" in feature ? feature.screens : undefined}
              />
            </div>
          ))}
        </section>

        <hr className="sm-divider" />

        {/* Iterations */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="cs-section-label">Visual Strategy</p>
            <h2 className="sm-section-title">
              Iterations and improvements that helped strengthen Smata&apos;s social
              experience
            </h2>
          </div>

          <div className="sm-iteration-cards">
            {iterationCards.map((card) => (
              <article className="sm-iteration-card" key={card.badge}>
                <span className="sm-iteration-badge">{card.badge}</span>

                <div className="sm-iteration-card-grid">
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.summary}</p>
                  </div>
                  <div>
                    <p className="sm-mini-label">What changed</p>
                    <p>{card.changed}</p>
                  </div>
                  <div>
                    <p className="sm-mini-label">Why</p>
                    <p>{card.why}</p>
                  </div>
                </div>

                <IterationFlow screens={card.screens} widePair={card.badge === "02"} />
              </article>
            ))}
          </div>
        </section>

        <hr className="sm-divider" />

        {/* Beta */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="cs-section-label">Beta Insights</p>
            <h2 className="sm-section-title">
              Beta testing validated the core experience and revealed what to improve next
            </h2>
          </div>

          <div className="sm-beta-summary">
            <h3 className="sm-beta-heading">
              Approximately 50 users tested Smata before launch
            </h3>
            <p>
              We invited approximately 50 users to test Smata before launch and share
              feedback on the experience.
              I reviewed feedback directly from testers as well as notes collected by the
              founders, then grouped recurring comments into several themes that could
              guide future product decisions.
            </p>
          </div>

          <div className="sm-beta-grid">
            <div className="sm-beta-themes">
              <div className="sm-feedback-list">
                {feedbackThemes.map((item) => (
                  <div className="sm-feedback-row" key={item.badge}>
                    <h4>
                      {item.badge} — {item.title}
                    </h4>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm-beta-quotes">
              <div className="sm-quote-panel">
                <h3>Real user feedback</h3>

                <div className="sm-testimonial-grid">
                  {testimonials.map((item) => (
                    <blockquote className="sm-testimonial-card" key={item.name}>
                      <div className="sm-testimonial-top">
                        <span className="sm-testimonial-avatar" aria-hidden="true">
                          {nameInitials(item.name)}
                        </span>
                        <p className="sm-testimonial-name">{item.name}</p>
                      </div>
                      <p className="sm-testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                      <p className="sm-testimonial-theme">{item.themeLabel}</p>
                    </blockquote>
                  ))}
                </div>
              </div>

              <div className="sm-themes-box">
                <p className="sm-themes-box-label">Emerging beta themes</p>
                <ol className="sm-themes-list">
                  {betaThemes.map((theme, index) => (
                    <li key={theme}>
                      {index + 1}. {theme}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="sm-beta-takeaway-breakout">
            <p className="sm-beta-takeaway">
              The beta gave us our first look at how people behaved with Smata outside of
              the design process. Testers responded positively to the core study experience
              and Lockdown Mode, while also identifying opportunities around session
              structure, social accountability, interaction clarity, and long-term
              motivation. I synthesized these recurring patterns to help prioritize the next
              round of product improvements.
            </p>
          </div>
        </section>

        <hr className="sm-divider" />

        {/* Outcome */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="cs-section-label">The Outcome</p>
            <h2 className="sm-section-title">What I learned</h2>
          </div>

          <div className="sm-outcome-columns">
            <p className="sm-outcome-learned">
              Working on Smata taught me how to design with ambiguity and move quickly in a
              fast-paced startup environment. It also taught me how important it is to stay
              adaptable and collaborate with people who bring different roles, perspectives,
              and ways of working to the product. While speed and impact matter, user and
              beta testing are essential for understanding whether a product actually meets
              the needs of its audience. If a polished feature creates friction or lacks real
              value, then it&apos;s not successful or useful for the user. Smata reinforced
              the importance of listening closely, coordinating effectively, and using
              feedback to make more thoughtful product decisions.
            </p>

            <figure className="sm-outcome-analytics">
              <Image
                src="/smata/smata-app-store-stats.png"
                alt="App Store Connect analytics for Smata showing first-time downloads, conversion rate, impressions, and average retention"
                width={1024}
                height={777}
                className="sm-app-store-stats"
                sizes="(max-width: 1024px) 100vw, 32rem"
              />
            </figure>
          </div>
        </section>
      </div>

      <section className="sm-cta" aria-labelledby="sm-cta-title">
        <p className="sm-cta-eyebrow">Try the product</p>
        <h2 id="sm-cta-title" className="sm-cta-title">
          See Smata on the App Store
        </h2>
        <p className="sm-cta-body">
          Download the live app to explore the interactive, social study timer.
          Help us shape experience for future students!
        </p>
        <div className="sm-cta-actions">
          <Link
            href={SMATA_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm-cta-button sm-cta-button--primary"
          >
            Download on the App Store →
          </Link>
        </div>
        <p className="sm-cta-footnote">Available on iOS · Live on the App Store</p>
      </section>
    </main>
  );
}
