import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { org } from "@/content/org";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
