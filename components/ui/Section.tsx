import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function Section({
  id,
  children,
  className,
  tone = "cream",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "surface" | "sage";
}) {
  return (
    <section
      id={id}
      data-section={id}
      className={cn(
        "overflow-x-clip py-12 sm:py-16 lg:py-24",
        tone === "surface" && "bg-surface",
        tone === "cream" && "bg-cream",
        tone === "sage" && "bg-sage",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
