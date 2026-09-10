import Link from "next/link";

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-intro">
            <h2>Thanks for visiting!</h2>
            <p>Want to talk projects, collabs, tech or anything design?</p>
            <div className="footer-pills">
              <a
                href="https://www.linkedin.com/in/rchen0714"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:rc071404@bu.edu">rc071404@bu.edu</a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a
                  href="/ruby-resume-STUDYABROAD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link href="/play" className="footer-nav-play" aria-label="Play">
                  <span aria-hidden="true">
                    <span>P</span>
                    <span>l</span>
                    <span>a</span>
                    <span>y</span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="footer-copyright">© 2026 Ruby Chen. All rights reserved.</p>
      </div>
    </footer>
  );
}
