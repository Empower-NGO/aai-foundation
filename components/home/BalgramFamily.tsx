import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BalgramFamily() {
  const { balgram } = home;

  return (
    <Section id="balgram" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {balgram.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {balgram.title}
          </h2>
          <p className="mt-4 text-sm text-forest">{balgram.location}</p>
          <p className="mt-5 text-lg leading-relaxed">{balgram.body}</p>
          <p className="mt-6 flex flex-wrap gap-2">
            {balgram.qualities.map((word) => (
              <span
                key={word}
                className="rounded-full bg-sage px-3 py-1 text-sm text-ink"
              >
                {word}
              </span>
            ))}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-body">
            {balgram.care}
          </p>
          <div className="mt-8">
            <Button href={balgram.cta.href}>{balgram.cta.label}</Button>
          </div>
        </Reveal>
        <PhotoFrame
          slot={balgram.imageSlot}
          className="aspect-[16/10] min-h-64 lg:aspect-[5/6]"
        />
      </div>
    </Section>
  );
}
