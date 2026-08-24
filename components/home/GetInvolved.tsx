import Link from "next/link";
import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function GetInvolved() {
  const { involved } = home;

  return (
    <Section id="get-involved" tone="sage">
      <Reveal>
        <p className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {involved.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {involved.title}
        </h2>
        <p className="mt-5 text-base sm:text-lg">{involved.lead}</p>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {involved.paths.map((path) => (
          <Link
            key={path.title}
            href={path.href}
            className="rounded-2xl bg-surface p-5 ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <p className="font-semibold text-ink">{path.title}</p>
            <p className="mt-2 text-sm leading-relaxed">{path.text}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
