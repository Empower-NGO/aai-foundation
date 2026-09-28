import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function OriginTimeline() {
  const { origin } = home;

  return (
    <Section id="origin" tone="sage">
      <Reveal>
        <p className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {origin.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {origin.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{origin.lead}</p>
      </Reveal>

      <ol className="mt-10 space-y-6 border-l border-forest/25 pl-5 sm:mt-12 xl:grid xl:grid-cols-7 xl:space-y-0 xl:border-l-0 xl:pl-0">
        {origin.steps.map((step, index) => (
          <li key={step.year} className="relative min-w-0">
            <span
              aria-hidden="true"
              className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full bg-forest xl:hidden"
            />
            <p className="font-display text-2xl text-forest">{step.year}</p>
            <p className="mt-2 font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-sm leading-relaxed">{step.text}</p>
            {index < origin.steps.length - 1 ? (
              <p className="mt-4 hidden text-leaf xl:block" aria-hidden="true">
                →
              </p>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-2xl text-lg leading-relaxed">{origin.close}</p>
    </Section>
  );
}
