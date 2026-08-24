import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Krushigram() {
  const { krushigram } = home;

  return (
    <Section id="krushigram" tone="sage">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {krushigram.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {krushigram.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed">{krushigram.body}</p>
          <div className="mt-8">
            <Button href={krushigram.cta.href}>{krushigram.cta.label}</Button>
          </div>
        </Reveal>
        <div className="grid gap-4">
          <PhotoFrame
            slot={krushigram.imageSlot}
            className="aspect-[16/10]"
            caption="Children and the soil"
          />
          <PhotoFrame
            slot={krushigram.secondarySlot}
            className="aspect-[16/9]"
            caption="Goshala"
          />
        </div>
      </div>
    </Section>
  );
}
