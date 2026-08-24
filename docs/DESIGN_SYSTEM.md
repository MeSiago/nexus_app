# Nexus design system

This is the implementation guide for the design direction in
`docs/linear-design-extraction.md`. It translates the reference pattern into a
Nexus-specific system; it does not reproduce Linear's identity or assets.

## Visual contract

- Use a near-black canvas, quiet dark surfaces, one-pixel keylines, and restrained
  elevation.
- Reserve desaturated blue for contextual orientation, focus, and purposeful
  technical emphasis. Keep body copy, primary actions, and large areas monochrome.
- Give each route one clear H1 and one primary idea. Pair a concise message
  with one contextual institutional visual when it improves comprehension.
- Keep public copy in Brazilian Portuguese and keep unresolved business facts
  clearly provisional.
- Prefer responsive composition changes over simply shrinking desktop layouts.

## Token ownership

The literal values live in `styles/tokens/tokens.css`. The same CSS variables
are exposed to both styling systems:

- Tailwind owns page composition, layout, responsive behavior, spacing, and
  small one-off utilities. Use semantic classes such as `bg-background`,
  `text-muted-ink`, `border-border-subtle`, and `text-primary-600`.
- StyleX owns reusable component styling, variants, and interaction states.
  Reuse the token aliases from `styles/tokens/theme.stylex.ts` rather than
  adding component-specific colors.
- Emotion remains reserved for runtime-computed or third-party styles.

The approved scale is intentionally small:

| Category | Tokens |
| --- | --- |
| Spacing | `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px` |
| Radius | `sm 4px`, `md 8px`, `lg 12px`, `pill 9999px` |
| Contextual / inverted action | `primary-50 / 100 / 500 / 600 / 700` |
| Motion | `fast 160ms`, `standard 280ms`, `reveal 360ms`, `ambient 11s` |

## Component rules

Use `components/ui/primitives` for semantic controls and `components/ui/compositions`
for repeated Nexus patterns. Keep route composition in `components/sections`.

- Links navigate; buttons act.
- All icon-only controls need an accessible name.
- Every interactive state needs visible focus, hover, active, and disabled
  treatment where applicable.
- Use a dark contextual institutional surface only as a contained visual frame,
  with its own light text roles.
- Do not use technical diagrams or topology unless every represented fact is
  explicitly approved. Contextual visuals must not imply coverage, physical
  infrastructure, operational presence, status, or availability.
- A contextual visual may contain at most one slow, purely decorative ambient
  microanimation. It must never communicate coverage, presence, availability,
  operational status, or any other business fact, and it must provide an
  intentional static state for `prefers-reduced-motion`.
- Do not add metrics, client logos, SLAs, testimonials, coverage, or status
  claims without approved content.
- Contact routes may be linked, but no form or contact action may imply data
  was submitted until a real destination exists.

## Starter composition patterns

- `HeroBlock`: positioning statement, short support copy, primary route action,
  and one contextual institutional frame.
- `ContextVisualFrame`: a stable contextual institutional visual with a caption
  and meaningful label.
- `ValueRail`: up to three concise differentiators, stacked on mobile.
- `ServiceSection`: numbered service explanation with a directional link.
- `CtaBand`: one high-contrast route action with no invented outcome.

When a component requires a new visual role, add it to the token layer first,
then expose it to Tailwind and StyleX. Avoid arbitrary values in page markup
when a semantic token already exists.
