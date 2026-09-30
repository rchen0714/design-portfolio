"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";

const VIA_PERSONA_ASSETS = {
  sarah: {
    avatar: "/via/66ba79b7339e7d852cc528d5_sarah.avif",
    journey: "/via/66ba79b80baf7ef8c1d28a4b_Sarah's user journey.svg",
  },
  emily: {
    avatar: "/via/66ba7be3bbacb764b6c32790_emily.webp",
    journey: "/via/66bb0384096efabe8d92dfe2_Emilys user journey.svg",
  },
  mark: {
    avatar: "/via/66ba7be45331f6437707070a_mark.webp",
    journey: "/via/66ba7bfba1c31a04c65156e7_Mark's User Journey.svg",
  },
} as const;

type ViaPersona = {
  id: keyof typeof VIA_PERSONA_ASSETS;
  name: string;
  context: string;
  needType: string;
  quote: string;
  summary: string;
  journeyLabel: string;
  journeySteps: readonly string[];
  avatar: { src: string; alt: string; width: number; height: number };
  journey: { src: string; alt: string; width: number; height: number };
  accent: string;
};

const viaPersonas: readonly ViaPersona[] = [
  {
    id: "sarah",
    name: "Sarah",
    context: "Wheelchair user · NYC teacher",
    needType: "Permanent mobility need",
    quote:
      "I need reliable routes to work without surprises from construction or blocked sidewalks.",
    summary:
      "Daily commutes repeat the same streets. Sarah needs incident and route updates before she leaves, not after she is stuck.",
    journeyLabel: "Sarah's path through the app",
    journeySteps: [
      "Home",
      "Updates on favorite routes",
      "See what's changed",
      "Navigate around it",
    ],
    avatar: {
      src: VIA_PERSONA_ASSETS.sarah.avatar,
      alt: "Sarah, wheelchair user and NYC teacher",
      width: 512,
      height: 512,
    },
    journey: {
      src: VIA_PERSONA_ASSETS.sarah.journey,
      alt: "Sarah's user journey through Via, highlighted through Updates and navigation",
      width: 4611,
      height: 3277,
    },
    accent: "#f97316",
  },
  {
    id: "emily",
    name: "Emily",
    context: "On crutches · SF designer",
    needType: "Temporary mobility need",
    quote:
      "I need accessible paths to client meetings, especially while I'm on crutches.",
    summary:
      "A short recovery window means every trip has to work the first time. Emily prioritizes transit stops and routes she can manage on crutches.",
    journeyLabel: "Emily's path through the app",
    journeySteps: [
      "Home",
      "Search destination",
      "Check accessibility details",
      "Transit route to the meeting",
    ],
    avatar: {
      src: VIA_PERSONA_ASSETS.emily.avatar,
      alt: "Emily, designer in San Francisco recovering on crutches",
      width: 512,
      height: 512,
    },
    journey: {
      src: VIA_PERSONA_ASSETS.emily.journey,
      alt: "Emily's user journey through Via, highlighted through map search and transit routing",
      width: 4611,
      height: 3416,
    },
    accent: "#7c3aed",
  },
  {
    id: "mark",
    name: "Mark",
    context: "Mild arthritis · Chicago, retired",
    needType: "Situational mobility need",
    quote: "I want to keep exploring the city, but I need routes that are easy on my knees.",
    summary:
      "Mark still walks everywhere, he just avoids steep climbs. Lower-elevation walking paths matter more than the fastest ETA.",
    journeyLabel: "Mark's path through the app",
    journeySteps: ["Home", "Search destination", "Choose walking route", "Less incline option"],
    avatar: {
      src: VIA_PERSONA_ASSETS.mark.avatar,
      alt: "Mark, retired engineer in Chicago managing mild arthritis",
      width: 512,
      height: 512,
    },
    journey: {
      src: VIA_PERSONA_ASSETS.mark.journey,
      alt: "Mark's user journey through Via, highlighted through walking routes with less incline",
      width: 4611,
      height: 3416,
    },
    accent: "#2563eb",
  },
] as const;

export default function ViaPersonaFlows() {
  const baseId = useId();
  const [activeId, setActiveId] = useState<ViaPersona["id"]>(viaPersonas[0].id);
  const active = viaPersonas.find((persona) => persona.id === activeId) ?? viaPersonas[0];

  return (
    <div className="via-persona-flows">
      <div className="via-persona-tabs" role="tablist" aria-label="User personas">
        {viaPersonas.map((persona) => {
          const selected = persona.id === active.id;
          return (
            <button
              key={persona.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${persona.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${persona.id}`}
              className={`via-persona-tab${selected ? " via-persona-tab--active" : ""}`}
              style={
                selected
                  ? ({ "--via-persona-accent": persona.accent } as CSSProperties)
                  : undefined
              }
              onClick={() => setActiveId(persona.id)}
            >
              <span className="via-persona-tab-name">{persona.name}</span>
              <span className="via-persona-tab-type">{persona.needType}</span>
            </button>
          );
        })}
      </div>

      <div
        className="via-persona-panel"
        role="tabpanel"
        id={`${baseId}-panel-${active.id}`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        style={{ "--via-persona-accent": active.accent } as CSSProperties}
      >
        <div className="via-persona-split">
          <div className="via-persona-aside">
            <div className="via-persona-avatar-wrap">
              <Image
                src={active.avatar.src}
                alt={active.avatar.alt}
                width={active.avatar.width}
                height={active.avatar.height}
                className="via-persona-avatar"
                sizes="8rem"
              />
            </div>
            <p className="via-persona-context">
              <strong>{active.name}</strong> · {active.context}
            </p>
            <blockquote className="via-persona-quote">&ldquo;{active.quote}&rdquo;</blockquote>
            <p className="via-persona-summary">{active.summary}</p>

            <div className="via-persona-journey">
              <p className="via-persona-journey-label">{active.journeyLabel}</p>
              <ol className="via-persona-journey-steps">
                {active.journeySteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <figure className="via-persona-diagram">
            <div className="via-persona-diagram-frame">
              <Image
                src={active.journey.src}
                alt={active.journey.alt}
                width={active.journey.width}
                height={active.journey.height}
                sizes="(max-width: 900px) 100vw, 58vw"
                className="via-persona-diagram-img"
              />
            </div>
            <figcaption className="via-persona-diagram-caption">
              User flow — highlighted path shows where {active.name} needs accessibility
              information.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
