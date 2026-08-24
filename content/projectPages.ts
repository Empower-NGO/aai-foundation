import type { ImageSlotKey } from "@/content/images";
import type { ProjectSlug } from "@/content/projects";

export type ProjectPageContent = {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  location?: string;
  storyTitle: string;
  summary: string[];
  belief?: string;
  activitiesTitle: string;
  activities: string[];
  photos: { slot: ImageSlotKey; caption: string }[];
  connects: { slug: ProjectSlug; text: string }[];
  supportTitle: string;
  support: string;
};

export const projectPages: Record<ProjectSlug, ProjectPageContent> = {
  balgram: {
    slug: "balgram",
    name: "Balgram",
    tagline: "A home where children become a family.",
    location:
      "Near the foothills of the Palkhya mountains, around three kilometres from Georai taluka, Beed.",
    storyTitle: "The heart of Aai’s work.",
    summary: [
      "Balgram sits near the foothills of the Palkhya mountains, about three kilometres from Georai in Beed, and is the centre of Aai Samajsevi Sanstha’s work.",
      "Children who have known orphanhood, abandonment, family crisis or other vulnerable circumstances live here together as a family — they go to school, grow their abilities, and prepare for an independent life.",
      "Care is whole: a home, education, healthcare, nutrition, emotional support, life skills, sports, arts, technology, reading and visits into the world beyond the campus.",
      "Learning is not only the classroom. Children use the Bhaishri Computer Training Centre and the Athanag Sagar Library, practise arts and public speaking, and visit courts, police stations and civic facilities.",
      "Days also hold yoga, prayer, play and festivals. In 2024–25, Balgram children won district prizes at the Chacha Nehru Children’s Festival, and health camps provided check-ups, medicines and glasses where needed.",
      "The belief is simple: a child needs more than a roof. A child needs a family.",
    ],
    belief: "A child needs more than a roof. A child needs a family.",
    activitiesTitle: "What a day can hold",
    activities: [
      "Residential care and a family table",
      "School and study",
      "Healthcare, nutrition and hygiene",
      "Emotional support",
      "Life skills",
      "Sports, yoga and play",
      "Arts, culture and Balavishkar",
      "Computers and the library",
      "Educational visits beyond the campus",
    ],
    photos: [
      { slot: "balgram-campus", caption: "The Balgram campus" },
      { slot: "balgram-building", caption: "Home and playground" },
      { slot: "balgram-dining", caption: "Meals together" },
      { slot: "life-festival", caption: "Festivals" },
      { slot: "health-camp", caption: "Health camps" },
      { slot: "education-computer", caption: "Learning with technology" },
    ],
    connects: [
      {
        slug: "yuvagram",
        text: "When a young person turns 18, support does not end. Yuvagram continues the family into independence.",
      },
      {
        slug: "krushigram",
        text: "Children also meet the soil — farming, food and care for animals.",
      },
      {
        slug: "gurugram",
        text: "The same idea of dignity extends to elderly people through Gurugram.",
      },
    ],
    supportTitle: "Walk with a child",
    support:
      "You can sponsor a child or a meal, support education, volunteer, or visit. The family is open to those who come with respect.",
  },
  yuvagram: {
    slug: "yuvagram",
    name: "Yuvagram",
    tagline: "From childhood to independence.",
    location: "Sharnapur, Chhatrapati Sambhajinagar",
    storyTitle: "Growing up should not mean losing the support of a family.",
    summary: [
      "Yuvagram exists because growing up should not mean losing the support of a family.",
      "It was created for young people above 18 as they leave childhood care and move toward higher education, employment, skills and independent living.",
      "The home is in Sharnapur, Chhatrapati Sambhajinagar — a place to keep studying, practise life skills, and prepare for self-reliance.",
      "The organisation treats this as a beginning, not a cutoff: leaving childhood care should start independence, not end support.",
      "More than 20 young people are currently pursuing higher education and working toward financial independence.",
      "That path is meant to continue the Balgram family into adult life, not replace it with being left alone.",
    ],
    belief:
      "Leaving childhood care should be the beginning of independence — not the end of support.",
    activitiesTitle: "What this chapter is for",
    activities: [
      "Higher education",
      "Skills for work",
      "Employment and self-reliance",
      "A stable place to live while becoming independent",
    ],
    photos: [{ slot: "yuvagram-campus", caption: "Yuvagram" }],
    connects: [
      {
        slug: "balgram",
        text: "Most of this path begins in Balgram — childhood, school and a first family.",
      },
      {
        slug: "krushigram",
        text: "Dignity of labour and a relationship with the land start earlier, at Krushigram.",
      },
      {
        slug: "gurugram",
        text: "Care that does not expire with age is the same thread as Gurugram.",
      },
    ],
    supportTitle: "Support this transition",
    support:
      "Higher education is one of the most direct ways to help. More than 20 young people are currently pursuing higher education and working toward financial independence.",
  },
  krushigram: {
    slug: "krushigram",
    name: "Krushigram",
    tagline: "Connecting children with the soil.",
    storyTitle: "Learning to care for the earth while learning to care for ourselves.",
    summary: [
      "Krushigram is Aai’s agricultural and sustainability work — made to reconnect children with farming, nature and the dignity of labour.",
      "Children learn how food is grown, what farming demands, and why sustainable practice matters.",
      "The work includes organic cultivation, fruit orchards, vegetables, and crops such as wheat, millet, jowar and maize.",
      "It also includes animal husbandry, a goshala, vermicompost and farm ponds.",
      "The organisation describes this as a way for children to understand agriculture while eating produce grown without pesticides, and seeing farming with their own hands.",
      "Cultivation of fruits, flowers, vegetables and crops runs across Balgram and Krushigram, so care for the soil returns to the family table.",
    ],
    activitiesTitle: "What children meet here",
    activities: [
      "Organic cultivation",
      "Fruit orchards",
      "Vegetables",
      "Wheat, millet, jowar and maize",
      "Animal husbandry",
      "Goshala",
      "Vermicompost",
      "Farm ponds",
    ],
    photos: [
      { slot: "krushigram-farm", caption: "Children and the garden" },
      { slot: "krushigram-goshala", caption: "Goshala" },
    ],
    connects: [
      {
        slug: "balgram",
        text: "The food and the habit of care return to the Balgram table.",
      },
      {
        slug: "yuvagram",
        text: "Practical skill and self-reliance continue after 18 at Yuvagram.",
      },
      {
        slug: "gurugram",
        text: "Respect for life — of people and of the land — is one mission.",
      },
    ],
    supportTitle: "Stand with this work",
    support:
      "Partners and visitors who care about education, food and sustainability can walk this part of the mission with Aai.",
  },
  gurugram: {
    slug: "gurugram",
    name: "Gurugram",
    tagline: "Dignity, care and safety for the elderly.",
    storyTitle: "Respect does not have an age.",
    summary: [
      "Gurugram is Aai’s initiative to offer respect, care and safety to elderly people.",
      "As family structures and lifestyles change, the need for dignified elderly care continues to grow.",
      "Through Gurugram, the organisation seeks a place where older people can find security, dignity and human connection.",
      "This sits inside a wider vision: a society that respects its elderly, just as it gives children a family and young people a path to independence.",
      "The same belief that guides Balgram applies here — a person needs belonging, not only a facility.",
      "Location, capacity and photographs are not yet in the source documents. They will be added when they are confirmed; we will not invent them.",
    ],
    activitiesTitle: "What we can say today",
    activities: [
      "Respect and human connection",
      "Care and safety",
      "A response to changing family life",
    ],
    photos: [],
    connects: [
      {
        slug: "balgram",
        text: "The same belief that a person needs a family, not only a facility.",
      },
      {
        slug: "yuvagram",
        text: "Support that continues through the stages of a life.",
      },
      {
        slug: "krushigram",
        text: "A wider social mission that includes the land and the elderly.",
      },
    ],
    supportTitle: "This page will stay honest",
    support:
      "We do not yet have a verified location, capacity or photograph for Gurugram. When those details are confirmed, they will be added here. Until then we will not invent them.",
  },
};
