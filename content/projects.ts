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
    status: "active",
  },
  {
    slug: "yuvagram",
    name: "Yuvagram",
    tagline: "From childhood to independence.",
    href: "/projects/yuvagram",
    imageSlot: "yuvagram-campus",
    status: "active",
  },
  {
    slug: "krushigram",
    name: "Krushigram",
    tagline: "Connecting children with the soil.",
    href: "/projects/krushigram",
    imageSlot: "krushigram-farm",
    status: "active",
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    tagline: "A planned project for dignity, care and safety in old age.",
    href: "/projects/gurugram",
    imageSlot: null,
    status: "planned",
  },
] as const;

export type ProjectSlug = (typeof projects)[number]["slug"];
