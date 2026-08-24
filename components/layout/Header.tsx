"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { org } from "@/content/org";
import { primaryNav } from "@/content/nav";
import { ProjectsMenu } from "@/components/layout/ProjectsMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { publicAsset } from "@/lib/asset";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md pt-[env(safe-area-inset-top)]">
      <Container className="flex items-center justify-between gap-3 py-2.5 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sage">
            <Image
              src={publicAsset("/assets/logo/aai-mark.png")}
              alt=""
              width={48}
              height={54}
              className="h-10 w-auto"
              priority
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-tight text-ink">
              <span className="lg:hidden">Aai Foundation</span>
              <span className="hidden lg:inline">{org.legalName}</span>
            </span>
            <span className="hidden text-xs text-forest lg:block">
              {org.tagline}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-1 rounded-full bg-surface/80 px-2 py-1 shadow-[0_8px_30px_-18px_rgba(23,22,20,0.45)] ring-1 ring-ink/5"
        >
          {primaryNav.map((item) =>
            item.hasChildren ? (
              <ProjectsMenu key={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium min-h-10 inline-flex items-center rounded-full px-3.5",
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`))
                    ? "bg-sage text-forest"
                    : "text-ink/80 hover:bg-cream hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden lg:inline-flex">
            <Button href="/get-involved">Support a Child</Button>
          </span>
          <button
            type="button"
            className="lg:hidden relative z-50 inline-flex items-center justify-center min-h-11 min-w-11 rounded-full bg-surface text-ink ring-1 ring-ink/10"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="text-xl leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </Container>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
