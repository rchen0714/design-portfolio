import Image from "next/image";
import BackToWorksLink from "@/components/BackToWorksLink";
import ViaHighFidelityCarousel from "@/components/ViaHighFidelityCarousel";
import ViaMidFidelityCarousel from "@/components/ViaMidFidelityCarousel";
import ViaPersonaFlows from "@/components/ViaPersonaFlows";
import ViaSurveyCharts from "@/components/ViaSurveyCharts";

const surveyFindings = [
  "Construction and temporary obstacles can unexpectedly disrupt familiar routes.",
  "Poor sidewalk conditions can force users to take significant detours.",
  "Buildings do not consistently communicate whether ramps, elevators, or accessible entrances are available.",
  "Accessibility information for public transportation can be incomplete or unreliable.",
] as const;

const initialExplorations = [
  "Elevation tracking",
  "Accessible transit indicators",
  "Indoor navigation for large public spaces",
] as const;

const focusedFeatures = [
  "Live route hazard reporting",
  "Accessibility ratings for destinations and routes",
  "Community-reported incidents",
  "Reviews and comments from other travelers",
] as const;

const viaFigmaPrototypeEmbedUrl =
  "https://embed.figma.com/proto/zKu9viLr1R7LCR8zyytfR0/Catalyst-2024-Wireframes?node-id=104-7538&scaling=scale-down&content-scaling=fixed&starting-point-node-id=104%3A7538&page-id=6%3A4&embed-host=share";

type ViaFeatureScreen = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const viaFeatures: {
  reverse: boolean;
  icon: string;
  title: string;
  lead: string;
  screens: readonly ViaFeatureScreen[];
}[] = [
  {
    reverse: false,
    icon: "📍",
    title: "How Accessible is this Location?",
    lead:
      "Easily check the accessibility rating of any location and read comments from others to ensure it meets your needs before you go.",
    screens: [
      {
        src: "/via/feature01-1.png",
        alt: "Via location detail for Brighton Music Hall showing accessibility rating and community reviews",
        width: 3240,
        height: 5760,
      },
      {
        src: "/via/feature01-2.gif",
        alt: "Via map view with accessibility markers and points of interest along the route",
        width: 456,
        height: 860,
      },
      {
        src: "/via/feature01-3.png",
        alt: "Via turn-by-turn navigation with route guidance and incident reporting actions",
        width: 3240,
        height: 5760,
      },
    ],
  },
  {
    reverse: true,
    icon: "⚠️",
    title: "View hazards in your area and route",
    lead:
      "Stay safe by viewing any hazards in your area and along your route. Keep your journey smooth and worry-free.",
    screens: [
      {
        src: "/via/feature02-1.png",
        alt: "Via map showing hazard markers and accessibility alerts along a planned route",
        width: 3240,
        height: 5760,
      },
      {
        src: "/via/feature02-2.gif",
        alt: "Via map interaction highlighting a reported obstacle on the user's path",
        width: 290,
        height: 546,
      },
      {
        src: "/via/feature02-3.png",
        alt: "Via hazard detail view with incident information and route impact",
        width: 3240,
        height: 5760,
      },
    ],
  },
  {
    reverse: false,
    icon: "🚧",
    title: "Report Live Incidents",
    lead:
      "Encounter an unreported incident while traveling? No problem! Warn your community by reporting live incidents to keep everyone informed.",
    screens: [
      {
        src: "/via/feature03-1.png",
        alt: "Via incident report form for submitting a new accessibility hazard",
        width: 3240,
        height: 5760,
      },
      {
        src: "/via/feature03-2.gif",
        alt: "Via flow for attaching details and submitting a community hazard report",
        width: 356,
        height: 672,
      },
      {
        src: "/via/feature03-3.png",
        alt: "Via updates feed showing community-reported incidents nearby",
        width: 3240,
        height: 5760,
      },
    ],
  },
  {
    reverse: true,
    icon: "💜",
    title: "Favorite Routes",
    lead:
      "Have a go-to daily route? Save it as a favorite for quick access and stay updated on any changes or incidents along the way!",
    screens: [
      {
        src: "/via/feature04-1.png",
        alt: "Via saved routes list for quick access to frequent trips",
        width: 3240,
        height: 5760,
      },
      {
        src: "/via/feature04-2.gif",
        alt: "Via flow for saving a route and viewing accessibility updates",
        width: 360,
        height: 680,
      },
      {
        src: "/via/feature04-3.png",
        alt: "Via saved route detail with hazards and accessibility information",
        width: 3240,
        height: 5760,
      },
    ],
  },
];

function ViaFeatureScreens({
  screens,
}: {
  screens: readonly {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}) {
  return (
    <div className="via-feature-screens">
      {screens.map((screen) => (
        <div key={screen.src} className="via-feature-screen-frame">
          <img
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            className="via-feature-screen-image"
          />
        </div>
      ))}
    </div>
  );
}

export default function ViaCaseStudy() {
  return (
    <main id="via-case-study">
      <div className="via-top">
        <div className="via-content">
          <BackToWorksLink className="via-back-link" />

          <header className="via-hero-block">
            <div className="via-hero-banner">
              <Image
                src="/via/viabanner.jpg"
                alt="Via — Start here, go anywhere. Navigation app for accessible routes and landmarks"
                width={3200}
                height={1372}
                className="via-hero-art"
                priority
              />
              <div className="sr-only">
                <h1>Via</h1>
                <p>Making everyday navigation more accessible.</p>
              </div>
            </div>

            <dl className="cs-meta-table">
              <div className="cs-meta-item">
                <dt>Role</dt>
                <dd>UX/UI Designer, UX Researcher, Prototyper</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Tools</dt>
                <dd>Figma, Adobe Illustrator, Google Forms</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Timeline</dt>
                <dd>Catalyst 2024 Designathon - 2-day sprint</dd>
              </div>
              <div className="cs-meta-item">
                <dt>Team</dt>
                <dd>Ruby Chen, Hyunseok Song, Tiffany Hoang</dd>
              </div>
            </dl>
          </header>

          <hr className="via-divider" />

          <section className="via-section" aria-labelledby="via-intro-label">
            <div className="via-section-header">
              <p id="via-intro-label" className="cs-section-label">
                Introduction
              </p>
              <h2 className="via-section-title">Making everyday navigation more accessible</h2>
            </div>

            <div className="via-stack">
              <p className="cs-body">
                Via is an accessibility-focused navigation app created for BU Forge&apos;s 2024
                Catalyst Designathon. I worked with two other designers, helping with research, design,
                and prototyping. It&apos;s essentially a mobile experience that helps people better understand the
                accessibility and obstacles within a route and at destinations before and during a trip.
              </p>
              <p className="cs-body">
                The project won <strong>1st Place in the Accessibility Track</strong>.
              </p>

              <div className="via-problem-grid">
                <article className="via-problem-card via-problem-card--challenge">
                  <p className="cs-section-label">The Challenge</p>
                  <h3 className="via-problem-heading">
                    Traditional navigation tools don&apos;t typically take into account people with
                    mobility needs
                  </h3>
                  <div className="via-problem-body">
                    <p className="cs-body">
                      Nearly 30 million adults in the U.S. experience difficulty walking or other
                      mobility challenges. Yet many navigation products prioritize the fastest route
                      without accounting for obstacles such as construction, inaccessible entrances,
                      sidewalk conditions, or temporary hazards.
                    </p>
                    <p className="cs-body">
                      For people with mobility needs, these details can determine whether a route is
                      usable at all.
                    </p>
                  </div>
                </article>

                <article className="via-problem-card via-problem-card--solution">
                  <p className="cs-section-label">The Solution</p>
                  <h3 className="via-problem-heading">
                    We designed a navigational tool centered around accessibility, not just distance
                  </h3>
                  <div className="via-problem-body">
                    <p className="cs-body">
                      Via helps users evaluate routes and destinations based on accessibility before
                      they travel.
                    </p>
                    <p className="cs-body">
                      The experience combines{" "}
                      <strong>
                        accessibility ratings, live hazard reporting, community updates, and
                        accessible route planning
                      </strong>{" "}
                      to give users more context and confidence when navigating their surroundings.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <hr className="via-divider" />

          <section className="via-section" aria-labelledby="via-core-label">
            <div className="via-section-header">
              <p id="via-core-label" className="cs-section-label">
                Key Features
              </p>
              <h2 className="via-section-title">
                We made accessibility information visible before the journey begins
              </h2>
            </div>
            <p className="cs-body">
              Rather than requiring users to discover accessibility issues after arriving, Via
              surfaces relevant information throughout the planning and navigation experience.
            </p>

            {viaFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`via-feature-row${feature.reverse ? " via-feature-row--reverse" : ""}`}
              >
                <div className="via-feature-copy">
                  <h2 className="via-feature-title">
                    <span className="via-feature-title-icon" aria-hidden="true">
                      {feature.icon}
                    </span>
                    {feature.title}
                  </h2>
                  <p className="via-feature-lead">{feature.lead}</p>
                </div>
                <ViaFeatureScreens screens={feature.screens} />
              </div>
            ))}
          </section>

          <hr className="via-divider" />

          <section className="via-section" aria-labelledby="via-research-label">
            <div className="via-section-header">
              <p id="via-research-label" className="cs-section-label">
                Research
              </p>
              <h2 className="via-section-title">
                We started by understanding what makes everyday travel unpredictable
              </h2>
            </div>
            <ViaSurveyCharts />

            <hr className="via-research-split" />

            <div className="via-themes-box">
              <p className="via-themes-box-label">Themes from the survey</p>
              <ol className="via-themes-list">
                {surveyFindings.map((item, index) => (
                  <li key={item}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
              <p className="via-themes-note">
                Synthesis of 43 Google Forms responses and follow-up review
              </p>
            </div>
            <p className="cs-body">
              These findings showed us that the problem wasn&apos;t simply{" "}
              <strong>finding a route</strong>. It was understanding whether that route would actually work for the person taking it.
            </p>
          
            <div className="via-stack">
              <div className="via-section-header">
                <h2 className="via-section-title">
                  We identified opportunities existing navigation tools often overlook
                </h2>
              </div>
              <div className="cs-goal-map via-focus-map">
                <div className="cs-goal-map-column">
                  <h3 className="cs-goal-map-heading">Brainstorming</h3>
                  <div className="cs-goal-map-panel cs-goal-map-panel--goals">
                    <p className="via-focus-map-lead">
                      Based off the data from the surveys we looked into some features that we thought could solve 
                      some of the pain points experienced by the users regarding accessibility and navigation.
                    </p>
                    <ul>
                      {initialExplorations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="cs-goal-map-column">
                  <h3 className="cs-goal-map-heading">Key Features</h3>
                  <div className="cs-goal-map-panel cs-goal-map-panel--solution">
                    <p className="via-focus-map-lead">
                      As the concepts developed, we transformed those pain points into key features that users could use.
                    </p>
                    <ul>
                      {focusedFeatures.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p className="cs-body">
                Rather than reinventing navigation, we built on interaction patterns already
                familiar from products like Google Maps and Apple Maps while making accessibility
                information a primary part of the experience.
              </p>
            </div>
          </section>

          <hr className="via-divider" />

          <section className="via-section" aria-labelledby="via-defining-label">
            <div className="via-section-header">
              <p id="via-defining-label" className="cs-section-label">
                Defining the Experience
              </p>
              <h2 className="via-section-title">
                Designing for different types of mobility needs/personas
              </h2>
            </div>
            <p className="cs-body">
              We kept three mobility contexts—permanent, temporary, and situational—and tied each
              one to a specific path through Via. Switch personas to see the story and the
              highlighted flow.
            </p>
            <ViaPersonaFlows />
          </section>

          <hr className="via-divider" />

          <section className="via-section" aria-labelledby="via-process-label">
            <div className="via-section-header">
              <p id="via-process-label" className="cs-section-label">
                Design Process
              </p>
              <h2 className="via-section-title">
                Moving from branding to fully developed UI under a tight deadline
              </h2>
            </div>
            <p className="cs-body">
              We locked name and type, then moved straight into sketches and wireframes on familiar
              map patterns without overpolishing any single screen too early.
            </p>

            <div className="via-process-flow" aria-label="Branding to low fidelity">
              <figure className="via-process-figure via-process-figure--branding">
                <Image
                  src="/via/branding.png"
                  alt="Via branding exploration: name options, typeface candidates, and selected Poppins and Avenir Next pairing"
                  width={808}
                  height={542}
                  sizes="(max-width: 900px) 88vw, 42vw"
                  className="via-process-figure-image"
                />
              </figure>

              <Image
                src="/thrival/arrow-vector.svg"
                alt=""
                width={12}
                height={20}
                className="via-process-flow-arrow"
                aria-hidden="true"
              />

              <figure className="via-process-figure via-process-figure--lofi">
                <Image
                  src="/via/via-low-fidleity.jpg"
                  alt="Low-fidelity Via process: hand-drawn sketches, user flow, and digital wireframe screens"
                  width={1024}
                  height={791}
                  sizes="(max-width: 900px) 88vw, 42vw"
                  className="via-process-figure-image"
                />
              </figure>

              <div className="via-process-flow-labels">
                <p className="via-process-flow-caption">Branding</p>
                <p className="via-process-flow-caption">Low fidelity</p>
              </div>
            </div>

            <div className="via-process-midfi">
              <p className="cs-section-label">Mid fidelity</p>
              <p className="cs-body">
                Mid-fidelity screens translated the core journey into a testable purple UI—onboarding
                through navigation, reporting, updates, and profile.
              </p>
              <ViaMidFidelityCarousel />
            </div>

            <div className="via-process-midfi via-process-hifi">
              <Image
                src="/thrival/arrow-vector.svg"
                alt=""
                width={12}
                height={20}
                className="via-process-midfi-arrow"
                aria-hidden="true"
              />
              <p className="cs-section-label">High fidelity</p>
              <p className="cs-body">
                High-fidelity screens polished visual hierarchy, map details, and accessibility
                cues—the prototype we used for final presentation and usability walkthroughs.
              </p>
              <ViaHighFidelityCarousel />
            </div>
          </section>

          <hr className="via-divider" />

          <section className="via-section" aria-labelledby="via-final-label">
            <div className="via-section-header">
              <p id="via-final-label" className="cs-section-label">
                Final Product
              </p>
              <h2 className="via-section-title">
                A navigation experience built around confidence, context, and accessibility
              </h2>
            </div>

            <div className="via-prototype-block">
              <div className="via-prototype-stage">
                <iframe
                  title="Via high-fidelity Figma prototype"
                  src={viaFigmaPrototypeEmbedUrl}
                  className="via-prototype-iframe"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
