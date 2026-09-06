"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="navbar-header" className="sticky top-0 z-50 w-full bg-white">
      <nav id="navbar">
        <Link className="navbar-links" href="/" title="Go to homepage">
          <span id="nav-logo" className="relative block aspect-square w-[clamp(3.5rem,4vw,4.75rem)] overflow-visible">
            <Image
              src="/logo.png"
              alt="Ruby Chen Logo"
              width={180}
              height={180}
              className={`h-auto w-full transition-opacity duration-200 ${scrolled ? "opacity-0" : "opacity-100"}`}
              priority
            />
            <Image
              src="/logo-after-scroll.png"
              alt=""
              width={180}
              height={180}
              className={`absolute top-1/2 left-0 h-auto w-[clamp(4.5rem,5.2vw,6.25rem)] max-w-none -translate-y-1/2 object-contain transition-opacity duration-200 ${scrolled ? "opacity-100" : "opacity-0"}`}
              aria-hidden
            />
          </span>
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
