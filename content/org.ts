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
    landline: "02427-202266",
    mobile: ["9763031020", "7588977979"] as const,
  },
  address: {
    lines: [
      "Balgram Parivar",
      "Sahara Anathalay Parivar",
      "Govindwadi, Georai",
      "District Beed, Maharashtra – 431127",
    ],
    short: "Govindwadi, Georai, Beed – 431127, Maharashtra",
  },
  yuvagramLocation: "Sharnapur, Chhatrapati Sambhajinagar",
  social: [
    { label: "Facebook", href: null },
    { label: "Instagram", href: null },
    { label: "LinkedIn", href: null },
    { label: "YouTube", href: null },
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
