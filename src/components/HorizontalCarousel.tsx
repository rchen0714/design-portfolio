"use client";

type HorizontalCarouselProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
};

export default function HorizontalCarousel({
  children,
  className = "",
  ariaLabel,
}: HorizontalCarouselProps) {
  return (
    <div className={`about-carousel about-carousel--auto ${className}`.trim()}>
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
