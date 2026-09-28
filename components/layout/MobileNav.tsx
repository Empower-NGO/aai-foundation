"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setProjectsOpen(pathname.startsWith("/projects"));
  }, [pathname, open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[70] xl:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        aria-label="Mobile"
        className="absolute inset-0 flex flex-col bg-cream"
      >
        <div className="flex shrink-0 items-center justify-end px-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-2xl leading-none text-ink ring-1 ring-ink/10"
            aria-label="Close menu"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <ul className="space-y-1">
            {primaryNav.map((item) =>
              item.hasChildren ? (
                <li key={item.href}>
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-left text-base font-bold text-ink hover:bg-sage"
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
                            "flex min-h-11 items-center rounded-lg px-2 text-sm font-bold",
                            pathname === "/projects"
                              ? "text-deep-red"
                              : "text-ink",
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
                              "flex min-h-11 items-center rounded-lg px-2 text-sm font-bold",
                              pathname === project.href
                                ? "text-deep-red"
                                : "text-ink",
                            )}
                            onClick={onClose}
                          >
                            {project.name}
                            {project.status === "planned" ? " · Planned" : ""}
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
                      "flex min-h-12 items-center rounded-xl px-3 text-base font-bold",
                      pathname === item.href ||
                        (item.href !== "/" &&
                          pathname.startsWith(`${item.href}/`))
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
        </div>
      </nav>
    </div>,
    document.body,
  );
}
