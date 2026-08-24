# Nexun — Development Rules

## General

1. Keep the implementation proportional to a four-route institutional website.
2. Do not add dependencies, infrastructure, abstractions, or state without a demonstrated requirement.
3. Use English for development artifacts and Brazilian Portuguese for everything visible to visitors.
4. Treat `docs/product-foundation.md` and `SOURCE_OF_TRUTH.md` as required context before changing scope or architecture.
5. Keep approved facts separate from provisional copy. Never turn a placeholder into an implied business claim.

## Next.js and TypeScript

1. Use the App Router and keep public URL segments in Portuguese.
2. Prefer Server Components. Add `"use client"` only at the narrowest interaction boundary.
3. Keep page entry files small: compose sections and provide route metadata there.
4. Use strict TypeScript. Avoid `any`; model shared content and component contracts explicitly.
5. Keep framework-independent helpers in `lib` and shared types in `types`.
6. Do not create API routes, server actions, middleware, or persistence until a concrete feature requires them.

## Components

1. Put shared site chrome in `components/layout`.
2. Put low-level accessible elements and Radix wrappers in `components/ui/primitives`.
3. Put reusable, Nexun-specific UI patterns in `components/ui/compositions`.
4. Put composed page sections in the matching folder under `components/sections`.
5. Create a shared component only after it represents a stable repeated pattern, not merely similar markup.
6. Preserve semantic HTML first; use Radix UI when it adds accessible interactive behavior.

## Styling and design system

1. Design tokens in `styles/tokens` are the canonical values for color, typography, spacing, radii, shadows, layers, and motion.
2. Tailwind CSS is the default for layout, responsive composition, spacing, and simple utilities.
3. StyleX is the default for reusable static component styling, variants, and stateful style composition.
4. Emotion is allowed for justified runtime-computed styles and third-party adaptations only.
5. A component must not duplicate the same CSS responsibility across Tailwind, StyleX, and Emotion.
6. Do not introduce arbitrary visual values when an appropriate token exists.
7. Check every page at mobile and desktop widths. The visual hierarchy, rhythm, alignment, and interactive states must be intentionally designed at both sizes.
8. Support keyboard focus, hover, active, disabled, and reduced-motion states where applicable.
9. Avoid decorative complexity that weakens clarity, performance, or the restrained institutional tone.

## Content and assets

1. Store route copy in `content/pages` and site-wide content in `content/shared`.
2. Keep content typed and separate from presentation components.
3. Use clear provisional markers for unresolved copy; do not publish invented metrics or claims.
4. Put static assets under `public/assets` by type and use descriptive, stable filenames.
5. Optimize images and fonts before use. Do not add an asset without a clear role in the experience.
6. Public labels, metadata, validation, alternative text, and accessible names must be in Brazilian Portuguese.

## Accessibility and performance

1. Every route needs one clear page heading and a logical heading hierarchy.
2. All interactive controls must work by keyboard and expose an accessible name.
3. Use links for navigation and buttons for actions.
4. Maintain visible focus and sufficient color contrast.
5. Respect `prefers-reduced-motion` and avoid interaction-critical animation.
6. Prefer native platform behavior and server-rendered output over unnecessary JavaScript.
7. Prevent layout shift by reserving media dimensions and loading non-critical assets appropriately.

## Contact behavior

1. Do not invent a WhatsApp number, recipient, or prefilled message.
2. Do not submit, persist, email, or log contact data until a destination and privacy process are approved.
3. Do not show a success state for an action that did not occur.
4. When contact behavior is approved, isolate the integration so the institutional pages remain independent of a persistent backend.

## Validation

1. Each route must render independently and preserve shared navigation and footer behavior.
2. Test the critical responsive layouts and navigation flow.
3. Add visual-regression coverage for design-critical pages and states once the visual system stabilizes.
4. Verify accessible names, focus order, contrast, and reduced-motion behavior before release.
5. A change is complete only when its implementation, responsive behavior, accessibility, content state, and relevant documentation agree.

## Prohibited without an approved requirement

- Authentication, accounts, permissions, payments, or dashboards.
- Database, CMS, CRM, custom REST API, or general-purpose backend.
- Active form submission or analytics/advertising tracking.
- Unverified testimonials, clients, certifications, metrics, or operational claims.
- New routes or navigation items outside the defined information architecture.
- A fourth styling system or a component library that duplicates Radix UI.
