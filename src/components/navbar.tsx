
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header id="navbar-header">
      <nav id="navbar">
        <Link className="navbar-links" href="/" title="Go to homepage">
          <Image
            id="nav-logo"
            src="/logo-plaeceholder.svg"
            alt="Ruby Chen Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        <ul id="navbar-menu">
          <li>
            <Link className="navbar-links" href="/work" title="Go to work page">
              work
            </Link>
          </li>
          <li>
            <Link className="navbar-links" href="/play" title="Go to play page">
              play
            </Link>
          </li>
          <li>
            <Link className="navbar-links" href="/about" title="Go to about page">
              about
            </Link>
          </li> 
          <li>
            <a
              className="navbar-links"
              href="/ruby-resume-STUDYABROAD.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
