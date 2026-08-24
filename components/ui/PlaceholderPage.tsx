import { Container } from "@/components/ui/Container";

export function PlaceholderPage({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <section className="flex-1 py-20 sm:py-28">
      <Container>
        <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
          Aai Samajsevi Sanstha
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl sm:text-6xl leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          {note ??
            "This page will be written in a later phase. Navigation and layout are in place so the site can grow without changing its structure."}
        </p>
      </Container>
    </section>
  );
}
