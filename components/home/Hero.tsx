import { home } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame";

export function Hero() {
  const { hero } = home;

  return (
    <section id="hero" data-section="hero" className="pt-8 pb-6 sm:pt-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-md text-lg sm:text-xl leading-relaxed text-ink">
              {hero.support}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-deep-red/15 blur-2xl"
            />
            <PhotoFrame
              slot={hero.imageSlot}
              className="aspect-[4/5] min-h-56 sm:min-h-72"
              priority
            />
          </div>
        </div>
        <PhotoFrame
          slot={hero.bandSlot}
          className="mt-10 aspect-[16/9] min-h-44 sm:aspect-[21/9] lg:aspect-[21/7]"
          priority
          sizes="100vw"
        />
      </Container>
    </section>
  );
}
