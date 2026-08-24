"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function ProjectSwitcher() {
  const pathname = usePathname();
  if (!pathname.startsWith("/projects")) return null;

  return (
    <div className="border-b border-line/80 bg-cream">
      <Container className="scrollbar-none flex gap-2 overflow-x-auto py-2">
        <Link
          href="/projects"
          className={cn(
            "inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-4 text-sm font-medium",
            pathname === "/projects"
              ? "bg-sage text-forest"
              : "text-ink/70 hover:bg-sage/70 hover:text-ink",
          )}
        >
          All projects
        </Link>
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={project.href}
            className={cn(
              "inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-4 text-sm font-medium",
              pathname === project.href
                ? "bg-sage text-forest"
                : "text-ink/70 hover:bg-sage/70 hover:text-ink",
            )}
          >
            {project.name}
          </Link>
        ))}
      </Container>
    </div>
  );
}
