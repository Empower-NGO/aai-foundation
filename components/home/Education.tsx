import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  const { education } = home;

  return (
    <Section id="education">
      <Reveal>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {education.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {education.title}
        </h2>
        <p className="mt-5 text-lg">{education.lead}</p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {education.items.map((item) => (
          <article key={item.title} className="flex flex-col">
            {item.imageSlot ? (
              <PhotoFrame
                slot={item.imageSlot}
                className="aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="flex aspect-[4/3] items-end rounded-[1.75rem] bg-sage p-6">
                <p className="font-display text-2xl text-forest">
                  Reading, and the world outside the gate.
                </p>
              </div>
            )}
            <h3 className="mt-4 text-xl">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
