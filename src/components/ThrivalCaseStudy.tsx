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
    title: "More isn't always better",
    body: "My first guided-routine redesign made more information visible, but it also created more competition on the screen. The final direction taught me to prioritize the active task and move secondary information into on-demand views.",
  },
  {
    title: "Iteration and understanding is crucial",
    body: "The project reinforced that an early direction does not have to be perfect. Feedback helped me identify where my first ideas were too dense or too close to the original experience and gave me a clearer path forward.",
  },
  {
    title: "Design doesn't stop in Figma",
    body: "Working in a continuous review and handoff cycle with developers and stakeholders has shown me how design decisions carry into a live product. I learned to think more about consistency, implementation, and how each feature fits into the larger system.",
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
            <div className="cs-hero-phone-wrap">
              <Image
                src="/thrival/thrival-hero1.png"
                alt="Thrival home discovery screen with fitness routines and How To Thrival content"
                width={526}
                height={1062}
                className="cs-hero-phone"
                priority
                sizes="25vw"
              />
            </div>
            <div className="cs-hero-phone-wrap">
              <Image
                src="/thrival/thrival-hero2.png"
                alt="Thrival favorites screen filtered to Hips and Glutes routines"
                width={526}
                height={1062}
                className="cs-hero-phone"
                priority
                sizes="25vw"
              />
            </div>
            <div className="cs-hero-phone-wrap">
              <Image
                src="/thrival/thrival-hero3.png"
                alt="Thrival routine detail screen for Iliacus with Wave"
                width={526}
                height={1062}
                className="cs-hero-phone"
                priority
                sizes="25vw"
              />
            </div>
            <div className="cs-hero-phone-wrap">
              <Image
                src="/thrival/thrival-hero4.png"
                alt="Thrival guided recovery session with step-by-step instructions"
                width={263}
                height={531}
                className="cs-hero-phone"
                priority
                sizes="25vw"
              />
            </div>
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
                  Live Product
                  <Image
                    src="/thrival/right-arrow-icon.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="button-arrow"
                    aria-hidden="true"
                  />
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
              Transforming a simple instructional app into a full fitness and recovery platform
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
              <h3 className="cs-experience-banner-title">The Original Experience</h3>
              <p className="cs-experience-banner-text">
                The initial version of Thrival Muscle Recovery was only organized around
                discovering and following individual Thrival exercises.
              </p>
            </div>
            <div className="cs-experience-media">
              <Image
                src="/thrival/new-overviewagain.png"
                alt="Original Thrival app screens showing body-part categories, an expanded exercise card, and a step-by-step guided recovery player"
                width={1684}
                height={981}
                className="cs-overview-image"
              />
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

          <h3 className="cs-subsection-title">We wanted the Thrival app to do more than just explain how to use its products
          </h3>
          
          <div className="cs-goal-map">
            <div className="cs-goal-map-column">
              <h3 className="cs-goal-map-heading">Business Goals</h3>
              <div className="cs-goal-map-panel cs-goal-map-panel--goals">
                <ul>
                  {businessGoals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs-goal-map-column">
              <h3 className="cs-goal-map-heading">My Solution</h3>
              <div className="cs-goal-map-panel cs-goal-map-panel--solution">
                <ul>
                  {productResponses.map((response) => (
                    <li key={response}>{response}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        {/* Onboarding */}
        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">01 / Onboarding</p>
            <h2 className="cs-section-title">Using onboarding to find routines that match each user's personal needs</h2>
          </div>

          <div className="cs-three-col cs-three-col--stretch">
            <div className="cs-three-col-left">
              <div className="cs-split-text">
                <p className="cs-body">
                  I was initially instructed to create a simple onboarding experience to
                  allow users to sign up and collect data.
                </p>
                <p className="cs-body">
                  Because one of Thrival&apos;s business goals was to deliver more
                  personalized exercises, I expanded that scope by asking: what
                  information could we collect during onboarding that would meaningfully
                  shape the experience afterward?
                </p>
              </div>

              <div className="cs-callout-stack">
                <div className="cs-callout">
                  <h3>What Thrival equipment does the user already own?</h3>
                  <p>
                    Knowing which attachments a user has helped the app highlight the
                    routines relevant to them.
                  </p>
                </div>
                <div className="cs-callout">
                  <h3>Where does the user commonly experience soreness?</h3>
                  <p>
                    Thrival will recommend the areas and muscles relevant to the user.
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
              Making it easier to discover relevant exercises and routines on the Homepage
            </h2>
          </div>

          <div className="cs-three-col">
            <div className="cs-three-col-left">
              <p className="cs-body">
                As Thrival&apos;s app expanded, the home screen needed to support more
                than a static library of recovery exercises. We wanted users to
                discover two different types of content:
              </p>

              <ul className="cs-numbered-list">
                <li>
                  <span>1</span>
                  <p>A personalized Thrival recovery exercise guide library</p>
                </li>
                <li>
                  <span>2</span>
                  <p>Broader creator-led fitness content library</p>
                </li>
              </ul>

              <p className="cs-body">
                That meant the experience needed to balance personalization with
                discovery.
              </p>

              <p className="cs-body">
                Instead of hiding exercises that required equipment a user did not own,
                I highlighted compatible routines while keeping the larger library
                visible. This helped users quickly find what was relevant to them while
                still exposing them to more of Thrival&apos;s product ecosystem.
              </p>

              <h3 className="cs-subsection-title">Information Architecture</h3>
              <p className="cs-body">
                I also separated Thrival recovery content from creator-led workouts at
                the structural level. Thrival routines are step-based and self-paced,
                while creator workouts are better suited to a long-form viewing
                experience.
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
              Improving Thrival's guided recovery routines
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
              <h3>Key limitations</h3>
              <ul className="cs-callout-list">
                <li>Upcoming steps were too small thumbnails to understand</li>
                <li>The main exercise visual had limited screen space</li>
                <li>Users had little control over the looping media</li>
                <li>Recommended hold times were unclear</li>
                <li>The full routine sequence was not easy to inspect</li>
              </ul>
            </div>
          </div>

          <h3 className="cs-subsection-title">
            The first few iterations gave users too much information at once
          </h3>

          <div className="cs-iteration-block">
            <div className="cs-iteration-row">
              <div className="cs-iteration-item">
                <Image
                  src="/thrival/thrival-iteration1.png"
                  alt="Initial design of the Thrival guided recovery routine"
                  width={387}
                  height={782}
                  className="cs-iteration-image"
                />
                <p>Initial Design</p>
              </div>
              <Image
                src="/thrival/arrow-vector.svg"
                alt=""
                width={12}
                height={20}
                className="cs-iteration-arrow"
                aria-hidden="true"
              />
              <div className="cs-iteration-item">
                <Image
                  src="/thrival/thrival-iteration2.png"
                  alt="First iteration of the Thrival guided recovery routine"
                  width={387}
                  height={782}
                  className="cs-iteration-image"
                />
                <p>Iteration 1</p>
              </div>
              <Image
                src="/thrival/arrow-vector.svg"
                alt=""
                width={12}
                height={20}
                className="cs-iteration-arrow"
                aria-hidden="true"
              />
              <div className="cs-iteration-item">
                <Image
                  src="/thrival/thrival-iteration3.png"
                  alt="Second iteration of the Thrival guided recovery routine"
                  width={387}
                  height={782}
                  className="cs-iteration-image"
                />
                <p>Iteration 2</p>
              </div>
            </div>

            <div className="cs-split-text">
              <h4 className="cs-iteration-kicker">Iteration and Refinement</h4>
              <p className="cs-body">
                My first redesign focused on making more information available. I
                introduced a scrollable routine list, readable step descriptions,
                recommended timing, video controls, timer access, and additional exercise
                information.
              </p>
              <p className="cs-body">
                This addressed some of the original gaps, but during stakeholder review,
                they stated the instructional media was still too small and that showing
                the full routine alongside timer and extra info created unnecessary
                redundancy.
              </p>
              <h4 className="cs-iteration-kicker">Prioritizing User Needs</h4>
              <p className="cs-body">
                I gave the active exercise substantially more visual priority and kept
                only the most important information visible during the movement.
              </p>
            </div>
          </div>

          <h3 className="cs-subsection-title">
                    I simplified the experience so users could focus on the immersive exercise
          </h3>
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
                  Adding more information did not automatically create a better
                  experience. I stopped showing every piece of information at once and
                  focused on the design hierarchy to organize the experience around what
                  users needed in the moment.
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
            <p className="cs-section-label">06 / Business Growth</p>
            <h2 className="cs-section-title">Designing new ways for Thrival to grow beyond product sales</h2>
          </div>
          <h3 className="cs-subsection-title">
            Creating a foundation for creator content
          </h3>
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

          <h3 className="cs-subsection-title">
            Exploring subscription monetization
          </h3>
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
            <h2 className="cs-section-title">Launching the redesign in the app store</h2>
          </div>

          <div className="cs-split">
            <div className="cs-split-text">
              <p className="cs-body">
                The product evolved through a continuous review and handoff process
                rather than one final design presentation.
              </p>
              <p className="cs-process-line">
                Design → Stakeholder review → Revision → Approved frames → Developer
                handoff → Product update
              </p>
              <p className="cs-body">
                Once a feature was approved, I moved the latest high-fidelity screens into
                a dedicated final frame library in Figma. That library served as a
                reference for the developer and was updated as new revisions were
                approved.
              </p>

              <h3 className="cs-subsection-title">Early outcomes and metrics</h3>
              <p className="cs-body">
                Thrival Muscle Recovery is now live in the App Store and continues to
                evolve through ongoing releases.
              </p>
              <p className="cs-body">Since launch, the app has reached:</p>
              <div className="cs-metric-row">
                <div className="cs-metric-card">
                  <p className="cs-metric-value">1.44K</p>
                  <p className="cs-metric-label">first-time downloads</p>
                  <p className="cs-metric-date">May 29–Aug 26</p>
                </div>
                <div className="cs-metric-card">
                  <p className="cs-metric-value">5.0</p>
                  <p className="cs-metric-label">across 3 ratings at time of writing</p>
                </div>
              </div>
              <p className="cs-body">
                The app also currently holds a 5.0 rating across 3 ratings, with early
                reviews mentioning the usefulness of the instructional videos,
                organization by body area, and ability to favorite routines.
              </p>
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
