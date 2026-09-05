
import TextType from "@/components/TextType";
import Image from "next/image";
import Link from "next/link";

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
                <p>Founding Designer @ <a href="" target="_blank" rel="noopener noreferrer">Smata</a></p>
                <p>Lead Product Designer @ <a href="" target="_blank" rel="noopener noreferrer">Thrival</a></p>
              </div>

              <div className="hero-experience-group">
                <p className="hero-experience-label">Previously</p>
                <p>Operations and AI solutions Intern @ <a href="" target="_blank" rel="noopener noreferrer">Caidya</a></p>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#selected-works" className="hero-cta-button">
                View works
                <Image
                  src="/thrival/right-arrow-icon.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="button-arrow"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rchen0714"
                className="hero-cta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
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
                <Link href="/work/smata" className="work-card-button">
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
                <Link href="/work/thrival" className="work-card-button">
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
