/**
 * Named image slots for v1. Later a CMS can replace `src` per slot.
 * Paths are under /public.
 */
export const imageSlots = {
  "hero-children": {
    src: "/assets/images/hero-children.jpg",
    alt: "Children of Balgram Parivar, including festival and everyday portraits",
  },
  "hero-portrait": {
    src: "/assets/images/hero-portrait.jpg",
    alt: "A child at Balgram smiling",
  },
  "balgram-campus": {
    src: "/assets/images/balgram-campus.jpg",
    alt: "Balgram Parivar campus gate and buildings near Georai",
  },
  "yuvagram-campus": {
    src: "/assets/images/yuvagram-campus.jpg",
    alt: "Yuvagram residential buildings and courtyard",
  },
  "life-festival": {
    src: "/assets/images/life-festival.jpg",
    alt: "Children celebrating a festival at Balgram",
  },
  "health-camp": {
    src: "/assets/images/health-camp.jpg",
    alt: "Health camp for children at Balgram",
  },
  "krushigram-goshala": {
    src: "/assets/images/krushigram-goshala.jpg",
    alt: "Goshala at Krushigram",
  },
  "culture-dance": {
    src: "/assets/images/culture-dance.jpg",
    alt: "Children performing a cultural dance",
  },
  "education-computer": {
    src: "/assets/images/education-computer.jpg",
    alt: "Children learning at the computer training centre",
  },
  "krushigram-farm": {
    src: "/assets/images/krushigram-farm.jpg",
    alt: "Children tending plants at Krushigram",
  },
  "balgram-building": {
    src: "/assets/images/balgram-building.jpg",
    alt: "A Balgram building and playground in a rural landscape",
  },
  "balgram-dining": {
    src: "/assets/images/balgram-dining.jpg",
    alt: "Children sharing a meal together at Balgram",
  },
} as const;

export type ImageSlotKey = keyof typeof imageSlots;
