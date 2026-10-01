"use client";

import type { CSSProperties } from "react";

type HorizontalCarouselProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
  /** Full-loop duration; longer tracks need more time for the same scroll speed. */
  animationDurationSec?: number;
};

export default function HorizontalCarousel({
  children,
  className = "",
  ariaLabel,
  animationDurationSec,
}: HorizontalCarouselProps) {
  const carouselStyle: CSSProperties | undefined =
    animationDurationSec !== undefined
      ? ({ "--carousel-duration": `${animationDurationSec}s` } as CSSProperties)
      : undefined;

  return (
    <div
      className={`about-carousel about-carousel--auto ${className}`.trim()}
      style={carouselStyle}
    >
      <div
        className="about-carousel-marquee"
        role="region"
        aria-label={ariaLabel}
      >
        <div className="about-carousel-marquee-content">
          <div className="about-carousel-marquee-set">{children}</div>
          <div className="about-carousel-marquee-set" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
