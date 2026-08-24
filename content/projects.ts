/**
 * Project one-liners from the content draft.
 * Do not add occupancy, tree counts, or other brochure-only figures.
 */
export const projects = [
  {
    slug: "balgram",
    name: "Balgram",
    tagline: "A home where children become a family.",
    href: "/projects/balgram",
    imageSlot: "balgram-campus",
  },
  {
    slug: "yuvagram",
    name: "Yuvagram",
    tagline: "From childhood to independence.",
    href: "/projects/yuvagram",
    imageSlot: "yuvagram-campus",
  },
  {
    slug: "krushigram",
    name: "Krushigram",
    tagline: "Connecting children with the soil.",
    href: "/projects/krushigram",
    imageSlot: "krushigram-farm",
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    tagline: "Dignity, care and safety for the elderly.",
    href: "/projects/gurugram",
    imageSlot: null,
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];
