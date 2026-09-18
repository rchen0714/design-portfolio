import type { Project } from "./types";

export const moodcast: Project = {
  title: "Moodcast",
  description:
    "A weather-driven music web app that lets you enter a city and get a playlist matched to the local forecast—let the weather set your daylist.",
  role: "Designer & Developer",
  mockup: "computer",
  heroImage: {
    src: "/casebanners/moodcastbanner.png",
    width: 2948,
    height: 1370,
  },
  overview:
    "Moodcast connects live weather with mood-based playlists so listeners can discover music that fits the sky outside—sunny, rainy, or in between.",
  problem:
    "People often pick music in a vacuum. Weather shapes how we feel, but most playlist tools ignore context and leave discovery feeling random.",
  solution:
    "We built a simple city search flow with clear weather results and playlist recommendations, using bold color, playful motion, and a focused landing experience.",
  outcome:
    "The app demonstrates full-stack product thinking—from visual identity and UX to a shippable web experience that makes context-aware listening feel effortless.",
};
