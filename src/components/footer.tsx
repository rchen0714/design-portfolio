export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-intro">
            <h2>Thanks for visiting!</h2>
            <p>Made with love and espresso ☕ {"<3"}</p>
          </div>

          <div className="footer-contact">
            <p className="footer-contact-label">↓ Get in contact</p>
            <ul className="footer-contact-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/rchen0714"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:rc071404@bu.edu">rc071404@bu.edu</a>
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
            </ul>
          </div>
        </div>

        <p className="footer-copyright">© 2026 Ruby Chen</p>
      </div>
    </footer>
  );
}
