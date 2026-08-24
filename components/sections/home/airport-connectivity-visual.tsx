import type { HomePageContent } from "@/types/content";

const airportPoints = [
  { x: 168, y: 190, emphasis: false },
  { x: 298, y: 128, emphasis: true },
  { x: 432, y: 208, emphasis: false },
  { x: 585, y: 146, emphasis: true },
  { x: 730, y: 225, emphasis: false },
  { x: 864, y: 156, emphasis: false },
  { x: 975, y: 300, emphasis: true },
  { x: 814, y: 404, emphasis: false },
  { x: 644, y: 470, emphasis: true },
  { x: 456, y: 405, emphasis: false },
  { x: 286, y: 466, emphasis: false },
  { x: 126, y: 350, emphasis: true },
] as const;

function AirportPoint({
  emphasis,
  x,
  y,
}: (typeof airportPoints)[number]) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {emphasis ? (
        <circle
          fill="none"
          r="18"
          stroke="var(--nexus-color-primary-500)"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
      ) : null}
      <circle
        fill="var(--nexus-color-surface)"
        r="5"
        stroke="var(--nexus-color-primary-500)"
        strokeOpacity="0.28"
        strokeWidth="1"
      />
      <circle
        fill="var(--nexus-color-primary-500)"
        fillOpacity={emphasis ? "0.92" : "0.62"}
        r={emphasis ? "2.5" : "2"}
      />
    </g>
  );
}

function Aircraft() {
  return (
    <g transform="translate(406 223)">
      <path
        d="M-18 0-4-2l8-10 3 1-4 9 14 2-14 3 4 9-3 1-8-10-14-1Z"
        fill="var(--nexus-color-ink)"
        fillOpacity="0.9"
        stroke="var(--nexus-color-primary-500)"
        strokeOpacity="0.34"
        strokeWidth="0.8"
      />
      <path
        d="M-6 0h13"
        fill="none"
        stroke="var(--nexus-color-surface)"
        strokeOpacity="0.6"
        strokeWidth="0.7"
      />
    </g>
  );
}

function ConnectivityScene() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1100 600"
    >
      <defs>
        <radialGradient id="nexus-connectivity-glow" cx="50%" cy="48%" r="64%">
          <stop
            offset="0"
            stopColor="var(--nexus-color-primary-500)"
            stopOpacity="0.08"
          />
          <stop
            offset="0.58"
            stopColor="var(--nexus-color-primary-500)"
            stopOpacity="0.02"
          />
          <stop offset="1" stopColor="var(--nexus-color-surface)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nexus-connectivity-route" x1="0" x2="1">
          <stop
            offset="0"
            stopColor="var(--nexus-color-muted-ink)"
            stopOpacity="0.08"
          />
          <stop
            offset="0.5"
            stopColor="var(--nexus-color-primary-500)"
            stopOpacity="0.5"
          />
          <stop
            offset="1"
            stopColor="var(--nexus-color-muted-ink)"
            stopOpacity="0.08"
          />
        </linearGradient>
      </defs>

      <rect fill="var(--nexus-color-surface)" height="600" width="1100" />
      <ellipse
        cx="550"
        cy="300"
        fill="url(#nexus-connectivity-glow)"
        rx="510"
        ry="300"
      />

      <g
        fill="none"
        stroke="var(--nexus-color-border-subtle)"
        strokeLinecap="round"
        strokeWidth="1"
      >
        <path d="M70 300C230 210 300 112 520 156" />
        <path d="M80 420C260 380 330 236 520 156" />
        <path d="M520 156C690 88 770 198 1018 160" />
        <path d="M520 156C690 260 770 352 1018 430" />
        <path d="M126 350C340 306 388 438 644 470" />
        <path d="M432 208C560 282 672 276 814 404" />
      </g>

      <g
        fill="none"
        stroke="url(#nexus-connectivity-route)"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M168 190C254 160 326 176 432 208" />
        <path d="M432 208C500 228 562 202 644 244" />
        <path d="M644 244C748 296 836 300 975 300" />
      </g>

      <g fill="none" stroke="var(--nexus-color-primary-500)" strokeOpacity="0.12">
        <ellipse cx="550" cy="300" rx="390" ry="202" strokeWidth="1" />
        <ellipse cx="550" cy="300" rx="280" ry="130" strokeWidth="1" />
      </g>

      {airportPoints.map((point) => (
        <AirportPoint key={`${point.x}-${point.y}`} {...point} />
      ))}

      <Aircraft />
    </svg>
  );
}

export function AirportConnectivityVisual({
  content,
}: {
  content: HomePageContent["contextVisual"];
}) {
  return (
    <figure
      aria-describedby="home-connectivity-caption"
      aria-labelledby="home-connectivity-title"
      className="relative overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-soft"
    >
      <div className="flex min-h-12 items-center justify-between gap-4 border-b border-border-subtle px-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="size-1.5 rounded-pill bg-primary-500" />
          <p className="font-mono text-[0.625rem] leading-4 tracking-[0.12em] text-muted-ink uppercase sm:text-[0.6875rem]">
            {content.eyebrow}
          </p>
        </div>
        <span className="font-mono text-[0.625rem] tracking-[0.08em] text-muted-ink uppercase">
          Cena simbólica
        </span>
      </div>

      <div className="relative aspect-[6/7] w-full overflow-hidden sm:aspect-[16/9]">
        <ConnectivityScene />
      </div>

      <figcaption className="grid gap-4 border-t border-border-subtle px-5 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] sm:items-end sm:px-6 sm:py-6">
        <h2
          className="max-w-2xl text-xl leading-7 font-medium tracking-[-0.025em] text-ink sm:text-2xl sm:leading-8"
          id="home-connectivity-title"
        >
          {content.title}
        </h2>
        <p
          className="text-xs leading-5 text-muted-ink sm:text-right"
          id="home-connectivity-caption"
        >
          {content.caption}
        </p>
      </figcaption>
    </figure>
  );
}
