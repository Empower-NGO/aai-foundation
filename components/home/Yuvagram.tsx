import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Yuvagram() {
  const { yuvagram } = home;

  return (
    <Section id="yuvagram" tone="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <PhotoFrame
          slot={yuvagram.imageSlot}
          className="aspect-[16/10] min-h-64"
        />
        <Reveal>
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {yuvagram.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {yuvagram.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed">{yuvagram.body}</p>
          <p className="mt-5 font-medium text-ink">{yuvagram.principle}</p>
          <ol className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold">
            {yuvagram.path.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex min-h-10 items-center rounded-full bg-sage px-3 py-1 text-forest">
                  {step}
                </span>
                {index < yuvagram.path.length - 1 ? (
                  <span className="text-leaf" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed">{yuvagram.note}</p>
          <div className="mt-8">
            <Button href={yuvagram.cta.href}>{yuvagram.cta.label}</Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
