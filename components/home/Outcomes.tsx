import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Outcomes() {
  const { outcomes } = home;

  return (
    <Section id="outcomes">
      <Reveal>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {outcomes.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {outcomes.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">{outcomes.lead}</p>
      </Reveal>
      <ul className="mt-12 max-w-xl space-y-4">
        {outcomes.lines.map((line) => (
          <li
            key={line}
            className="font-display text-2xl sm:text-3xl text-ink leading-snug"
          >
            {line}
          </li>
        ))}
      </ul>
    </Section>
  );
}
