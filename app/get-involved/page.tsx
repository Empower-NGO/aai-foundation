import type { Metadata } from "next";
import { involvedPage } from "@/content/involved";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Sponsor a child, support education, volunteer, partner, or visit Balgram Parivar.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {involvedPage.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {involvedPage.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed">
            {involvedPage.hero.lead}
          </p>
          <p className="mt-4 max-w-2xl text-lg font-medium text-ink">
            {involvedPage.hero.close}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/get-involved/donate">Donate</Button>
            <Button href="/contact" variant="secondary">
              Visit or write
            </Button>
          </div>
        </Reveal>
        <PhotoFrame
          slot="hero-children"
          className="mt-12 aspect-[16/9] min-h-44 sm:aspect-[21/8]"
          sizes="100vw"
        />
      </Section>

      <Section tone="surface" id="ways">
        <div className="grid gap-6 md:grid-cols-2">
          {involvedPage.paths.map((path) => (
            <article
              key={path.id}
              id={path.id}
              className="rounded-[1.5rem] bg-cream p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl">{path.title}</h2>
              <p className="mt-4 leading-relaxed">{path.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sage">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl leading-tight">A child’s future is not fixed at birth.</h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed">
            For more than two decades Aai has worked so that abandonment can
            become a family, and a childhood can become an independent life. You
            can be part of that journey.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/get-involved/donate">Donate now</Button>
            <Button href="/transparency" variant="secondary">
              See our registrations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
