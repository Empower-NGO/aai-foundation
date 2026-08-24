export const primaryNav = [
  { href: "/", label: "Home", hasChildren: false },
  { href: "/our-story", label: "Our Story", hasChildren: false },
  { href: "/projects", label: "Projects", hasChildren: true },
  { href: "/our-impact", label: "Our Impact", hasChildren: false },
  { href: "/get-involved", label: "Get Involved", hasChildren: false },
  { href: "/contact", label: "Contact", hasChildren: false },
] as const;

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/projects", label: "Projects" },
  { href: "/our-impact", label: "Our Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/get-involved/donate", label: "Donate" },
  { href: "/transparency", label: "Transparency" },
  { href: "/contact", label: "Contact" },
] as const;
