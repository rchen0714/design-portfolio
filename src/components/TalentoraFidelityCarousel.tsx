"use client";

import Image from "next/image";
import HorizontalCarousel from "@/components/HorizontalCarousel";

const SCREEN_WIDTH = 4320;
const SCREEN_HEIGHT = 3636;

/** One carousel loop duration per slide — keeps scroll speed consistent across fidelity rows. */
const CAROUSEL_SECONDS_PER_SLIDE = 15;

function TalentoraScreenCarousel({
  folder,
  files,
  ariaLabel,
}: {
  folder: string;
  files: readonly string[];
  ariaLabel: string;
}) {
  const altPrefix =
    folder === "lofi"
      ? "Low-fidelity"
      : folder === "midfi"
        ? "Mid-fidelity"
        : "High-fidelity";

  const animationDurationSec = files.length * CAROUSEL_SECONDS_PER_SLIDE;

  return (
    <HorizontalCarousel
      ariaLabel={ariaLabel}
      className="ta-fi-carousel"
      animationDurationSec={animationDurationSec}
    >
      {files.map((file, index) => {
        const src = `/talentora/${folder}/${encodeURIComponent(file)}`;
        return (
          <div key={file} className="ta-fi-carousel-item">
            <div className="ta-fi-carousel-frame">
              <Image
                src={src}
                alt={`${altPrefix} Talentora screen ${index + 1}`}
                width={SCREEN_WIDTH}
                height={SCREEN_HEIGHT}
                sizes="14.5rem"
                className="ta-fi-carousel-image"
              />
            </div>
          </div>
        );
      })}
    </HorizontalCarousel>
  );
}

const loFiFiles = [
  "Landing page.png",
  "Landing page2.png",
  "Landing page3.png",
  "Login.png",
  "Dashboard.png",
  "Applicant.png",
] as const;

const midFiFiles = [
  "Desktop - 33.png",
  "Desktop - 37.png",
  "Desktop - 44.png",
  "Desktop - 46.png",
  "Desktop - 50.png",
  "Desktop - 51.png",
  "Desktop - 54.png",
  "Desktop - 56.png",
  "Desktop - 57.png",
  "Desktop - 58.png",
] as const;

const highFiFiles = [
  "Login - Recruiter.png",
  "2FA - Login.png",
  "Recruiter Dashboard.png",
  "Jobs Page.png",
  "Jobs Page 3.png",
  "Applicants Page.png",
  "Invite Candidates.png",
  "Bot Gallery.png",
  "Bot Setup.png",
  "Bot Setup-1.png",
  "Bot Setup-2.png",
  "Bot Setup 8.png",
  "Bot Setup 9.png",
  "Bot Setup 10.png",
  "Bot Setup 11.png",
  "Bot Setup 12.png",
  "Settings Page.png",
  "Settings Page-1.png",
  "Settings Page-2.png",
  "Old Settings Page.png",
  "MacBook Pro 16_ - 13.png",
  "MacBook Pro 16_ - 14.png",
  "MacBook Pro 16_ - 17.png",
  "MacBook Pro 16_ - 18.png",
  "MacBook Pro 16_ - 19.png",
  "MacBook Pro 16_ - 20.png",
  "MacBook Pro 16_ - 21.png",
  "MacBook Pro 16_ - 22.png",
] as const;

export function TalentoraLoFiCarousel() {
  return (
    <TalentoraScreenCarousel
      folder="lofi"
      files={loFiFiles}
      ariaLabel="Talentora low-fidelity screens"
    />
  );
}

export function TalentoraMidFiCarousel() {
  return (
    <TalentoraScreenCarousel
      folder="midfi"
      files={midFiFiles}
      ariaLabel="Talentora mid-fidelity screens"
    />
  );
}

export function TalentoraHighFiCarousel() {
  return (
    <TalentoraScreenCarousel
      folder="highfi"
      files={highFiFiles}
      ariaLabel="Talentora high-fidelity screens"
    />
  );
}
