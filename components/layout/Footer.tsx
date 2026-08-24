import { org } from "@/content/org";
import { footerNav } from "@/content/nav";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-3 mb-3 rounded-[1.5rem] bg-sage sm:mx-8 sm:mb-5 sm:rounded-[2rem] lg:mx-10">
        <Container className="py-10 sm:py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl sm:text-3xl text-ink">
              {org.legalName}
            </p>
            <p className="mt-2 text-forest">{org.tagline}</p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-body">
              {org.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-4 flex flex-col gap-1 text-sm">
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
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-forest">
              Explore
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center hover:text-forest"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-forest">
              Projects
            </p>
            <ul className="mt-4 space-y-1 text-sm">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    href={project.href}
                    className="inline-flex min-h-11 items-center hover:text-forest"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/get-involved">Support a Child</Button>
            </div>
          </div>
        </Container>

        <Container className="pb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-body">
          <p>© {org.legalName}. All rights reserved.</p>
          <p>
            {org.social.map((item) => item.label).join(" · ")}
            <span className="ml-2 text-xs text-body/70">
              Profile links to be added
            </span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
