/**
 * Organization facts from the website content draft only.
 * Do not add unverified numbers, partner names, or social URLs here.
 */
export const org = {
  legalName: "Aai Samajsevi Sanstha",
  formerLegalName: "Aai Janhit Bahuuddeshiy Sevabhavi Sanstha",
  publicNames: ["Aai Foundation", "Balgram Parivar"] as const,
  tagline: "The Origin of Love",
  establishedYear: 2004,
  registeredYear: 2007,
  headOfOrganization: "Mr. Santosh N. Garje",
  website: "https://www.aaifoundation.org",
  email: "info@aaifoundation.org",
  phones: {
    mobile: ["9763031020", "7588977979"] as const,
  },
  address: {
    lines: [
      "Sahara Anathalay Parivar, Balgram, Gevrai. Dist. Beed.",
      "Pin-431127",
    ],
    short: "Balgram, Gevrai, Dist. Beed, Pin-431127",
  },
  yuvagramLocation: "Sharnapur, Chhatrapati Sambhajinagar",
  social: [
    { label: "YouTube", href: "https://www.youtube.com/@balgrampariwar" },
    { label: "Facebook", href: "https://www.facebook.com/balgrampariwar" },
    { label: "Instagram", href: "https://www.instagram.com/balgramaaingo/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/100508427/",
    },
  ] as const,
  legal: {
    society: "Society Registration Act 1860 – MH/169, Beed",
    trust: "Mumbai Public Trust Act 1950 – F-13146, Beed",
    pan: "AACTA7281R",
    section80G: "AACTA7281RF20216",
    section12AA: "AACTA7281RE20214",
    fcra: "083770083",
  },
} as const;
