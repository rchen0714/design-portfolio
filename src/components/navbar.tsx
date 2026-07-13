import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/" title="Go to homepage">
          Logo
        </Link>

        <ul>
          <li>
            <Link href="/work" title="Go to work page">
              Work
            </Link>
          </li>
          <li>
            <Link href="/play" title="Go to play page">
              Play
            </Link>
          </li>
          <li>
            <Link href="/about" title="Go to about page">
              About
            </Link>
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
      </nav>
    </header>
  );
}
