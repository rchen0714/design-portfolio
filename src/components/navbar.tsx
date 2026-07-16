
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/" title="Go to homepage">
          <Image
            src="/logo-plaeceholder.svg"
            alt="Ruby Chen Logo"
            width={50}
            height={50}
          />
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
