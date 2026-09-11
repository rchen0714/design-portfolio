"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  { src: "/hero-about/pic1.png", alt: "Graduation photo" },
  { src: "/hero-about/pic2.png", alt: "Plush toy photo" },
  { src: "/hero-about/pic3.png", alt: "Theme park photo" },
  { src: "/hero-about/pic4.png", alt: "Cafe photo" },
] as const;

export default function AboutPolaroidStack() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`about-polaroid-stack${expanded ? " is-expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => {
        if (window.matchMedia("(hover: none)").matches) {
          setExpanded((current) => !current);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setExpanded((current) => !current);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label="Photo stack. Hover or press to expand."
    >
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          className={`about-polaroid-stack-item about-polaroid-stack-item--${index + 1}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={280}
            height={340}
            className="about-polaroid-stack-image"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
