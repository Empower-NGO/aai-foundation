import Link from "next/link";
import { projects } from "@/content/projects";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import type { ImageSlotKey } from "@/content/images";

export function ProjectGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={project.href}
          className="group rounded-3xl bg-surface p-2.5 ring-1 ring-ink/5 transition-shadow hover:shadow-[0_20px_50px_-28px_rgba(23,22,20,0.4)] sm:rounded-[1.75rem] sm:p-3"
        >
          {project.imageSlot ? (
            <PhotoFrame
              slot={project.imageSlot as ImageSlotKey}
              className="aspect-[16/10] shadow-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex aspect-[16/10] items-end rounded-[1.4rem] bg-sage p-6">
              <p className="font-display text-3xl text-forest">
                A quieter chapter.
              </p>
            </div>
          )}
          <div className="px-3 pb-4 pt-4">
            <p className="font-display text-2xl text-ink group-hover:text-forest">
              {project.name}
            </p>
            <p className="mt-1 text-sm leading-relaxed">{project.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
