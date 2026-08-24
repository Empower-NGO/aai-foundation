import type { Metadata } from "next";
import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/project/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Balgram, Yuvagram, Krushigram and Gurugram — four projects of Aai Samajsevi Sanstha.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
        {home.projectsIntro.eyebrow}
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.05] sm:leading-[0.95]">
        {home.projectsIntro.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg">{home.projectsIntro.lead}</p>
      <div className="mt-12">
        <ProjectGrid />
      </div>
    </Section>
  );
}
