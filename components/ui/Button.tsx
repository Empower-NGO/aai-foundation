import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "text";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-deep-red text-white hover:bg-[#c94c22] shadow-[0_10px_24px_-12px_rgba(226,91,42,0.8)]",
  secondary:
    "border border-ink/10 bg-surface text-ink hover:border-forest hover:text-forest",
  text: "text-forest hover:text-deep-red underline-offset-4 hover:underline px-0",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center min-h-12 w-full sm:w-auto px-6 py-2.5 rounded-full text-sm font-semibold transition-colors touch-manipulation",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
