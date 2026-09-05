import TextType from "@/components/TextType";
import Image from "next/image";
import Link from "next/link";

function HandwrittenSwap({
  src,
  width,
  height,
  variant,
  children,
}: {
  src: string;
  width: number;
  height: number;
  variant: "role" | "button";
  children: React.ReactNode;
}) {
  const imageClass =
    variant === "button"
      ? "pointer-events-none invisible absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100"
      : "pointer-events-none invisible absolute top-1/2 left-0 h-10 w-auto max-w-none -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100";

  return (
    <>
      <span className="inline-flex items-center gap-2 transition-opacity duration-200 group-hover:opacity-0">
        {children}
      </span>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={imageClass}
        aria-hidden
      />
    </>
  );
}

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-heading">
              <div className="hero-heading-text">
                <h1>HI! IM RUBY</h1>
                <span className="hero-role-line" suppressHydrationWarning>
                  <TextType
                    as="span"
                    text={[
                      "A PRODUCT DESIGNER",
                      "A WEB DEVELOPER",
                      "A GRAPHIC DESIGNER",
                      "A CREATIVE TECHNOLOGIST",
                    ]}
                    typingSpeed={75}
                    deletingSpeed={40}
                    pauseDuration={1800}
                    showCursor={true}
                    cursorCharacter="|"
                    loop={true}
                  />
                </span>
              </div>
              <div className="hero-image-placeholder" aria-hidden="true" />
            </div>

            <div className="hero-experience">
              <div className="hero-experience-group">
                <p className="hero-experience-label">Currently</p>
                <p className="group relative inline-block">
                  <HandwrittenSwap
                    src="/handwritten-text/smata-role-handwritten.png"
                    width={360}
                    height={40}
                    variant="role"
                  >
                    Founding Designer @ <a href="" target="_blank" rel="noopener noreferrer">Smata</a>
                  </HandwrittenSwap>
                </p>
                <p className="group relative inline-block">
                  <HandwrittenSwap
                    src="/handwritten-text/thrival-role-handwritten.png"
                    width={360}
                    height={40}
                    variant="role"
                  >
                    Product Designer @ <a href="" target="_blank" rel="noopener noreferrer">Thrival</a>
                  </HandwrittenSwap>
                </p>
              </div>

              <div className="hero-experience-group">
                <p className="hero-experience-label">Previously</p>
                <p className="group relative inline-block">
                  <HandwrittenSwap
                    src="/handwritten-text/caidya-role-handwritten.png"
                    width={360}
                    height={40}
                    variant="role"
                  >
                    Operations and AI solutions Intern @ <a href="" target="_blank" rel="noopener noreferrer">Caidya</a>
                  </HandwrittenSwap>
                </p>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#selected-works" className="hero-cta-button group relative">
                <HandwrittenSwap
                  src="/handwritten-text/view-work-handwritten.png"
                  width={160}
                  height={50}
                  variant="button"
                >
                  View works
                  <Image
                    src="/thrival/right-arrow-icon.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="button-arrow"
                    aria-hidden="true"
                  />
                </HandwrittenSwap>
              </a>
              <a
                href="https://www.linkedin.com/in/rchen0714"
                className="hero-cta-link group"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me
                <svg className="hero-cta-link-ring" aria-hidden="true">
                  <rect
                    className="fill-none stroke-black [stroke-width:2] [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:100] [stroke-dashoffset:100] [transition:stroke-dashoffset_0.75s_cubic-bezier(0.22,1,0.36,1)] group-hover:[stroke-dashoffset:0]"
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="9999"
                    ry="9999"
                    pathLength="100"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-works">
        <div className="selected-works-container">
          <h2 className="selected-works-title">selected works.</h2>

          <div className="selected-works-list">

          <article className="work-card work-card--media-right">
              <div className="work-card-content">
                <h3>Smata</h3>
                <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
                <Link href="/work/smata" className="work-card-button group relative">
                  <HandwrittenSwap
                    src="/handwritten-text/view-project-handwritten.png"
                    width={180}
                    height={50}
                    variant="button"
                  >
                    View Project
                    <Image
                      src="/thrival/right-arrow-icon.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="button-arrow"
                      aria-hidden="true"
                    />
                  </HandwrittenSwap>
                </Link>
              </div>
              <div className="work-card-media">
                <Image
                  src="/placeholder-computer-mockup.png"
                  alt="Smata"
                  width={560}
                  height={360}
                />
              </div>
            </article>

            <article className="work-card">
              <div className="work-card-content">
                <h3>Thrival</h3>
                <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
                <Link href="/work/thrival" className="work-card-button group relative">
                  <HandwrittenSwap
                    src="/handwritten-text/view-project-handwritten.png"
                    width={180}
                    height={50}
                    variant="button"
                  >
                    View Project
                    <Image
                      src="/thrival/right-arrow-icon.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="button-arrow"
                      aria-hidden="true"
                    />
                  </HandwrittenSwap>
                </Link>
              </div>
              <div className="work-card-media">
                <Image
                  src="/placeholder-computer-mockup.png"
                  alt="Thrival"
                  width={560}
                  height={360}
                />
              </div>
            </article>

            {/* <article className="work-card work-card--media-left">
              <div className="work-card-media">
                <Image
                  src="/placeholder-phone-mockup.png"
                  alt="Talentora AI"
                  width={260}
                  height={520}
                />
              </div>
              <div className="work-card-content">
                <h3>Talentora AI</h3>
                <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
                <Link href="/work/talentora-ai" className="work-card-button">
                  View Project
                  <Image
                    src="/thrival/right-arrow-icon.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="button-arrow"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article> */}


            {/* <article className="work-card work-card--media-left">
              <div className="work-card-media">
                <Image
                  src="/placeholder-phone-mockup.png"
                  alt="Via"
                  width={260}
                  height={520}
                />
              </div>
              <div className="work-card-content">
                <h3>Via</h3>
                <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
                <Link href="/work/via" className="work-card-button">
                  View Project
                  <Image
                    src="/thrival/right-arrow-icon.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="button-arrow"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article> */}

          </div>
        </div>
      </section>
      
    </main>
  );
}
