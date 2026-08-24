import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  background: "var(--nexun-color-background)",
  surface: "var(--nexun-color-surface)",
  surfaceSubtle: "var(--nexun-color-surface-subtle)",
  surfaceRaised: "var(--nexun-color-surface-raised)",
  ink: "var(--nexun-color-ink)",
  mutedInk: "var(--nexun-color-muted-ink)",
  border: "var(--nexun-color-border)",
  borderSubtle: "var(--nexun-color-border-subtle)",
  borderStrong: "var(--nexun-color-border-strong)",
  primary50: "var(--nexun-color-primary-50)",
  primary100: "var(--nexun-color-primary-100)",
  primary500: "var(--nexun-color-primary-500)",
  primary600: "var(--nexun-color-primary-600)",
  primary700: "var(--nexun-color-primary-700)",
  accent: "var(--nexun-color-primary-600)",
  inkOnPrimary: "var(--nexun-color-ink-on-primary)",
  deepBlue: "var(--nexun-color-deep-blue)",
  deepBlueInk: "var(--nexun-color-deep-blue-ink)",
  deepBlueMuted: "var(--nexun-color-deep-blue-muted)",
  focusRing: "var(--nexun-color-focus-ring)",
});

export const radii = stylex.defineVars({
  sm: "var(--nexun-radius-sm)",
  md: "var(--nexun-radius-md)",
  lg: "var(--nexun-radius-lg)",
  pill: "var(--nexun-radius-pill)",
});

export const shadows = stylex.defineVars({
  soft: "var(--nexun-shadow-soft)",
  floating: "var(--nexun-shadow-floating)",
});
