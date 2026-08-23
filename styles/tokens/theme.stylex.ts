import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  background: "var(--nexus-color-background)",
  surface: "var(--nexus-color-surface)",
  surfaceSubtle: "var(--nexus-color-surface-subtle)",
  surfaceRaised: "var(--nexus-color-surface-raised)",
  ink: "var(--nexus-color-ink)",
  mutedInk: "var(--nexus-color-muted-ink)",
  border: "var(--nexus-color-border)",
  borderSubtle: "var(--nexus-color-border-subtle)",
  borderStrong: "var(--nexus-color-border-strong)",
  primary50: "var(--nexus-color-primary-50)",
  primary100: "var(--nexus-color-primary-100)",
  primary500: "var(--nexus-color-primary-500)",
  primary600: "var(--nexus-color-primary-600)",
  primary700: "var(--nexus-color-primary-700)",
  accent: "var(--nexus-color-primary-600)",
  inkOnPrimary: "var(--nexus-color-ink-on-primary)",
  deepBlue: "var(--nexus-color-deep-blue)",
  deepBlueInk: "var(--nexus-color-deep-blue-ink)",
  deepBlueMuted: "var(--nexus-color-deep-blue-muted)",
  focusRing: "var(--nexus-color-focus-ring)",
});

export const radii = stylex.defineVars({
  sm: "var(--nexus-radius-sm)",
  md: "var(--nexus-radius-md)",
  lg: "var(--nexus-radius-lg)",
  pill: "var(--nexus-radius-pill)",
});

export const shadows = stylex.defineVars({
  soft: "var(--nexus-shadow-soft)",
  floating: "var(--nexus-shadow-floating)",
});
