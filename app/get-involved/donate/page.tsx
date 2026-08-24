import type { Metadata } from "next";
import { donatePage } from "@/content/involved";
import { org } from "@/content/org";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Aai Samajsevi Sanstha. Donations are eligible for tax exemption under Section 80G.",
};

export default function DonatePage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-3xl">
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {donatePage.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {donatePage.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed">{donatePage.hero.lead}</p>
        </Reveal>
      </Section>

      <Section tone="surface" id="where">
        <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.where.title}</h2>
        <ul className="mt-8 max-w-2xl space-y-3">
          {donatePage.where.items.map((item) => (
            <li key={item} className="rounded-2xl bg-sage px-5 py-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sage" id="tax">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.tax.title}</h2>
          <p className="mt-6 text-lg leading-relaxed">{donatePage.tax.text}</p>
        </div>
      </Section>

      <Section id="how">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.how.title}</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed">
            {donatePage.how.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-1">
            <a
              href={`mailto:${org.email}`}
              className="inline-flex min-h-11 items-center break-all font-semibold text-forest"
            >
              {org.email}
            </a>
            <a
              href={`tel:${org.phones.landline}`}
              className="inline-flex min-h-11 items-center"
            >
              {org.phones.landline}
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact">Contact us to give</Button>
            <Button href="/transparency" variant="secondary">
              Legal registrations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
