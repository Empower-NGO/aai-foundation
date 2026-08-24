import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Future() {
  const { future } = home;

  return (
    <Section id="future">
      <Reveal>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {future.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {future.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg">{future.lead}</p>
      </Reveal>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {future.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl bg-sage px-5 py-4 text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
