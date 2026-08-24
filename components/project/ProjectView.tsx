import Link from "next/link";
import { projectPages } from "@/content/projectPages";
import { projects, type ProjectSlug } from "@/content/projects";
import { org } from "@/content/org";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectView({ slug }: { slug: ProjectSlug }) {
  const page = projectPages[slug];

  return (
    <>
      <Section id="hero">
        <Reveal>
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            Project
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {page.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg sm:text-xl text-ink">{page.tagline}</p>
          {page.location ? (
            <p className="mt-3 text-sm text-forest">{page.location}</p>
          ) : null}
        </Reveal>
        {page.photos[0] ? (
          <PhotoFrame
            slot={page.photos[0].slot}
            caption={page.photos[0].caption}
            className="mt-10 aspect-[16/10] min-h-48 sm:aspect-[16/8] sm:min-h-56"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="mt-10 flex min-h-56 items-end rounded-[1.75rem] bg-sage p-8 sm:p-12">
            <p className="max-w-md font-display text-3xl text-forest">
              A photograph will be added when the organisation shares one.
            </p>
          </div>
        )}
      </Section>

      <Section id="story" tone="surface">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">{page.storyTitle}</h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed">
            {page.summary.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          {page.belief ? (
            <p className="mt-6 font-medium text-ink">{page.belief}</p>
          ) : null}
        </Reveal>
      </Section>

      <Section id="activities" tone="sage">
        <h2 className="text-3xl sm:text-4xl leading-tight">{page.activitiesTitle}</h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {page.activities.map((item) => (
            <li
              key={item}
              className="inline-flex min-h-10 items-center rounded-full bg-surface px-4 py-2 text-sm text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {page.photos.length > 1 ? (
        <Section id="photos">
          <h2 className="text-3xl sm:text-4xl leading-tight">Life here</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.photos.slice(1).map((photo) => (
              <PhotoFrame
                key={photo.slot}
                slot={photo.slot}
                caption={photo.caption}
                className="aspect-[5/4]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
          </div>
        </Section>
      ) : null}

      <Section id="connects" tone="surface">
        <h2 className="max-w-xl text-3xl sm:text-4xl leading-tight">
          How this sits with the other projects
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {page.connects.map((item) => {
            const meta = projects.find((project) => project.slug === item.slug);
            return (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="rounded-2xl bg-cream p-5 ring-1 ring-ink/5 hover:ring-forest/30"
              >
                <p className="font-display text-2xl text-ink">{meta?.name}</p>
                <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section id="support" tone="sage">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl leading-tight">{page.supportTitle}</h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed">{page.support}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/get-involved">Get involved</Button>
            <Button href="/contact" variant="secondary">
              Visit or write
            </Button>
          </div>
          <p className="mt-8 flex flex-col gap-1 text-sm sm:block">
            <span>{org.address.short}</span>
            <a
              href={`tel:${org.phones.landline}`}
              className="inline-flex min-h-11 items-center sm:ml-2 sm:inline"
            >
              {org.phones.landline}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
