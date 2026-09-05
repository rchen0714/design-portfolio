import Image from "next/image";
import Link from "next/link";

function Placeholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`cs-placeholder ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    />
  );
}

const businessGoals = [
  "Personalizing exercise recommendations",
  "Supporting recurring recovery and fitness routines",
  "Helping users discover additional Thrival products and attachments",
  "Building a foundation for paid creator partnerships",
  "Exploring a future subscription model",
];

const productResponses = [
  "Personalized onboarding questionnaire flow",
  "Fitness Library with both Thrival and Creator Content",
  "Compatibility Cues and Full Discovery Library",
  "Adding Creator Profiles",
  "Adding paywall-restricted content",
];

const keyTakeaways = [
  {
    title: "Strategy shapes the interface",
    body: "Broad business goals only become usable when translated into clear product structures, flows, and information hierarchy.",
  },
  {
    title: "Iteration reveals priorities",
    body: "Stakeholder feedback helped clarify what should stay visible during a routine versus what belongs on demand.",
  },
  {
    title: "Ship, then refine",
    body: "Moving from prototype to a live App Store product created real feedback loops that shaped later design decisions.",
  },
];

export default function ThrivalCaseStudy() {
  return (
    <main id="thrival-case-study">
      <div className="cs-page-container">
        {/* Hero */}
        <section className="cs-hero">
          <Link href="/#selected-works" className="cs-back-link">
            ← Back to selected works
          </Link>

          <div className="cs-hero-phones">
            <Image
              src="/thrival/thrival-hero.png"
              alt="Thrival app screens showing fitness routines, favorites, exercise detail, and an active workout"
              width={3024}
              height={1833}
              className="cs-hero-image"
              priority
            />
          </div>

          <dl className="cs-meta-table">
            <div className="cs-meta-item">
              <dt>Role</dt>
              <dd>Sole Product Designer</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Timeline</dt>
              <dd>February 2026 – Present</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Platform</dt>
              <dd>iOS App</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Status</dt>
              <dd>
                <span className="cs-live-link">
                  Live Product <span aria-hidden="true">↗</span>
                </span>
              </dd>
            </div>
            <div className="cs-meta-item">
              <dt>Team</dt>
              <dd>Cameron Smith (CEO), Chiarra Ferrari (CMO)</dd>
            </div>
          </dl>
        </section>

        <hr className="cs-divider" />

        {/* Overview */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">Overview</p>
            <h2 className="cs-section-title">
              How can we expand a simple instructional app into a fitness and recovery
              platform
            </h2>
          </div>
          <p className="cs-body">
            Thrival&apos;s original app primarily functioned as an instructional tool,
            helping customers learn how to use the company&apos;s muscle-recovery
            products. As the company&apos;s vision expanded, leadership wanted the app
            to become more than a simple product instruction application. They wanted
            Thrival Muscle Recovery to support personalized recovery and fitness
            recommendations, creator-led workout routines, Thrival product discovery,
            and future subscription opportunities.
          </p>

          <div className="cs-visual-block">
            <div className="cs-experience-banner">
              <h3>The Original Experience</h3>
              <p>
                The initial version of Thrival Muscle Recovery was organized around
                discovering and following individual Thrival exercises.
              </p>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Strategy */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">Strategy and product redesign</p>
            <h2 className="cs-section-title">
              My role: turning business goals into product experiences
            </h2>
          </div>
          <p className="cs-body">
            The broader strategy we wanted to implement was to transform Thrival Muscle
            Recovery to an experience that could support longer-term engagement,
            personalization, content discovery, and future revenue opportunities.
          </p>

          <div className="cs-goal-map-headers">
            <p>Business Goals</p>
            <p>My Solution</p>
          </div>
          <div className="cs-goal-map">
            <ul>
              {businessGoals.map((goal) => (
                <li className="cs-goal-item cs-goal-item--goal" key={goal}>
                  {goal}
                </li>
              ))}
            </ul>
            <ul>
              {productResponses.map((response) => (
                <li className="cs-goal-item cs-goal-item--solution" key={response}>
                  {response}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Onboarding */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">01 / Onboarding</p>
            <h2 className="cs-section-title">Personalization starts before the homepage</h2>
          </div>

          <div className="cs-three-col cs-three-col--stretch">
            <div className="cs-three-col-left">
              <div className="cs-split-text">
                <p className="cs-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Before users
                  reach the homepage, Thrival needs to understand their goals, equipment,
                  and recovery preferences.
                </p>
                <p className="cs-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. The onboarding
                  flow collects the inputs needed to personalize recommendations and
                  tailor the library experience from the first session.
                </p>
              </div>

              <div className="cs-callout-stack">
                <div className="cs-callout">
                  <h3>Fitness goals &amp; recovery focus</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Users
                    select the areas and routines most relevant to their needs.
                  </p>
                </div>
                <div className="cs-callout">
                  <h3>Account creation &amp; profile setup</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sign-up,
                    login, and profile flows establish a foundation for saved content
                    and personalized recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="cs-three-col-right">
              <div className="cs-onboarding-image-wrap">
                <Image
                  src="/thrival/thrival-onboarding.png"
                  alt="Thrival onboarding flow screens"
                  width={2658}
                  height={1700}
                  className="cs-onboarding-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Homepage / Library */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">02 / Homepage/Library Architecture</p>
            <h2 className="cs-section-title">
              Turning the homepage into a fitness discovery hub
            </h2>
          </div>

          <div className="cs-three-col">
            <div className="cs-three-col-left">
              <p className="cs-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. The homepage
                needed to balance personalized recommendations with broader discovery
                across Thrival and creator content.
              </p>

              <ul className="cs-numbered-list">
                <li>
                  <span>1</span>
                  <p>Personalized sections surface routines based on onboarding inputs.</p>
                </li>
                <li>
                  <span>2</span>
                  <p>A broader library supports exploration beyond initial recommendations.</p>
                </li>
              </ul>

              <p className="cs-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Annotation
                callouts highlight how each homepage module supports a distinct user
                need without overwhelming the primary experience.
              </p>

              <div className="cs-homepage-comparison">
                <p className="cs-homepage-comparison-label">Thrival Routines</p>
                <p className="cs-homepage-comparison-label">Fitness Routines</p>
                <Image
                  src="/thrival/thrival-homepage-comparison.png"
                  alt="Side-by-side comparison of a Thrival recovery routine screen and a fitness routine screen"
                  width={835}
                  height={811}
                  className="cs-homepage-comparison-image"
                />
              </div>
            </div>

            <div className="cs-three-col-right">
              <Image
                src="/thrival/thrival-homepage-rightcol.png"
                alt="Thrival homepage with annotation callouts for co-existing libraries, compatibility cues, and personalized relevance"
                width={1298}
                height={1428}
                className="cs-homepage-rightcol-image"
              />
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Design Iterations */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">03 / Design Iterations</p>
            <h2 className="cs-section-title">
              Redesigning Thrival&apos;s guided recovery routines
            </h2>
          </div>

          <div className="cs-split">
            <div className="cs-split-text">
              <p className="cs-body">
                The guided recovery flow became one of the most heavily iterated parts
                of the app.
              </p>
              <p className="cs-body">
                The original experience relied on a looping GIF with small thumbnails
                representing upcoming steps. When I reviewed it, I felt it functioned
                more like a visual reference than a complete guided routine.
              </p>
              <p className="cs-body">
                Because these routines involve physical positioning and recovery, I
                wanted users to have clearer guidance while still being able to move at
                their own pace.
              </p>
            </div>

            <div className="cs-callout cs-callout--tip">
              <h3>Design challenge</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. The original
                guided recovery experience lacked hierarchy, making it difficult for
                users to understand what step they were on or what to do next.
              </p>
            </div>
          </div>

          <h3 className="cs-subsection-title">
            Learning the importance of Design Hierarchy and Information Architecture
          </h3>

          <div className="cs-iteration-block">
            <div className="cs-iteration-row">
              <div className="cs-iteration-item">
                <Placeholder className="cs-placeholder--phone" label="Initial design" />
                <p>Initial Design</p>
              </div>
              <span className="cs-iteration-arrow" aria-hidden="true">→</span>
              <div className="cs-iteration-item">
                <Placeholder className="cs-placeholder--phone" label="Iteration 1" />
                <p>Iteration 1</p>
              </div>
              <span className="cs-iteration-arrow" aria-hidden="true">→</span>
              <div className="cs-iteration-item">
                <Placeholder className="cs-placeholder--phone" label="Iteration 2" />
                <p>Iteration 2</p>
              </div>
            </div>

            <div className="cs-split-text">
              <p className="cs-body">
                Iteration and Refinement: My first redesign focused on making more
                information available. I introduced a scrollable routine list, readable
                step descriptions, recommended timing, video controls, timer access, and
                additional exercise information.
              </p>
              <p className="cs-body">
                This addressed some of the original gaps, but during stakeholder review,
                they stated the instructional media was still too small and that showing
                the full routine alongside timer and extra info created unnecessary
                redundancy.
              </p>
              <p className="cs-body">
                Prioritizing User Needs: I gave the active exercise substantially more
                visual priority and kept only the most important information visible
                during the movement.
              </p>
            </div>
          </div>

          <div className="cs-split">
            <div className="cs-split-text">
              <div className="cs-feature-columns">
                <div>
                  <h3>Features always visible</h3>
                  <p>
                    Current step + progress
                    <br />
                    Exercise name
                    <br />
                    Recommended hold duration
                    <br />
                    Previous / Next navigation
                  </p>
                </div>
                <div>
                  <h3>Available On Demand</h3>
                  <p>
                    Timer
                    <br />
                    Detailed step instructions
                    <br />
                    Full step-by-step routine
                  </p>
                </div>
              </div>

              <p className="cs-body">
                This kept the primary screen focused on the routine itself while still
                giving users access to deeper guidance whenever they needed it.
              </p>

              <div className="cs-callout">
                <h3>Key insight</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Progressive
                  disclosure helped reduce clutter while preserving access to deeper
                  guidance when users needed it.
                </p>
              </div>
            </div>

            <div className="cs-phone-row">
              <Placeholder className="cs-placeholder--phone" label="Final routine screen 1" />
              <Placeholder className="cs-placeholder--phone" label="Final routine screen 2" />
              <Placeholder className="cs-placeholder--phone" label="Final routine screen 3" />
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Creators */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">06 / Creators</p>
            <h2 className="cs-section-title">Creating a foundation for creator content</h2>
          </div>
          <p className="cs-body">
            Thrival also wanted to explore a future model where fitness creators could
            contribute content to the platform and participate in a business relationship
            with the company.
          </p>
          <p className="cs-body">
            I established the product foundation needed to represent creators and
            exploring a social media aspect for the app. This will probably be something
            implementing within the future of the Thrival app as the stakeholders would
            need to focus on recruiting and partnering with creators first.
          </p>

          <Image
            src="/thrival/thrival-social-media.png"
            alt="Thrival creator profile and social media content screens"
            width={1584}
            height={970}
            className="cs-creators-image"
          />
        </section>

        <hr className="cs-divider" />

        {/* Monetization */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">07 / monetization</p>
            <h2 className="cs-section-title">Exploring subscription monetization</h2>
          </div>

          <div className="cs-split">
            <div className="cs-split-text">
              <p className="cs-body">
                Leadership also wanted the app to eventually generate recurring revenue
                beyond physical product sales.
              </p>

              <div className="cs-callout">
                <h3>Subscription strategy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paywall-restricted
                  content and premium creator routines were explored as future revenue
                  opportunities.
                </p>
              </div>

              <div className="cs-image-grid">
                <Placeholder className="cs-placeholder--card" label="Paywall screen 1" />
                <Placeholder className="cs-placeholder--card" label="Paywall screen 2" />
                <Placeholder className="cs-placeholder--card" label="Subscription screen 1" />
                <Placeholder className="cs-placeholder--card" label="Subscription screen 2" />
              </div>
            </div>

            <div className="cs-split-visual">
              <Image
                src="/thrival/thrival-subscription.png"
                alt="Thrival subscription paywall screen"
                width={718}
                height={1492}
                className="cs-subscription-image"
              />
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Outcomes */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">Outcomes &amp; Reception</p>
            <h2 className="cs-section-title">From Figma to the App Store</h2>
          </div>

          <div className="cs-split">
            <div className="cs-split-text">
              <p className="cs-body">
                The strongest outcome so far is that the redesign has moved beyond
                prototype stage into a live product available in the App Store. Early
                public feedback has been positive.
              </p>
              <div className="cs-metric-card">
                <p className="cs-metric-value">5.0</p>
                <p className="cs-metric-label">across 3 ratings at time of writing</p>
              </div>
            </div>

            <div className="cs-quote-stack">
              <blockquote>
                &ldquo;The short instructional videos are very helpful…&rdquo;
              </blockquote>
              <blockquote>
                &ldquo;…broken down by body area so you can quickly find what you
                need.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Key Takeaway */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">Key Takeaway</p>
            <h2 className="cs-section-title">What did I learn?</h2>
          </div>
          <p className="cs-body">
            Redesigning and rebuilding Thrival has taught me how much product design
            depends on strategy and turning broad business goals into clear, usable
            experiences. Many of the ideas I received started as simple high-level
            requests but the real design work came from figuring out how those ideas
            should connect, what information users actually needed, and how much
            complexity the interface could support.
          </p>

          <h3 className="cs-subsection-title">Key Takeaways</h3>
          <div className="cs-takeaway-grid">
            {keyTakeaways.map((item) => (
              <div className="cs-callout" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
