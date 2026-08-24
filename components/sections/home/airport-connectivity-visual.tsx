import type { CSSProperties } from "react";

import type { HomePageContent } from "@/types/content";

import styles from "./airport-connectivity-visual.module.css";

const destinations = [
  { x: 182, y: 466, delay: "0s" },
  { x: 365, y: 381, delay: "-0.7s" },
  { x: 554, y: 303, delay: "-1.4s" },
  { x: 742, y: 222, delay: "-2.1s" },
  { x: 925, y: 142, delay: "-2.8s" },
] as const;

const routePath = "M182 466 C350 390 492 329 632 270 S829 180 925 142";

function Destination({ delay, x, y }: (typeof destinations)[number]) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle
        className={styles.pulse}
        fill="none"
        r="16"
        stroke="var(--nexun-color-primary-500)"
        strokeWidth="1.5"
        style={{ "--pulse-delay": delay } as CSSProperties}
      />
      <circle
        fill="var(--nexun-color-surface)"
        r="6"
        stroke="var(--nexun-color-primary-500)"
        strokeOpacity="0.42"
        strokeWidth="1.5"
      />
      <circle fill="var(--nexun-color-primary-500)" r="2.6" />
    </g>
  );
}

function Aircraft() {
  return (
    <g className={styles.aircraft}>
      <circle
        fill="var(--nexun-color-surface)"
        fillOpacity="0.96"
        r="18"
        stroke="var(--nexun-color-primary-500)"
        strokeOpacity="0.22"
        strokeWidth="1.2"
      />
      <g transform="translate(-12 -12) rotate(45 12 12)">
        <path
          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 20.5 3s-3-.5-4.5 1L12.5 7.5 4.3 5.7c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3l5.3 3.9-2 2-2.6-.4c-.3 0-.6.1-.8.4l-.2.3c-.2.4-.1.8.2 1.1l3.2 2.7 2.7 3.2c.3.3.7.4 1.1.2l.3-.2c.3-.2.4-.5.4-.8l-.4-2.6 2-2 3.9 5.3c.3.4.8.5 1.3.3l.5-.2c.5-.3.7-.7.6-1.2Z"
          fill="var(--nexun-color-ink)"
          stroke="var(--nexun-color-ink)"
          strokeLinejoin="round"
          strokeWidth="0.35"
        />
      </g>
    </g>
  );
}

function ConnectivityScene() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1100 620"
    >
      <defs>
        <radialGradient id="connectivity-glow" cx="64%" cy="46%" r="58%">
          <stop offset="0" stopColor="var(--nexun-color-primary-500)" stopOpacity="0.13" />
          <stop offset="0.58" stopColor="var(--nexun-color-primary-500)" stopOpacity="0.035" />
          <stop offset="1" stopColor="var(--nexun-color-surface)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="map-fill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--nexun-color-surface-raised)" />
          <stop offset="1" stopColor="var(--nexun-color-primary-50)" />
        </linearGradient>
        <linearGradient id="route-color" x1="0" x2="1">
          <stop offset="0" stopColor="var(--nexun-color-primary-500)" stopOpacity="0.26" />
          <stop offset="0.55" stopColor="var(--nexun-color-primary-500)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--nexun-color-primary-500)" stopOpacity="0.32" />
        </linearGradient>
        <pattern id="city-grid" height="34" patternUnits="userSpaceOnUse" width="34">
          <path d="M0 8H34M8 0V34M23 0V34M0 24H34" fill="none" stroke="var(--nexun-color-border)" strokeOpacity="0.42" strokeWidth="0.8" />
          <rect fill="var(--nexun-color-primary-500)" fillOpacity="0.055" height="10" width="9" x="11" y="11" />
        </pattern>
      </defs>

      <rect fill="var(--nexun-color-surface)" height="620" width="1100" />
      <rect fill="url(#connectivity-glow)" height="620" width="1100" />

      <g className={styles.topography} fill="none" stroke="var(--nexun-color-border-subtle)">
        <path d="M-40 130C130 56 284 85 414 194S706 260 1140 86" />
        <path d="M-28 483C136 390 267 398 388 474S725 566 1130 394" />
        <path d="M85-18C176 120 164 242 81 353S65 552 183 650" />
      </g>

      <rect fill="url(#map-fill)" fillOpacity="0.72" height="620" width="1100" />
      <rect fill="url(#city-grid)" height="620" width="1100" />

      <g fill="none" stroke="var(--nexun-color-primary-500)" strokeOpacity="0.1" strokeWidth="12">
        <path d="M-30 174 182 212 354 186 524 240 718 198 1135 277" />
        <path d="M-18 430 166 395 337 439 526 388 738 424 1128 352" />
        <path d="M218-30 248 130 214 286 282 650" />
        <path d="M815-22 768 156 824 321 786 650" />
      </g>

      <g fill="var(--nexun-color-surface)" fillOpacity="0.78" stroke="var(--nexun-color-border-subtle)">
        <rect height="58" rx="5" width="92" x="92" y="92" />
        <rect height="42" rx="5" width="68" x="330" y="252" />
        <rect height="72" rx="5" width="56" x="468" y="86" />
        <rect height="48" rx="5" width="104" x="612" y="446" />
        <rect height="66" rx="5" width="76" x="864" y="322" />
        <rect height="43" rx="5" width="88" x="956" y="82" />
      </g>

      <path d={routePath} fill="none" stroke="var(--nexun-color-surface)" strokeOpacity="0.9" strokeWidth="5" />
      <path className={styles.route} d={routePath} fill="none" stroke="url(#route-color)" strokeDasharray="5 9" strokeLinecap="round" strokeWidth="2" />
      <path d="M365 381C446 455 554 434 632 270" fill="none" stroke="var(--nexun-color-primary-500)" strokeDasharray="3 8" strokeOpacity="0.28" strokeWidth="1.5" />

      {destinations.map((destination) => <Destination key={`${destination.x}-${destination.y}`} {...destination} />)}
      <Aircraft />

      <g transform="translate(884 554)">
        <circle fill="var(--nexun-color-primary-500)" r="3" />
        <text fill="var(--nexun-color-muted-ink)" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.4" x="12" y="4">MAPA · CENA CONCEITUAL</text>
      </g>
    </svg>
  );
}

export function AirportConnectivityVisual({ content }: { content: HomePageContent["contextVisual"] }) {
  return (
    <figure aria-describedby="home-connectivity-caption" aria-labelledby="home-connectivity-title" className="relative overflow-hidden rounded-lg border border-border-subtle bg-surface shadow-soft">
      <div className="flex min-h-12 items-center justify-between gap-4 border-b border-border-subtle px-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="size-1.5 rounded-pill bg-primary-500" />
          <p className="font-mono text-[0.625rem] leading-4 tracking-[0.12em] text-muted-ink uppercase sm:text-[0.6875rem]">{content.eyebrow}</p>
        </div>
        <span className="font-mono text-[0.625rem] tracking-[0.08em] text-muted-ink uppercase">Cena simbólica</span>
      </div>

      <div className="relative aspect-[6/7] w-full overflow-hidden sm:aspect-[16/9]">
        <ConnectivityScene />
      </div>

      <figcaption className="grid gap-4 border-t border-border-subtle px-5 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] sm:items-end sm:px-6 sm:py-6">
        <h2 className="max-w-2xl text-xl leading-7 font-medium tracking-[-0.025em] text-ink sm:text-2xl sm:leading-8" id="home-connectivity-title">{content.title}</h2>
        <p className="text-xs leading-5 text-muted-ink sm:text-right" id="home-connectivity-caption">{content.caption}</p>
      </figcaption>
    </figure>
  );
}
