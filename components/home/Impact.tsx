import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function Impact() {
  const { impact } = home;

  return (
    <Section id="impact" tone="sage">
      <Reveal>
        <p className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {impact.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {impact.title}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {impact.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl sm:text-6xl text-forest leading-none">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 font-semibold text-ink">{stat.label}</p>
            <p className="mt-1 text-sm leading-relaxed">{stat.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 max-w-2xl text-lg leading-relaxed">{impact.hundreds}</p>
    </Section>
  );
}
