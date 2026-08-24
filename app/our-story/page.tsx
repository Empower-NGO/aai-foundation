import type { Metadata } from "next";
import { storyPage } from "@/content/story";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Aai Samajsevi Sanstha began in 2004 — from Santosh Garje’s personal loss to Balgram Parivar.",
};

export default function OurStoryPage() {
  return (
    <>
      <Section>
        <Reveal>
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {storyPage.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {storyPage.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed">
            {storyPage.hero.lead}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <PhotoFrame
            slot="hero-portrait"
            className="aspect-[4/5]"
            priority
          />
          <PhotoFrame slot="balgram-campus" className="aspect-[4/5]" />
        </div>
      </Section>

      <Section tone="surface" id="origin">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {storyPage.origin.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {storyPage.origin.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sage" id="founder">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-forest">
            {storyPage.founder.role}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {storyPage.founder.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {storyPage.founder.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-forest">
            {storyPage.founder.awardsNote}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {storyPage.founder.awards.map((award) => (
              <li
                key={award}
                className="rounded-full bg-surface px-4 py-2 text-sm text-ink"
              >
                {award}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="vision">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {storyPage.vision.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {storyPage.vision.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface" id="mission">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {storyPage.mission.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed">{storyPage.mission.lead}</p>
          <ul className="mt-8 space-y-3">
            {storyPage.mission.items.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-sage px-5 py-4 text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sage" id="values">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">What we hold to</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {storyPage.values.map((value) => (
            <article
              key={value.name}
              className="rounded-2xl bg-surface p-6"
            >
              <h3 className="text-2xl">{value.name}</h3>
              <p className="mt-3 leading-relaxed">{value.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="family">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {storyPage.family.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed">{storyPage.family.lead}</p>
            <div className="mt-5 space-y-4 text-lg leading-relaxed">
              {storyPage.family.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/get-involved">Support a Child</Button>
              <Button href="/projects/balgram" variant="secondary">
                Explore Balgram
              </Button>
            </div>
          </div>
          <PhotoFrame slot="balgram-dining" className="aspect-[5/4]" />
        </div>
      </Section>
    </>
  );
}
