"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/content/nav";
import { projects } from "@/content/projects";
import { cn } from "@/lib/cn";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    setProjectsOpen(pathname.startsWith("/projects"));
  }, [pathname, open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40">
      <button
        type="button"
        className="absolute inset-0 bg-ink/30"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        aria-label="Mobile"
        className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-cream overflow-y-auto px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-20"
      >
        <ul className="space-y-1">
          {primaryNav.map((item) =>
            item.hasChildren ? (
              <li key={item.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between min-h-12 rounded-xl px-3 text-left text-base font-medium text-ink hover:bg-sage"
                  aria-expanded={projectsOpen}
                  onClick={() => setProjectsOpen((value) => !value)}
                >
                  Projects
                  <span aria-hidden="true">{projectsOpen ? "−" : "+"}</span>
                </button>
                {projectsOpen ? (
                  <ul className="mb-3 ml-3 border-l border-line pl-4">
                    <li>
                      <Link
                        href="/projects"
                        className={cn(
                          "flex min-h-11 items-center rounded-lg px-2 text-sm",
                          pathname === "/projects"
                            ? "text-deep-red"
                            : "text-body",
                        )}
                        onClick={onClose}
                      >
                        All projects
                      </Link>
                    </li>
                    {projects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={project.href}
                          className={cn(
                            "flex min-h-11 items-center rounded-lg px-2 text-sm",
                            pathname === project.href
                              ? "text-deep-red"
                              : "text-body",
                          )}
                          onClick={onClose}
                        >
                          {project.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center min-h-12 rounded-xl px-3 text-base font-medium",
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                      ? "bg-sage text-forest"
                      : "text-ink hover:bg-sage/60",
                  )}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <Link
          href="/get-involved"
          className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-deep-red px-4 text-sm font-semibold text-white"
          onClick={onClose}
        >
          Support a Child
        </Link>
      </nav>
    </div>
  );
}
