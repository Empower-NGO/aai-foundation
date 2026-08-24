import Image from "next/image";
import { cn } from "@/lib/cn";
import { publicAsset } from "@/lib/asset";
import { imageSlots, type ImageSlotKey } from "@/content/images";

export function PhotoFrame({
  slot,
  className,
  priority = false,
  caption,
  sizes = "(max-width: 768px) 100vw, 56rem",
}: {
  slot: ImageSlotKey;
  className?: string;
  priority?: boolean;
  caption?: string;
  sizes?: string;
}) {
  const image = imageSlots[slot];

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl bg-sage shadow-[0_24px_60px_-28px_rgba(23,22,20,0.35)] sm:rounded-[1.75rem]",
        className,
      )}
    >
      <Image
        src={publicAsset(image.src)}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover"
        priority={priority}
      />
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 pb-3 pt-10 text-xs leading-snug text-white sm:px-4 sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
