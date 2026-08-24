import type { Metadata } from "next";
import { transparencyPage } from "@/content/involved";
import { org } from "@/content/org";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Legal registrations of Aai Samajsevi Sanstha — Society, Trust, PAN, 80G, 12AA and FCRA.",
};

const rows = [
  { label: "Organisation", value: org.legalName },
  { label: "Formerly", value: org.formerLegalName },
  { label: "Also known as", value: org.publicNames.join(" / ") },
  { label: "Society registration", value: org.legal.society },
  { label: "Public Trust", value: org.legal.trust },
  { label: "PAN", value: org.legal.pan },
  { label: "80G", value: org.legal.section80G },
  { label: "12AA", value: org.legal.section12AA },
  { label: "FCRA", value: org.legal.fcra },
  { label: "Head of organisation", value: org.headOfOrganization },
  { label: "Website", value: org.website.replace("https://", "") },
  { label: "Email", value: org.email },
] as const;

export default function TransparencyPage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-3xl">
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {transparencyPage.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {transparencyPage.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed">
            {transparencyPage.hero.lead}
          </p>
        </Reveal>
      </Section>

      <Section tone="surface">
        <dl className="divide-y divide-line">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:items-baseline"
            >
              <dt className="text-sm font-semibold text-forest">{row.label}</dt>
              <dd className="break-words text-base sm:text-lg text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed">
          Contact: {org.phones.landline} · {org.phones.mobile.join(" / ")}. Bank
          and payment instructions are shared only through the donate
          conversation, from the latest verified details.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/get-involved/donate">Donate</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Section>
    </>
  );
}
