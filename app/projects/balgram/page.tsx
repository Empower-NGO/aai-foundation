import type { Metadata } from "next";
import { ProjectView } from "@/components/project/ProjectView";
import { projectPages } from "@/content/projectPages";

export const metadata: Metadata = {
  title: projectPages.balgram.name,
  description: projectPages.balgram.tagline,
};

export default function BalgramPage() {
  return <ProjectView slug="balgram" />;
}
