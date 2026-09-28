import type { Metadata } from "next";
import Image from "next/image";
import { donatePage } from "@/content/involved";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { publicAsset } from "@/lib/asset";

function AccountDetails({
  rows,
}: {
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <dl className="overflow-hidden rounded-3xl bg-sage">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid gap-1 border-b border-line/70 px-5 py-4 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:items-baseline"
        >
          <dt className="text-sm font-semibold text-forest">{row.label}</dt>
          <dd className="break-all text-lg text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Aai Samajsevi Sanstha. Donations are eligible for tax exemption under Section 80G.",
};

export default function DonatePage() {
  return (
    <>
      <Section>
        <Reveal className="max-w-3xl">
          <p className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {donatePage.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl leading-[1.05] sm:leading-[0.95]">
            {donatePage.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed">{donatePage.hero.lead}</p>
        </Reveal>
      </Section>

      <Section tone="surface" id="where">
        <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.where.title}</h2>
        <ul className="mt-8 max-w-2xl space-y-3">
          {donatePage.where.items.map((item) => (
            <li key={item} className="rounded-2xl bg-sage px-5 py-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="sage" id="tax">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.tax.title}</h2>
          <p className="mt-6 text-lg leading-relaxed">{donatePage.tax.text}</p>
        </div>
      </Section>

      <Section tone="surface" id="bank">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,36rem)_18rem] lg:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.bank.title}</h2>
            <div className="mt-8">
              <AccountDetails rows={donatePage.bank.rows} />
            </div>
          </div>
          <figure className="max-w-xs">
            <Image
              src={publicAsset(donatePage.bank.qr.src)}
              alt={donatePage.bank.qr.alt}
              width={donatePage.bank.qr.width}
              height={donatePage.bank.qr.height}
              className="h-auto w-full rounded-3xl bg-surface ring-1 ring-ink/10"
            />
            <figcaption className="mt-3 text-sm text-ink">
              UPI ID {donatePage.bank.upi}
            </figcaption>
          </figure>
        </div>
        <div className="mt-16 max-w-2xl" id="fcra">
          <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.fcra.title}</h2>
          <p className="mt-4 text-lg leading-relaxed">{donatePage.fcra.lead}</p>
          <div className="mt-8">
            <AccountDetails rows={donatePage.fcra.rows} />
          </div>
        </div>
      </Section>

      <Section id="receipt">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl leading-tight">{donatePage.receipt.title}</h2>
          <p className="mt-6 text-lg leading-relaxed">
            {donatePage.receipt.beforePhone}{" "}
            <a
              href={donatePage.receipt.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest hover:text-deep-red"
            >
              {donatePage.receipt.phone}
            </a>
            {donatePage.receipt.afterPhone}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {donatePage.receipt.items.map((item) => (
              <li
                key={item}
                className="inline-flex min-h-10 items-center rounded-full bg-sage px-4 py-2 text-sm text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            href={donatePage.receipt.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-deep-red px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(226,91,42,0.8)] transition-colors hover:bg-[#c94c22] sm:w-auto"
          >
            Share details on WhatsApp
          </a>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/contact">Contact us</Button>
          <Button href="/transparency" variant="secondary">
            Legal registrations
          </Button>
        </div>
      </Section>
    </>
  );
}
