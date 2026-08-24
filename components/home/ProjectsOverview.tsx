import { home } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGrid } from "@/components/project/ProjectGrid";

export function ProjectsOverview() {
  const { projectsIntro } = home;

  return (
    <Section id="projects">
      <Reveal>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          {projectsIntro.eyebrow}
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl leading-tight">
          {projectsIntro.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg">{projectsIntro.lead}</p>
      </Reveal>

      <div className="mt-12">
        <ProjectGrid />
      </div>
    </Section>
  );
}
