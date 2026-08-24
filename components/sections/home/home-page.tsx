import Link from "next/link";

import { homeContent } from "@/content/pages/home-content";

import { AirportConnectivityVisual } from "./airport-connectivity-visual";
import { OperationsFlow } from "./operations-flow";

function SectionMarker({ index, eyebrow }: { index: string; eyebrow: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[0.6875rem] leading-4 tracking-[0.12em] uppercase">
      <span className="text-primary-500">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-border" />
      <span className="text-muted-ink">{eyebrow}</span>
    </div>
  );
}

export function HomePage() {
  const { hero, contextVisual, manifesto, services, flow, values, cta } =
    homeContent;

  return (
    <div className="overflow-hidden bg-background">
      <section className="border-b border-border-subtle">
        <div className="mx-auto w-full max-w-content px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-10 lg:pt-32 lg:pb-24">
          <div className="max-w-5xl">
            <p className="flex items-center gap-3 font-mono text-[0.6875rem] leading-4 tracking-[0.12em] text-muted-ink uppercase">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-pill bg-primary-500"
              />
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[2.375rem] leading-[1.08] font-medium tracking-[-0.048em] text-balance text-ink sm:text-5xl sm:leading-[1.05] lg:max-w-5xl lg:text-[4rem] lg:leading-none">
              {hero.title}
            </h1>
            <div className="mt-7 grid gap-8 md:grid-cols-[minmax(0,36rem)_auto] md:items-end md:justify-between lg:mt-8">
              <p className="max-w-xl text-[0.9375rem] leading-6 text-muted-ink sm:text-base sm:leading-7">
                {hero.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-pill bg-primary-600 px-5 text-[0.8125rem] font-semibold text-ink-on-primary hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:bg-primary-500"
                  href={hero.links[0].href}
                >
                  {hero.links[0].label}
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-border bg-surface px-5 text-[0.8125rem] font-medium text-ink hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:border-primary-500/40 active:bg-primary-50"
                  href={hero.links[1].href}
                >
                  {hero.links[1].label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24">
            <AirportConnectivityVisual content={contextVisual} />
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle">
        <div className="mx-auto grid w-full max-w-content gap-12 px-6 py-24 lg:grid-cols-[0.34fr_1fr] lg:gap-16 lg:px-10 lg:py-32">
          <SectionMarker eyebrow={manifesto.eyebrow} index={manifesto.index} />
          <div>
            <h2 className="max-w-4xl text-[1.75rem] leading-[1.18] font-medium tracking-[-0.04em] text-balance text-ink sm:text-4xl sm:leading-[1.14] lg:text-[2.75rem] lg:leading-[1.12]">
              {manifesto.title}
            </h2>
            <p className="mt-8 max-w-2xl text-[0.9375rem] leading-6 text-muted-ink sm:text-base sm:leading-7">
              {manifesto.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle">
        <div className="mx-auto w-full max-w-content px-6 py-24 lg:px-10 lg:py-32">
          <SectionMarker eyebrow={services.eyebrow} index={services.index} />

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.58fr)] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl text-[1.875rem] leading-[1.15] font-medium tracking-[-0.04em] text-balance text-ink sm:text-4xl sm:leading-[1.12] lg:text-[3rem]">
              {services.title}
            </h2>
            <p className="max-w-xl text-[0.9375rem] leading-6 text-muted-ink sm:text-base sm:leading-7">
              {services.description}
            </p>
          </div>

          <div className="mt-16 grid border-y border-border-subtle md:grid-cols-3">
            {services.items.map((service, index) => (
              <article
                className={`grid min-h-64 grid-rows-[auto_1fr_auto] border-border-subtle py-7 md:min-h-80 md:px-8 md:py-8 ${
                  index < services.items.length - 1
                    ? "border-b md:border-r md:border-b-0"
                    : ""
                } ${index === 0 ? "md:pl-0" : ""} ${
                  index === services.items.length - 1 ? "md:pr-0" : ""
                }`}
                key={service.number}
              >
                <span className="font-mono text-[0.6875rem] leading-4 text-primary-500">
                  {service.number}
                </span>
                <h3 className="mt-12 self-end text-2xl leading-8 font-medium tracking-[-0.03em] text-ink sm:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-6 text-muted-ink">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 lg:mt-24">
            <OperationsFlow content={flow} />
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle">
        <div className="mx-auto w-full max-w-content px-6 py-24 lg:px-10 lg:py-32">
          <SectionMarker eyebrow={values.eyebrow} index={values.index} />
          <h2 className="mt-12 max-w-3xl text-[1.875rem] leading-[1.15] font-medium tracking-[-0.04em] text-balance text-ink sm:text-4xl sm:leading-[1.12] lg:text-[3rem]">
            {values.title}
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((value, index) => (
              <article
                className="min-h-56 bg-surface p-6 sm:min-h-64 sm:p-7"
                key={value.title}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.625rem] leading-4 text-muted-ink">
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-pill bg-primary-500/70"
                  />
                </div>
                <h3 className="mt-16 text-lg leading-6 font-medium tracking-[-0.02em] text-ink sm:mt-20">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-ink">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-content px-6 py-16 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-lg border border-border-subtle bg-surface-raised px-6 py-14 sm:px-10 sm:py-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-14 lg:py-20">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute top-0 right-0 h-full w-2/3 opacity-70"
              preserveAspectRatio="xMaxYMid slice"
              viewBox="0 0 600 300"
            >
              <defs>
                <radialGradient id="cta-glow" cx="1" cy="0.5" r="0.8">
                  <stop
                    offset="0"
                    stopColor="var(--nexun-color-primary-500)"
                    stopOpacity="0.16"
                  />
                  <stop
                    offset="1"
                    stopColor="var(--nexun-color-primary-500)"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>
              <rect fill="url(#cta-glow)" height="300" width="600" />
            </svg>

            <div className="relative">
              <p className="font-mono text-[0.6875rem] leading-4 tracking-[0.12em] text-primary-500 uppercase">
                {cta.eyebrow}
              </p>
              <h2 className="mt-5 max-w-3xl text-[2rem] leading-[1.12] font-medium tracking-[-0.04em] text-balance text-ink sm:text-4xl lg:text-[3rem]">
                {cta.title}
              </h2>
              <p className="mt-6 max-w-xl text-[0.9375rem] leading-6 text-muted-ink">
                {cta.description}
              </p>
            </div>

            <Link
              className="relative mt-10 inline-flex h-11 items-center justify-center gap-2 rounded-pill bg-primary-600 px-5 text-[0.8125rem] font-semibold text-ink-on-primary hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:bg-primary-500 lg:mt-0"
              href={cta.link.href}
            >
              {cta.link.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
