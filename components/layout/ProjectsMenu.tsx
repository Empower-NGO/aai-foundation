"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/content/projects";
import { cn } from "@/lib/cn";

export function ProjectsMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const isActive =
    pathname === "/projects" || pathname.startsWith("/projects/");

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 min-h-10 px-3.5 rounded-full text-sm font-medium",
          isActive
            ? "bg-sage text-forest"
            : "text-ink/80 hover:bg-cream hover:text-ink",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Projects
        <span aria-hidden="true" className="text-[0.6rem]">
          ▾
        </span>
      </button>
      <div
        id={menuId}
        hidden={!open}
        className="absolute left-0 top-full z-50 w-80 pt-3"
      >
        <ul className="rounded-2xl bg-surface p-2 shadow-[0_24px_50px_-20px_rgba(23,22,20,0.35)] ring-1 ring-ink/5">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={project.href}
                className={cn(
                  "block rounded-xl px-4 py-3 hover:bg-sage focus-visible:bg-sage",
                  pathname === project.href && "bg-sage",
                )}
                onClick={() => setOpen(false)}
              >
                <span className="block font-display text-lg text-ink">
                  {project.name}
                </span>
                <span className="mt-0.5 block text-sm text-body leading-snug">
                  {project.tagline}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
