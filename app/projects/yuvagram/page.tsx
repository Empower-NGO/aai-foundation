import type { Metadata } from "next";
import { ProjectView } from "@/components/project/ProjectView";
import { projectPages } from "@/content/projectPages";

export const metadata: Metadata = {
  title: projectPages.yuvagram.name,
  description: projectPages.yuvagram.tagline,
};

export default function YuvagramPage() {
  return <ProjectView slug="yuvagram" />;
}
