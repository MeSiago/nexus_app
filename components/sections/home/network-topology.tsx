import type { HomePageContent, HomeProofNode } from "@/types/content";

function TopologyNode({
  className,
  content,
  featured = false,
}: {
  className: string;
  content: HomeProofNode;
  featured?: boolean;
}) {
  return (
    <div
      className={`absolute ${className} rounded-md border px-3 py-3 shadow-soft sm:px-4 sm:py-4 ${
        featured
          ? "border-primary-500/40 bg-surface-raised"
          : "border-border bg-surface/95"
      }`}
    >
      <span
        className={`block font-mono text-[0.625rem] leading-4 tracking-[0.12em] uppercase ${
          featured ? "text-primary-500" : "text-muted-ink"
        }`}
      >
        {content.eyebrow}
      </span>
      <span className="mt-1 block text-xs leading-4 font-medium text-ink sm:text-sm sm:leading-5">
        {content.label}
      </span>
    </div>
  );
}

export function NetworkTopology({
  content,
}: {
  content: HomePageContent["proof"];
}) {
  return (
    <figure
      aria-describedby="home-topology-caption"
      aria-labelledby="home-topology-title"
      className="relative overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-soft"
    >
      <div className="flex min-h-12 items-center justify-between gap-4 border-b border-border-subtle px-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-pill bg-primary-500"
          />
          <p className="font-mono text-[0.625rem] leading-4 tracking-[0.12em] text-muted-ink uppercase sm:text-[0.6875rem]">
            {content.eyebrow}
          </p>
        </div>
        <span className="hidden font-mono text-[0.625rem] tracking-[0.08em] text-muted-ink uppercase sm:block">
          {content.meta}
        </span>
      </div>

      <div className="relative h-[29rem] overflow-hidden sm:h-[33rem] lg:h-[38rem]">
        <svg
          aria-hidden="true"
          className="absolute inset-0 size-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 620"
        >
          <defs>
            <pattern
              height="42"
              id="topology-grid"
              patternUnits="userSpaceOnUse"
              width="42"
            >
              <path
                d="M 42 0 L 0 0 0 42"
                fill="none"
                stroke="var(--nexus-color-border-subtle)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="topology-glow">
              <stop
                offset="0"
                stopColor="var(--nexus-color-primary-500)"
                stopOpacity="0.16"
              />
              <stop
                offset="0.48"
                stopColor="var(--nexus-color-primary-500)"
                stopOpacity="0.05"
              />
              <stop
                offset="1"
                stopColor="var(--nexus-color-primary-500)"
                stopOpacity="0"
              />
            </radialGradient>
            <linearGradient id="topology-path" x1="0" x2="1">
              <stop
                offset="0"
                stopColor="var(--nexus-color-muted-ink)"
                stopOpacity="0.18"
              />
              <stop
                offset="0.5"
                stopColor="var(--nexus-color-primary-500)"
                stopOpacity="0.62"
              />
              <stop
                offset="1"
                stopColor="var(--nexus-color-muted-ink)"
                stopOpacity="0.18"
              />
            </linearGradient>
          </defs>

          <rect fill="url(#topology-grid)" height="620" width="1000" />
          <ellipse
            cx="500"
            cy="310"
            fill="url(#topology-glow)"
            rx="380"
            ry="300"
          />

          <g
            fill="none"
            stroke="url(#topology-path)"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <path d="M 180 142 C 300 142, 330 310, 500 310" />
            <path d="M 820 142 C 700 142, 670 310, 500 310" />
            <path d="M 180 500 C 300 500, 330 310, 500 310" />
            <path d="M 820 500 C 700 500, 670 310, 500 310" />
          </g>

          <g fill="var(--nexus-color-primary-500)">
            <circle cx="500" cy="310" r="4" />
            <circle cx="180" cy="142" opacity="0.45" r="3" />
            <circle cx="820" cy="142" opacity="0.45" r="3" />
            <circle cx="180" cy="500" opacity="0.45" r="3" />
            <circle cx="820" cy="500" opacity="0.45" r="3" />
          </g>
        </svg>

        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-500/10 sm:size-64"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-500/15 sm:size-44"
        />

        <TopologyNode
          className="top-[12%] left-[5%] w-[7rem] sm:left-[10%] sm:w-40"
          content={content.nodes.terminal}
        />
        <TopologyNode
          className="top-[12%] right-[5%] w-[7rem] sm:right-[10%] sm:w-40"
          content={content.nodes.operations}
        />
        <TopologyNode
          className="top-1/2 left-1/2 w-[8.5rem] -translate-x-1/2 -translate-y-1/2 sm:w-44"
          content={content.nodes.core}
          featured
        />
        <TopologyNode
          className="bottom-[10%] left-[5%] w-[7rem] sm:left-[10%] sm:w-40"
          content={content.nodes.infrastructure}
        />
        <TopologyNode
          className="right-[5%] bottom-[10%] w-[7rem] sm:right-[10%] sm:w-40"
          content={content.nodes.networkPoints}
        />
      </div>

      <figcaption className="grid gap-4 border-t border-border-subtle px-5 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] sm:items-end sm:px-6 sm:py-6">
        <h2
          className="max-w-2xl text-xl leading-7 font-medium tracking-[-0.025em] text-ink sm:text-2xl sm:leading-8"
          id="home-topology-title"
        >
          {content.title}
        </h2>
        <p
          className="text-xs leading-5 text-muted-ink sm:text-right"
          id="home-topology-caption"
        >
          {content.caption}
        </p>
      </figcaption>
    </figure>
  );
}
