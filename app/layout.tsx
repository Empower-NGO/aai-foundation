import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { org } from "@/content/org";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f4f0",
};

export const metadata: Metadata = {
  title: {
    default: `${org.legalName} | ${org.tagline}`,
    template: `%s | ${org.legalName}`,
  },
  description:
    "Giving children more than shelter. Giving them a family, education, dignity and a future.",
  icons: {
    icon: "/assets/logo/aai-mark.png",
    apple: "/assets/logo/aai-mark.png",
  },
  ...(process.env.GITHUB_PAGES === "true"
    ? { robots: { index: false, follow: false } }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
