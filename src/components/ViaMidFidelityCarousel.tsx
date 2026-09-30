"use client";

import Image from "next/image";
import HorizontalCarousel from "@/components/HorizontalCarousel";

const MID_FI_WIDTH = 1170;
const MID_FI_HEIGHT = 2532;

const viaMidFidelityScreens = [
  { file: "Onboarding.png", label: "Onboarding" },
  { file: "Onboarding-1.png", label: "Onboarding variant" },
  { file: "Sign Up.png", label: "Sign up" },
  { file: "Sign Up-1.png", label: "Sign up variant" },
  { file: "Map.png", label: "Map home" },
  { file: "Map - Searched.png", label: "Map search" },
  { file: "Destination Selected.png", label: "Destination selected" },
  { file: "Route Selection.png", label: "Route selection" },
  { file: "Navigation - Swipped up.png", label: "Turn-by-turn navigation" },
  { file: "Finished Route.png", label: "Finished route" },
  { file: "Finished Route - Reviewed.png", label: "Route review" },
  { file: "incident report.png", label: "Incident report" },
  { file: "Updates - nearby.png", label: "Updates nearby" },
  { file: "Updates - Favorites.png", label: "Favorite route updates" },
  { file: "Updates - No Favorites.png", label: "No favorites yet" },
  { file: "Updates - details.png", label: "Update details" },
  { file: "Profile - Favorite Routes.png", label: "Favorite routes" },
  { file: "Profile - Reports.png", label: "Your reports" },
] as const;

export default function ViaMidFidelityCarousel() {
  return (
    <HorizontalCarousel
      ariaLabel="Via mid-fidelity screens"
      className="via-fi-carousel about-carousel--slow"
    >
      {viaMidFidelityScreens.map((screen) => {
        const src = `/via/mid-fidelity/${screen.file}`;
        return (
          <figure key={screen.file} className="via-fi-carousel-item">
            <div className="via-fi-carousel-frame">
              <Image
                src={src}
                alt={`Via mid-fidelity mockup: ${screen.label}`}
                width={MID_FI_WIDTH}
                height={MID_FI_HEIGHT}
                sizes="11rem"
                className="via-fi-carousel-image"
              />
            </div>
            <figcaption className="via-fi-carousel-caption">{screen.label}</figcaption>
          </figure>
        );
      })}
    </HorizontalCarousel>
  );
}
