import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

export function LifeAtBalgram() {
  const { life } = home;

  return (
    <Section id="life" tone="surface">
      <Reveal>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {life.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {life.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg">{life.lead}</p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {life.images.map((image) => (
          <PhotoFrame
            key={image.slot}
            slot={image.slot}
            caption={image.caption}
            className="aspect-[5/4]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed">{life.note}</p>
    </Section>
  );
}
