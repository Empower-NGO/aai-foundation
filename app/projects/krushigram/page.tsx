import type { Metadata } from "next";
import { ProjectView } from "@/components/project/ProjectView";
import { projectPages } from "@/content/projectPages";

export const metadata: Metadata = {
  title: projectPages.krushigram.name,
  description: projectPages.krushigram.tagline,
};

export default function KrushigramPage() {
  return <ProjectView slug="krushigram" />;
}
