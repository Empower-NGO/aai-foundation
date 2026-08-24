import { Hero } from "@/components/home/Hero";
import { OriginTimeline } from "@/components/home/OriginTimeline";
import { ProjectsOverview } from "@/components/home/ProjectsOverview";
import { BalgramFamily } from "@/components/home/BalgramFamily";
import { Impact } from "@/components/home/Impact";
import { Education } from "@/components/home/Education";
import { Yuvagram } from "@/components/home/Yuvagram";
import { Krushigram } from "@/components/home/Krushigram";
import { Gurugram } from "@/components/home/Gurugram";
import { LifeAtBalgram } from "@/components/home/LifeAtBalgram";
import { Outcomes } from "@/components/home/Outcomes";
import { GetInvolved } from "@/components/home/GetInvolved";
import { Future } from "@/components/home/Future";
import { Visit } from "@/components/home/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OriginTimeline />
      <ProjectsOverview />
      <BalgramFamily />
      <Impact />
      <Education />
      <Yuvagram />
      <Krushigram />
      <Gurugram />
      <LifeAtBalgram />
      <Outcomes />
      <GetInvolved />
      <Future />
      <Visit />
    </>
  );
}
