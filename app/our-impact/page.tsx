import type { Metadata } from "next";
import { impactPage } from "@/content/impact";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Twenty years of Aai Samajsevi Sanstha — higher education, family reunifications, and lives built after Balgram.",
};

export default function OurImpactPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {impactPage.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {impactPage.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed">
            {impactPage.hero.lead}
          </p>
        </Reveal>
      </Section>

      <Section tone="sage" id="numbers">
        <div className="grid gap-10 sm:grid-cols-2">
          {impactPage.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl sm:text-6xl text-forest leading-none">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-sm leading-relaxed">{stat.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed">
          {impactPage.hundreds}
        </p>
      </Section>

      <Section tone="surface" id="careers">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {impactPage.careers.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              {impactPage.careers.text}
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              {impactPage.reunification.text}
            </p>
          </div>
          <PhotoFrame slot="education-computer" className="aspect-[5/4]" />
        </div>
      </Section>

      <Section id="meaning">
        <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {impactPage.meaning.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          {impactPage.meaning.lead}
        </p>
        <ul className="mt-12 max-w-xl space-y-4">
          {impactPage.meaning.lines.map((line) => (
            <li
              key={line}
              className="font-display text-2xl sm:text-3xl text-ink leading-snug"
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed">
          {impactPage.meaning.close}
        </p>
      </Section>

      <Section tone="sage" id="year">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {impactPage.year.title}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              {impactPage.year.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <PhotoFrame
              slot="life-festival"
              className="aspect-[16/10]"
              caption="Festivals and culture"
            />
            <PhotoFrame
              slot="health-camp"
              className="aspect-[16/10]"
              caption="Health camps"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/get-involved">Be part of the next chapter</Button>
          <Button href="/projects" variant="secondary">
            See the work
          </Button>
        </div>
      </Section>
    </>
  );
}
