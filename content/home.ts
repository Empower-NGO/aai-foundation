import type { ImageSlotKey } from "@/content/images";

/**
 * Homepage copy rewritten for the web from the content draft.
 * No brochure-only figures (115 children, 350 trees, etc.).
 */
export const home = {
  hero: {
    eyebrow: "Since 2004 · Balgram Parivar",
    title: "The Origin of Love",
    support:
      "Every child deserves a family, education, dignity and a future.",
    primaryCta: { label: "Support a Child", href: "/get-involved" },
    secondaryCta: { label: "Discover Our Story", href: "#origin" },
    imageSlot: "hero-portrait" as ImageSlotKey,
    bandSlot: "hero-children" as ImageSlotKey,
  },
  origin: {
    eyebrow: "Our story",
    title: "Born from adversity. Built with compassion.",
    lead: "In 2004, in Beed, Maharashtra, Santosh Narayan Garje chose family over circumstance. His sister died in childbirth. He was 18. He gave up a dream of becoming a teacher and began caring for children who had no one.",
    close:
      "Sahara Anathalaya Pariwar began with seven children. It became Balgram. From one child who needed a family to hundreds of lives touched — this is the journey of Aai.",
    steps: [
      {
        year: "2004",
        title: "Seven children",
        text: "Sahara Anathalaya Pariwar begins.",
      },
      {
        year: "2007",
        title: "Registered",
        text: "Aai Samajsevi Sanstha is formally registered. Balgram grows in Georai, Beed.",
      },
      {
        year: "2011",
        title: "A campus takes shape",
        text: "The first major building is established, with accommodation for nearly 100 children.",
      },
      {
        year: "2015",
        title: "Education and careers",
        text: "Greater emphasis on higher education, careers and long-term rehabilitation.",
      },
      {
        year: "Yuvagram",
        title: "Beyond 18",
        text: "Support continues into youth — education, skills and independent living.",
      },
      {
        year: "Krushigram",
        title: "The soil",
        text: "Agriculture and sustainable living become part of how children grow.",
      },
      {
        year: "Today",
        title: "The work continues",
        text: "Families, opportunities and dignified futures — still the purpose.",
      },
    ],
  },
  projectsIntro: {
    eyebrow: "Four projects",
    title: "A life, not a programme.",
    lead: "Childhood in a family. Youth with support. A relationship with the land. Dignity in old age.",
  },
  balgram: {
    eyebrow: "Balgram Parivar",
    title: "A home where children become a family.",
    location:
      "Near the foothills of the Palkhya mountains, around three kilometres from Georai, Beed.",
    body: "Children from orphanhood, abandonment, family crisis and other vulnerable circumstances live together here — they attend school, grow their abilities, and prepare for an independent future. A child needs more than a roof. A child needs a family.",
    qualities: [
      "Loved",
      "Heard",
      "Educated",
      "Encouraged",
      "Challenged",
      "Trusted",
      "Prepared for life",
    ],
    care:
      "Family, education, healthcare, nutrition, life skills, sports, arts, technology, reading and the wider world.",
    cta: { label: "Explore Balgram", href: "/projects/balgram" },
    imageSlot: "balgram-campus" as ImageSlotKey,
  },
  impact: {
    eyebrow: "Impact",
    title: "Twenty years. Hundreds of lives. One continuing mission.",
    stats: [
      {
        value: 15,
        suffix: "+",
        label: "Young people who have completed higher education",
        note: "Across engineering, medical sciences, arts, hospitality and fashion.",
      },
      {
        value: 20,
        suffix: "+",
        label: "Currently pursuing higher education",
        note: "A present snapshot — not a lifetime total.",
      },
      {
        value: 70,
        suffix: "+",
        label: "Family reunifications",
        note: "Through investigation, counselling and mediation.",
      },
      {
        value: 12,
        suffix: "+",
        label: "Former residents who have started families of their own",
        note: "Reported by the organisation.",
      },
    ],
    hundreds:
      "Hundreds of vulnerable children have received shelter, education, food and medical support over more than two decades.",
  },
  education: {
    eyebrow: "Education & development",
    title: "Education is the beginning of independence.",
    lead: "At Balgram, learning is not limited to the classroom.",
    items: [
      {
        title: "Bhaishri Computer Training Centre",
        text: "Digital skills for study and work.",
        imageSlot: "education-computer" as ImageSlotKey,
      },
      {
        title: "Arts, craft and speaking",
        text: "Painting, craftwork and public speaking — including Balavishkar, a platform for hidden talent.",
        imageSlot: "culture-dance" as ImageSlotKey,
      },
      {
        title: "Library and the world beyond books",
        text: "Athanag Sagar Library, and visits to courts, police stations, municipal and water facilities.",
        imageSlot: null,
      },
    ],
  },
  yuvagram: {
    eyebrow: "Yuvagram",
    title: "Growing up should not mean losing the support of a family.",
    body: "Yuvagram, in Sharnapur, Chhatrapati Sambhajinagar, walks with young people above 18 toward higher education, skills, employment and independent living.",
    principle:
      "Leaving childhood care should be the beginning of independence — not the end of support.",
    path: ["Childhood", "Education", "Youth", "Independence"],
    note: "More than 20 young people are currently pursuing higher education and working toward financial independence.",
    cta: { label: "Meet Yuvagram", href: "/projects/yuvagram" },
    imageSlot: "yuvagram-campus" as ImageSlotKey,
  },
  krushigram: {
    eyebrow: "Krushigram",
    title: "Learning to care for the earth while learning to care for ourselves.",
    body: "Children learn farming, food and the dignity of labour — organic cultivation, orchards, vegetables, grains, animal husbandry, a goshala, vermicompost and farm ponds. Produce is grown without pesticides, and children see how food reaches the table.",
    cta: { label: "Explore Krushigram", href: "/projects/krushigram" },
    imageSlot: "krushigram-farm" as ImageSlotKey,
    secondarySlot: "krushigram-goshala" as ImageSlotKey,
  },
  gurugram: {
    eyebrow: "Gurugram",
    title: "Dignity, care and safety for the elderly.",
    body: "As families and lives change, the need for respectful elderly care grows. Gurugram is Aai’s initiative to offer security, dignity and human connection. We will share more as verified detail is ready.",
    cta: { label: "Meet Gurugram", href: "/projects/gurugram" },
  },
  life: {
    eyebrow: "Life at Balgram",
    title: "A living family, not an institution.",
    lead: "Children share meals, celebrate festivals, play, visit the world outside, and look after their health together.",
    note: "In 2024–25, Balgram children won 8 first prizes, 3 second prizes and 1 third prize at the district-level Chacha Nehru Children’s Festival — across sports, arts, writing and other competitions.",
    images: [
      { slot: "life-festival" as ImageSlotKey, caption: "Festivals" },
      { slot: "balgram-dining" as ImageSlotKey, caption: "Meals together" },
      { slot: "health-camp" as ImageSlotKey, caption: "Health camps" },
      { slot: "culture-dance" as ImageSlotKey, caption: "Culture" },
    ],
  },
  outcomes: {
    eyebrow: "What follows",
    title: "Every number has a story.",
    lead: "Former residents have gone on to become software engineers, police officers, PWD engineers, social workers, management professionals, fashion designers and entrepreneurs.",
    lines: [
      "A child who learns to read.",
      "A student who enters college.",
      "A young adult who earns independently.",
      "A former resident who starts a family.",
      "A family that is reunited.",
      "A young person who returns to give back.",
    ],
  },
  involved: {
    eyebrow: "Get involved",
    title: "You can become part of a child's journey.",
    lead: "Support is invited with respect — not with guilt.",
    paths: [
      { title: "Sponsor a child", text: "Day-to-day needs, education, healthcare and development.", href: "/get-involved" },
      { title: "Sponsor a meal", text: "Nutritious food for the family table.", href: "/get-involved" },
      { title: "Support education", text: "School, books, stationery and learning.", href: "/get-involved" },
      { title: "Higher education", text: "Walk with young adults toward independence.", href: "/get-involved" },
      { title: "Volunteer", text: "Time, skill and presence.", href: "/get-involved" },
      { title: "Partner with us", text: "CSR support for education, health, skills and sustainability.", href: "/get-involved" },
      { title: "Give materials", text: "Books, grain, computers, furniture, bicycles and more.", href: "/get-involved" },
      { title: "Visit Balgram", text: "The best way to understand the work is to meet the family.", href: "#visit" },
    ],
  },
  future: {
    eyebrow: "The journey continues",
    title: "The work is not finished.",
    lead: "Direction for the years ahead — not a claim that every building already exists:",
    items: [
      "Greater capacity to support more children",
      "Modern residential facilities",
      "Vocational and skill development",
      "Yuvagram, and young adults after 18",
      "Sustainable agriculture and self-reliance",
      "Cultural and educational spaces",
    ],
  },
  visit: {
    eyebrow: "Visit",
    title: "Come and meet the Balgram family.",
    lead: "We believe the best way to understand our work is to experience it. You are warmly invited.",
    yuvagram: "You can also connect with the Yuvagram project in Chhatrapati Sambhajinagar.",
  },
} as const;
