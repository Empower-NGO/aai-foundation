import { home } from "@/content/home";
import { org } from "@/content/org";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Visit() {
  const { visit } = home;

  return (
    <Section id="visit" tone="surface">
      <Reveal>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {visit.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {visit.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg">{visit.lead}</p>
      </Reveal>
      <address className="mt-8 not-italic text-lg leading-relaxed text-ink">
        {org.address.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      <div className="mt-4 flex flex-col gap-1">
        <a
          href={`tel:${org.phones.landline}`}
          className="inline-flex min-h-11 items-center hover:text-forest"
        >
          {org.phones.landline}
        </a>
        {org.phones.mobile.map((phone) => (
          <a
            key={phone}
            href={`tel:${phone}`}
            className="inline-flex min-h-11 items-center hover:text-forest"
          >
            {phone}
          </a>
        ))}
        <a
          href={`mailto:${org.email}`}
          className="inline-flex min-h-11 items-center break-all hover:text-forest"
        >
          {org.email}
        </a>
      </div>
      <p className="mt-6 max-w-xl">{visit.yuvagram}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="/contact">Contact</Button>
        <Button href="/get-involved" variant="secondary">
          Support a Child
        </Button>
      </div>
    </Section>
  );
}
