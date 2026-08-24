import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectSwitcher } from "@/components/project/ProjectSwitcher";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col overflow-x-clip">
      <Header />
      <ProjectSwitcher />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
