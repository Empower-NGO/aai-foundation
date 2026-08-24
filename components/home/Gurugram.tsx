import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Gurugram() {
  const { gurugram } = home;

  return (
    <Section id="gurugram">
      <Reveal className="max-w-3xl">
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {gurugram.eyebrow}
        </p>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {gurugram.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed">{gurugram.body}</p>
        <div className="mt-8">
          <Button href={gurugram.cta.href} variant="secondary">
            {gurugram.cta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
