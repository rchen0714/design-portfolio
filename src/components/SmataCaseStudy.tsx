import Image from "next/image";
import Link from "next/link";
import BackToWorksLink from "@/components/BackToWorksLink";

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
}: {
  labels: [string, string];
  screens?: [string, string];
}) {
  if (screens) {
    return (
      <div className="sm-phone-pair sm-phone-pair--side-by-side">
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

function IterationFlow({
  beforeLabel = "Iteration 1",
  afterLabel = "Iteration 2",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="sm-iteration-flow">
      <div className="sm-iteration-group">
        <p className="sm-iteration-label">{beforeLabel}</p>
        <PhonePair
          labels={[
            "Smata app before redesign — screen 1",
            "Smata app before redesign — screen 2",
          ]}
          screens={["/smata/smatabefore.png", "/smata/smatabefore2.png"]}
        />
      </div>
      <span className="sm-iteration-arrow" aria-hidden="true">
        →
      </span>
      <div className="sm-iteration-group sm-iteration-group--wide">
        <p className="sm-iteration-label">{afterLabel}</p>
        <div className="sm-phone-row">
          <Placeholder className="sm-placeholder--phone-sm" label="After screen 1" />
          <Placeholder className="sm-placeholder--phone-sm" label="After screen 2" />
          <Placeholder className="sm-placeholder--phone-sm" label="After screen 3" />
          <Placeholder className="sm-placeholder--phone-sm" label="After screen 4" />
        </div>
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
    why: "The goal was to reduce friction to get as many users on for testing and to enforce the branding more.",
  },
  {
    badge: "02",
    title: "Shifting attention from location to people",
    summary:
      "We redesigned the feed card to prioritize user photos and the shared study moment instead of the map location",
    changed:
      "The photo became the dominant visual element within the feed card element. The map location information became a smaller visual component of the card.",
    why: "We felt that the documentation of the social aspect should be the primary focus of each post. Since Smata is centered around who students are studying with and the moments they share, we made photos more prominent and moved the map into a supporting role.",
  },
];

const feedbackThemes = [
  {
    title: "Activation and social discovery",
    body: "Some testers wanted an easier way to find or invite friends immediately after creating an account.",
  },
  {
    title: "Starting a session",
    body: "Some feedback suggested that beginning a study session could be made more visually prominent and easier to discover.",
  },
  {
    title: "Lockdown Mode",
    body: "Testers responded positively to this feature while also identifying opportunities around permission clarity, blocked-app messaging, and returning users to their active timer.",
  },
  {
    title: "Motivation and progress",
    body: "Users also suggested deeper reward systems, streaks, achievements, character-based encouragement, and additional ways to visualize progress.",
  },
  {
    title: "Map and community",
    body: "Feedback suggested that the users saw potential for the map to better support nearby studying and community discovery.",
  },
];

const testimonials = [
  {
    initials: "SL",
    name: "Sophia L.",
    date: "Oct 7",
    quote:
      "I had to dig around to find how to invite my friends. It would be great to see that right after signing up!",
    upvotes: 3,
  },
  {
    initials: "JM",
    name: "Jason M.",
    date: "Oct 8",
    quote:
      "Starting a session works, but the start button is kind of small. I almost missed it the first few times.",
    upvotes: 2,
  },
  {
    initials: "AK",
    name: "Aisha K.",
    date: "Oct 9",
    quote:
      "Lockdown Mode is super helpful. A couple things though - the permission prompt was confusing, and it was not clear why apps were blocked. Also easy way back to my timer if I exit the app?",
    upvotes: 4,
  },
  {
    initials: "ER",
    name: "Ethan R.",
    date: "Oct 10",
    quote:
      "Love the concept! More rewards would be awesome - streaks, achievements, maybe even leveling up Marty or something.",
    upvotes: 2,
  },
];

const betaThemes = [
  "Reduce activation friction",
  "Make study actions easier to discover",
  "Strengthen social discovery",
  "Deepen motivation and progress",
];

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
                  href="https://apps.apple.com/us/app/smata-study-smarter/id6775473971"
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
            <p className="sm-section-label">Overview</p>
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
              <p className="sm-section-label">Background and problem</p>
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
            <p className="sm-section-label">01 / THE BRANDING</p>
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
          <p className="sm-section-label">01 / THE Features</p>

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
            <p className="sm-section-label">Visual Strategy</p>
            <h2 className="sm-section-title">
              Iterations and improvements that helped strengthen Smata&apos;s social
              experience
            </h2>
          </div>

          <p>
            The UI went through low, mid, and high-fidelity stages, but the most critical
            challenges were not addressed by simply polishing the product. Throughout the
            project, we continuously refined key areas of the experience to reduce
            friction, strengthen the social experience, and stay aligned with Smata&apos;s
            core mission: helping students build productive study habits.
          </p>

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

                <IterationFlow />
              </article>
            ))}
          </div>
        </section>

        <hr className="sm-divider" />

        {/* Beta */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="sm-section-label">Beta Insights</p>
            <h2 className="sm-section-title">
              Our beta testers guided us on what to improve next
            </h2>
          </div>

          <div className="sm-beta-grid">
            <div className="sm-beta-themes">
              <h3 className="sm-beta-heading">
                Approximately 50 users began testing Smata before launch
              </h3>
              <p>
                We collected about 50 users began testing Smata before launch and asked
                them to provide feedback so we could get a meaningful look at how people
                were responding to the product in use.
              </p>
              <p>
                I reviewed feedback directly from testers as well as feedback collected by
                the founders. I noticed several themes emerging:
              </p>

              <div className="sm-feedback-list">
                {feedbackThemes.map((item) => (
                  <div className="sm-feedback-row" key={item.title}>
                    <span className="sm-feedback-icon" aria-hidden="true" />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sm-beta-quotes">
              <div className="sm-quote-panel">
                <h3>Real user feedback</h3>
                <p className="sm-quote-panel-sub">
                  A small sample of feedback received during beta testing.
                </p>

                <div className="sm-testimonial-grid">
                  {testimonials.map((item) => (
                    <blockquote className="sm-testimonial-card" key={item.name}>
                      <div className="sm-testimonial-top">
                        <span className="sm-testimonial-avatar">{item.initials}</span>
                        <div>
                          <p className="sm-testimonial-name">{item.name}</p>
                          <p className="sm-testimonial-date">{item.date}</p>
                        </div>
                      </div>
                      <p>&ldquo;{item.quote}&rdquo;</p>
                      <p className="sm-testimonial-upvotes">{item.upvotes} upvotes</p>
                    </blockquote>
                  ))}
                </div>
              </div>

              <div className="sm-themes-box">
                <p className="sm-themes-box-label">Emerging beta themes:</p>
                <ol className="sm-themes-list">
                  {betaThemes.map((theme, index) => (
                    <li key={theme}>
                      {index + 1}. {theme}
                    </li>
                  ))}
                </ol>
                <p className="sm-themes-note">
                  Retrospective grouping of early beta feedback
                </p>
              </div>
            </div>
          </div>

          <p>
            At this stage, Smata has moved from an early visual concept into a working
            product with a cohesive interface and design system. The social feed,
            Lockdown Mode, friend leaderboard, and core study experience are implemented,
            while broader location sharing, campus-based competition, and monetization
            features remain future opportunities. The next phase will focus on synthesizing
            beta feedback and using real product usage to guide the next round of design
            decisions.
          </p>
        </section>

        <hr className="sm-divider" />

        {/* Outcome */}
        <section className="sm-section">
          <div className="sm-section-header">
            <p className="sm-section-label">The Outcome</p>
            <h2 className="sm-section-title">What I learned</h2>
          </div>

          <div className="sm-outcome-columns">
            <p>
              Since joining Smata in November 2025, I have helped move the product from
              an early visual concept into a cohesive interface and design system now being
              used in the working beta.
            </p>
            <p>
              Today: ~50 users have participated in beta testing. The redesigned product
              has progressed into its August 2026 launch window. The social feed is
              implemented. Lockdown Mode is fully functional. The current leaderboard
              supports competition between friends. Beta feedback is actively being
              collected and reviewed.
            </p>
          </div>

          <Placeholder
            className="sm-placeholder--montage"
            label="Final product montage — polished final screens"
          />
        </section>
      </div>
    </main>
  );
}
