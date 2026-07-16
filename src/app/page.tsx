
import TextType from "@/components/TextType";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div>
          <div>
            <h1>HI I&apos;M RUBY</h1>
            <span className="hero-role-line">
              <TextType
                as="h1"
                text={[
                  "A PRODUCT DESIGNER",
                  "A WEB DEVELOPER",
                  "AN ILLUSTRATOR",
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

          <div>
            <p>Currently</p>
            <p>Product Designer @ <a href="" target="_blank" rel="noopener noreferrer">Smata</a></p>
            <p>Product Designer @ <a href="" target="_blank" rel="noopener noreferrer">Thrival</a></p>

            <p>Previously</p>
            <p>Founding Designer @ <a href="" target="_blank" rel="noopener noreferrer">TalentoraAI</a></p>
            <p>HR Intern @ <a href="" target="_blank" rel="noopener noreferrer">Caidya</a></p>
          </div>

          <div>
            <p><a href="#selected-works" target="_blank" rel="noopener noreferrer">
              View work
            </a></p>
            <p><a href="https://www.linkedin.com/in/rchen0714" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a></p>
          </div>

        </div>


      </section>

      <section id="selected-works">
        <h1>Selected Works</h1>
        
        <div>
          <Image src="/placeholder-computer-mockup.png" alt="Talentora AI" width={400} height={300} />
          <div>
            <p>Talentora AI</p>
            <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
            <button><a href="/work/talentora-ai" target="_blank" rel="noopener noreferrer">View Project</a></button>
          </div>

          <Image src="/placeholder-phone-mockup.png" alt="Talentora AI" width={400} height={300} />
          <div>
            <p>Talentora AI</p>
            <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
            <button><a href="/work/talentora-ai" target="_blank" rel="noopener noreferrer">View Project</a></button>
          </div>

          <Image src="/placeholder-phone-mockup.png" alt="Talentora AI" width={400} height={300} />
          <div>
            <p>Talentora AI</p>
            <p>Designed an AI-powered recruiting platform that streamlined candidate screening, interview scheduling, and recruiter workflows while improving the overall hiring experience.</p>
            <button><a href="/work/talentora-ai" target="_blank" rel="noopener noreferrer">View Project</a></button>
          </div>
        </div>

        
      </section>
      
    </main>
  );
}
