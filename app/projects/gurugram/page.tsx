import type { Metadata } from "next";
import { ProjectView } from "@/components/project/ProjectView";
import { projectPages } from "@/content/projectPages";

export const metadata: Metadata = {
  title: projectPages.gurugram.name,
  description: projectPages.gurugram.tagline,
};

export default function GurugramPage() {
  return <ProjectView slug="gurugram" />;
}
