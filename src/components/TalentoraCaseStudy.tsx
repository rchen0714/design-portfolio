import { Fragment } from "react";
import Image from "next/image";
import BackToWorksLink from "@/components/BackToWorksLink";
import {
  TalentoraHighFiCarousel,
  TalentoraLoFiCarousel,
  TalentoraMidFiCarousel,
} from "@/components/TalentoraFidelityCarousel";

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

function TalentoraChevronArrow({
  direction = "right",
  className = "",
}: {
  direction?: "right" | "down";
  className?: string;
}) {
  return (
    <svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ta-chevron-arrow-icon${direction === "down" ? " ta-chevron-arrow-icon--down" : ""} ${className}`.trim()}
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

const outcomeItems = [
  "Raised $1K in funding",
  "Joined Innovate@BU's Innovation Pathway",
  "Won the Audience Choice Award at BU Spark! Demo Day",
  "Produced a working platform spanning recruiter and candidate workflows",
] as const;

const processSteps = [
  "User research",
  "User flows",
  "Wireframes",
  "Prototypes",
  "High-fidelity UI",
  "Developer handoff",
  "Product refinement",
] as const;

const hiringWorkflowSteps = [
  "Recruiters configure the interview",
  "Candidates complete an AI interview",
  "Recruiters review detailed candidate insights",
] as const;

export default function TalentoraCaseStudy() {
  return (
    <main id="talentora-case-study">
      <div className="cs-page-container">
        <section className="cs-hero">
          <BackToWorksLink className="cs-back-link" />

          <div className="ta-hero-media">
            <Image
              src="/casebanners/talentorabanner.png"
              alt="Talentora AI recruiting platform on desktop and mobile"
              width={7524}
              height={4800}
              className="ta-hero-banner"
              priority
              sizes="(max-width: 1024px) 100vw, 64rem"
            />
          </div>

          <dl className="cs-meta-table">
            <div className="cs-meta-item">
              <dt>Role</dt>
              <dd>Co-Founder &amp; Head of Design</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Timeline</dt>
              <dd>Sept 2024 – Sept 2025</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Platform</dt>
              <dd>Web Application</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Status</dt>
              <dd>Deactivated</dd>
            </div>
            <div className="cs-meta-item">
              <dt>Team</dt>
              <dd>
                Ben Gardiner (CEO), Vincent Li (Co-founder), Lucas Yoon
                (Co-Founder), Seung Min-Cho (Engineer), Mehmet Battal
                (Engineer), Heather Davies (Designer)
              </dd>
            </div>
          </dl>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section">
          <div className="cs-section-header">
            <p className="cs-section-label">Overview</p>
            <h2 className="cs-section-title">Designing an AI recruiting platform to streamline early-stage candidate screening</h2>
          </div>
          <p className="cs-body">
            Talentora was an AI-powered recruiting platform designed to help hiring teams
            evaluate candidates before traditional recruiter interviews.
          </p>
          <Image
            src="/talentora/overview.png"
            alt="Talentora platform overview across recruiter and candidate workflows"
            width={6858}
            height={3252}
            className="ta-section-image"
            sizes="(max-width: 1024px) 100vw, 64rem"
          />
          <h3 className="cs-subsection-title">My Role</h3>
          <p className="cs-body">
            I co-founded the product and led design across the candidate and recruiter
            experiences. Talentora was comprised of 5 engineers and 2 UX designers when
            the team first formed. We worked cross-functionally every week with the help
            of mentors helping us take the platform from concept to a working product.
          </p>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-challenge-title">
          <div className="cs-section-header">
            <p className="cs-section-label">The Challenge</p>
            <h2 id="ta-challenge-title" className="cs-section-title">
              Recruiters spend significant time screening candidates before they ever reach
              an interview
            </h2>
          </div>
          <div className="cs-three-col cs-three-col--stretch">
            <div className="cs-three-col-left">
              <p className="cs-body">
                Early-stage recruiting often requires teams to review large applicant pools
                before deciding who deserves a deeper conversation. For hiring teams, that
                creates both a time and resource cost while still providing limited
                information beyond a resume.
              </p>
              <p className="cs-body">
                Talentora explored how conversational AI could help recruiters gather richer
                candidate information earlier in the hiring process without replacing recruiter
                decision-making.
              </p>
              <div className="cs-experience-banner">
                <h3 className="cs-experience-banner-title">The design challenge</h3>
                <p className="cs-experience-banner-text">
                  How might we help recruiters screen candidates more efficiently with AI while
                  still giving them enough context and control to make the final decision?
                </p>
              </div>
            </div>
            <div className="cs-three-col-right">
              <Image
                src="/talentora/the-challenge.png"
                alt="Early-stage recruiting challenge: cost vs. reliability quadrant comparing hiring tools"
                width={5915}
                height={3633}
                className="ta-section-image ta-challenge-diagram"
                sizes="(max-width: 900px) 100vw, 38rem"
              />
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-solution-title">
          <div className="cs-section-header">
            <p className="cs-section-label">The Solution</p>
            <h2 id="ta-solution-title" className="cs-section-title">
              We designed an AI-assisted screening experience for both recruiters and
              candidates
            </h2>
          </div>
          <div className="ta-solution-intro">
            <p className="cs-body">
              Talentora used conversational AI interview agents to conduct initial candidate
              assessments and organize the resulting information for recruiters. The experience
              connected three parts of the hiring workflow:
            </p>
            <div className="ta-workflow-block">
              <ol className="ta-workflow-stream" aria-label="Hiring workflow">
                {hiringWorkflowSteps.map((step, index) => (
                  <Fragment key={step}>
                    <li className="ta-workflow-stream-item">
                      <span className="ta-workflow-stream-step">{step}</span>
                    </li>
                    {index < hiringWorkflowSteps.length - 1 ? (
                      <li className="ta-workflow-stream-arrow" aria-hidden="true">
                        <TalentoraChevronArrow direction="right" />
                      </li>
                    ) : null}
                  </Fragment>
                ))}
              </ol>
            </div>
            <p className="cs-body">
              This gave us two very different user experiences to design: a candidate-facing
              interview environment and a recruiter-facing system for configuring and
              reviewing those interviews.
            </p>
          </div>
          <div className="ta-solution-columns">
            <div className="ta-solution-column">
              <h3 className="cs-subsection-title">Candidate experience</h3>
              <div className="ta-solution-image-stack">
                <Image
                  src="/talentora/solution-candidate-invite.png"
                  alt="Talentora account invitation email for candidates joining the platform"
                  width={1024}
                  height={522}
                  className="ta-section-image"
                  sizes="(max-width: 900px) 100vw, 28rem"
                />
                <div className="ta-solution-image-arrow" aria-hidden="true">
                  <TalentoraChevronArrow direction="down" />
                </div>
                <Image
                  src="/talentora/solution-candidate-interview.png"
                  alt="AI candidate assessment interview with video, transcript, and session controls"
                  width={1024}
                  height={498}
                  className="ta-section-image"
                  sizes="(max-width: 900px) 100vw, 28rem"
                />
              </div>
            </div>
            <div className="ta-solution-column ta-solution-column--recruiter">
              <h3 className="cs-subsection-title">Recruiter experience</h3>
              <div className="ta-solution-image-stack">
                <Image
                  src="/talentora/new-recruiter0login.png"
                  alt="Talentora recruiter login and two-factor authentication screen"
                  width={5184}
                  height={3414}
                  className="ta-section-image"
                  sizes="(max-width: 900px) 100vw, 28rem"
                />
                <div className="ta-solution-image-arrow" aria-hidden="true">
                  <TalentoraChevronArrow direction="down" />
                </div>
                <Image
                  src="/talentora/solution-recruiter-applicant.jpg"
                  alt="Recruiter applicant profile with assessment scores and schedule AI interview action"
                  width={1024}
                  height={522}
                  className="ta-section-image"
                  sizes="(max-width: 900px) 100vw, 28rem"
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-recruiter-title">
          <div className="cs-section-header">
            <p className="cs-section-label">01 / Recruiter workflow</p>
            <h2 id="ta-recruiter-title" className="cs-section-title">
              Making AI interviews configurable for different hiring needs
            </h2>
          </div>
          <div className="cs-three-col cs-three-col--stretch cs-three-col--media-left">
            <div className="cs-three-col-left">
              <p className="cs-body">
                Recruiters needed control over what candidates were being evaluated on rather
                than relying on a completely automated interview process.
              </p>
              <p className="cs-body">
                We designed an interview setup experience where hiring teams could configure
                assessments around the position and determine what the AI interviewer should
                evaluate.
              </p>
              <p className="cs-body">
                This established the recruiter as the person defining the hiring criteria while
                AI supported the screening process.
              </p>
            </div>
            <div className="cs-three-col-right">
              <video
                className="ta-section-video"
                src="/talentora/recruiter-interview-config.mov"
                controls
                playsInline
                preload="metadata"
                aria-label="Recruiter workflow walkthrough configuring AI interview assessments"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-candidate-title">
          <div className="cs-section-header">
            <p className="cs-section-label">02 / Candidate experience</p>
            <h2 id="ta-candidate-title" className="cs-section-title">
              Making an AI interview feel structured without making it feel robotic
            </h2>
          </div>
          <div className="cs-three-col cs-three-col--stretch">
            <div className="cs-three-col-left">
              <p className="cs-body">
                For candidates, the experience needed to communicate clearly what was happening
                before they entered an unfamiliar AI-led interview.
              </p>
              <p className="cs-body">
                I designed the candidate journey from onboarding and interview preparation
                through the conversational interview itself.
              </p>
              <p className="cs-body">
                The experience focused on giving candidates clear expectations while keeping the
                interaction simple enough that they could concentrate on their responses rather
                than the interface.
              </p>
            </div>
            <div className="cs-three-col-right">
              <video
                className="ta-section-video"
                src="/talentora/candidate-ai-interview.mp4"
                controls
                playsInline
                preload="metadata"
                aria-label="Candidate onboarding and AI-led interview experience walkthrough"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-insights-title">
          <div className="cs-section-header">
            <p className="cs-section-label">03 / Candidate insights</p>
            <h2 id="ta-insights-title" className="cs-section-title">
              Turning AI analysis into information recruiters could actually review
            </h2>
          </div>
          <div className="cs-three-col cs-three-col--stretch cs-three-col--media-left">
            <div className="cs-three-col-left">
              <p className="cs-body">
                One of the largest design challenges was deciding how to present AI-generated
                information after an interview.
              </p>
              <p className="cs-body">
                Rather than treating the AI output as a final hiring decision, we designed the
                recruiter dashboard around reviewing candidate performance, responses, and
                supporting interview insights.
              </p>
              <p className="cs-body">
                The goal was to make AI analysis useful as decision support while preserving
                recruiter judgment.
              </p>
            </div>
            <div className="cs-three-col-right">
              <video
                className="ta-section-video"
                src="/talentora/candidate-insights.mp4"
                controls
                playsInline
                preload="metadata"
                aria-label="Recruiter dashboard walkthrough showing candidate insights and AI analysis"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-process-title">
          <div className="cs-section-header">
            <p className="cs-section-label">Design Process</p>
            <h2 id="ta-process-title" className="cs-section-title">
              Building the product alongside an engineering team
            </h2>
          </div>
          <p className="cs-body">
            Talentora evolved over several months through continuous collaboration between
            design, engineering, and business.
          </p>
        
          <p className="cs-body">
            Because we were building an AI product rather than a static prototype, design
            decisions also had to account for technical constraints, changing model
            capabilities, and how generated information would appear in the interface.
          </p>
          <p className="cs-body">
            I designed much of the recruiter dashboard, candidate assessment and reporting
            experience, interview configuration, candidate onboarding, practice experience,
            and AI interview flow.
          </p>

          <div className="ta-process-stages">
            <div className="ta-process-stage">
              <h3 className="cs-subsection-title">Branding</h3>
              <Image
                src="/talentora/branding.png"
                alt="Talentora branding: logo, color palette, and typography exploration"
                width={7350}
                height={3102}
                className="ta-section-image"
                sizes="(max-width: 1024px) 100vw, 64rem"
              />
            </div>
            <div className="ta-process-stage ta-process-stage--carousel">
              <h3 className="cs-subsection-title">Lo fi</h3>
              <TalentoraLoFiCarousel />
            </div>
            <div className="ta-process-stage ta-process-stage--carousel">
              <h3 className="cs-subsection-title">Mid fi</h3>
              <TalentoraMidFiCarousel />
            </div>
            <div className="ta-process-stage ta-process-stage--carousel">
              <h3 className="cs-subsection-title">High fi</h3>
              <TalentoraHighFiCarousel />
            </div>
          </div>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-outcome-title">
          <div className="cs-section-header">
            <p className="cs-section-label">Outcome</p>
            <h2 id="ta-outcome-title" className="cs-section-title">
              Taking Talentora from an idea to a working AI recruiting product
            </h2>
          </div>
          <p className="cs-body">
            Over the course of the project, our team developed Talentora from an early concept
            into a functioning AI recruiting platform.
          </p>
          <div className="cs-experience-banner ta-outcome-banner">
            <h3 className="cs-experience-banner-title">The project</h3>
            <ul className="ta-outcome-list">
              {outcomeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="ta-outcome-photo">
            <Image
              src="/talentora/demo-day-audience-choice-award.jpg"
              alt="Talentora team holding Audience Choice Award certificates at BU Spark! Demo Day"
              width={1024}
              height={812}
              className="ta-outcome-photo-image"
              sizes="100vw"
            />
          </figure>
          <p className="cs-body">
            The experience became one of my earliest opportunities to design an AI-native
            product with engineers and think beyond individual screens toward the larger
            product and business system.
          </p>
        </section>

        <hr className="cs-divider" />

        <section className="cs-section" aria-labelledby="ta-ethics-title">
          <div className="cs-section-header">
            <p className="cs-section-label">AI Ethics &amp; Human Oversight</p>
            <h2 id="ta-ethics-title" className="cs-section-title">
              Deciding where automation should stop
            </h2>
          </div>
          <p className="cs-body">
            As Talentora developed, our team began questioning how much influence AI should
            have over a hiring decision.
          </p>
          <p className="cs-body">
            Early versions of the product placed significant emphasis on AI-generated candidate
            scores across areas such as technical performance, sentiment, and overall interview
            performance. While these scores made candidates easier to compare, they also raised
            concerns about giving an automated system too much authority in a process that can
            directly affect someone&apos;s employment opportunities.
          </p>
          <p className="cs-body">
            Through discussions with our team and HR mentor, we decided that AI should support
            the recruiter&apos;s decision rather than make the decision itself.
          </p>
          <p className="cs-body">
            We therefore shifted the recruiter experience toward providing more supporting
            evidence, including interview summaries, individual responses, transcripts,
            category-level analysis, and access to the original interview. Recruiters could use
            the AI analysis to identify where to look while still reviewing the underlying
            information themselves.
          </p>
          <p className="cs-body">
            We also discussed unresolved concerns around sentiment, facial-expression, and speech
            analysis. These signals could potentially disadvantage candidates whose communication
            patterns differ because of disability or other individual differences. We did not
            fully resolve these questions before the project ended, but they changed how I
            thought about designing AI products in high-impact contexts.
          </p>
        </section>
      </div>
    </main>
  );
}
