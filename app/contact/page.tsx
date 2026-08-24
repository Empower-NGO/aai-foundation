import type { Metadata } from "next";
import { contactPage } from "@/content/involved";
import { org } from "@/content/org";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Balgram Parivar in Georai, Beed, or write to Aai Samajsevi Sanstha.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-3xl">
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {contactPage.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {contactPage.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed">{contactPage.hero.lead}</p>
        </Reveal>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Balgram Parivar</h2>
            <address className="mt-5 not-italic text-lg leading-relaxed">
              {org.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-6 text-sm text-forest">
              Yuvagram project: {org.yuvagramLocation}
            </p>
          </div>
          <div>
            <h2 className="text-3xl">Write or call</h2>
            <div className="mt-5 flex flex-col gap-1 text-lg">
              <a
                href={`mailto:${org.email}`}
                className="inline-flex min-h-11 items-center break-all hover:text-forest"
              >
                {org.email}
              </a>
              <a
                href={`tel:${org.phones.landline}`}
                className="inline-flex min-h-11 items-center hover:text-forest"
              >
                {org.phones.landline}
              </a>
              {org.phones.mobile.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="inline-flex min-h-11 items-center hover:text-forest"
                >
                  {phone}
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm">
              Head of organisation: {org.headOfOrganization}
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/get-involved/donate">Donate</Button>
          <Button href="/get-involved" variant="secondary">
            Other ways to help
          </Button>
        </div>
      </Section>
    </>
  );
}
