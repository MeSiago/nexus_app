# Linear — Design System Extraction

**Status:** Working visual direction
**Scope:** Direct extraction of Linear’s public design language, interaction patterns, and implementation structure. This document is a design reference, not a page implementation.
**Reference reviewed:** [Linear homepage](https://linear.app/) and [Linear brand guidelines](https://linear.app/brand), reviewed August 23, 2026.

## 1. Design thesis

Linear’s visual system is built around a small number of precise decisions:

> Near-black canvas + editorial typography + quiet keylines + dense product proof + restrained motion.

The result feels calm, premium, technical, and exceptionally intentional. The design should be treated as a complete visual direction: dark surfaces, high-contrast type, compact controls, framed interface proof, and a disciplined monochrome palette with contextual color accents.

### Core principles

- Make hierarchy obvious before adding decoration.
- Use one visual idea per section.
- Prefer keylines and surface shifts over heavy shadows.
- Let typography do most of the expressive work.
- Use one contained contextual visual to support the section's atmosphere and
  subject without presenting unapproved product or operational proof.
- Keep controls compact, tactile, and visually quiet until interaction.
- Make desktop and mobile feel like intentional compositions, not resized versions of each other.

## 2. Brand and visual language

### Canvas and contrast

- Primary canvas: near-black, observed as `#08090A`.
- Primary text: near-white, observed as `#F7F8F8`.
- Secondary text: cool gray, observed as `#8A8F98`.
- Tertiary UI text: muted gray, observed around `#62666D`.
- Structural borders: low-opacity white or deep neutral gray.
- Large surfaces remain mostly monochrome; color is reserved for orientation, state, and emphasis.

### Brand guidance observed on Linear’s public brand page

- **Mercury White:** `#F4F5F8`
- **Nordic Gray:** `#222326`
- Monochrome wordmark usage is preferred.
- Assets are given generous space and are not cramped by neighboring elements.
- The brand color is described as a subtle desaturated blue, typically reserved for backgrounds or contextual color fields rather than used everywhere.

### Atmosphere

Linear uses atmosphere behind content rather than on top of it:

- Radial gradients and soft glows behind proof frames.
- Light-to-dark gradients used to transition into a product artifact.
- Small shine or bloom effects around framed UI.
- Very subtle blur and opacity changes.

Atmospheric effects should establish depth and focus. They should never reduce text contrast or compete with the main message.

### What makes the system feel like Linear

- Large, tightly set headings with slightly negative letter spacing.
- Small labels and metadata that create a technical editorial rhythm.
- Dark product frames with thin borders and nested surfaces.
- Full-pill primary actions with restrained shadows.
- Repeated section keylines that create a measured vertical cadence.
- Dense UI details presented inside generous page-level whitespace.

## 3. Reference measurements

These values were observed from the public homepage at desktop and mobile widths. Use them as starting tokens and adjust only when the composition requires it.

| Pattern | Desktop observation | Mobile observation |
| --- | ---: | ---: |
| Header height | ~73px | ~65px |
| H1 | 64px / 64px line-height / weight ~510 | 38px / 41.8px / weight ~510 |
| Section statement | Large editorial block | 24px / 31.92px line-height |
| Marketing body | 15px / 24px | 15px / 24px |
| Primary button | ~44px tall, fully rounded | ~44px tall, fully rounded |
| Desktop hero inset | ~40px | — |
| Mobile side inset | — | ~23–24px |
| Major frame radius | ~8–12px | ~8–12px |
| Compact control radius | 4–8px | 4–8px |

## 4. Token system

### 4.1 Color tokens

The color system is role-based. Components should consume roles rather than hard-coded values.

| Token | Value | Role |
| --- | --- | --- |
| `canvas` | `#08090A` | Global page background. |
| `surface` | `#0F1011` | Card and framed content surface. |
| `surface-raised` | `#161718` | Nested panel, input, or elevated control. |
| `surface-bright` | `#1C1C1D` | Selected state, chip, or prominent nested surface. |
| `text-primary` | `#F7F8F8` | Headings, primary labels, and important values. |
| `text-secondary` | `#D0D6E0` | Supporting text inside product UI. |
| `text-muted` | `#8A8F98` | Marketing descriptions and secondary metadata. |
| `text-tertiary` | `#62666D` | Low-emphasis navigation and inactive UI. |
| `border-subtle` | `rgba(255,255,255,0.08)` | Quiet container boundary and section keyline. |
| `border-strong` | `#23252A` | More legible frame or control boundary. |
| `border-inner` | `rgba(255,255,255,0.05)` | Nested panel separation. |
| `white-soft` | `#F4F5F8` | Light brand surface or inverted action. |
| `gray-brand` | `#222326` | Light-mode brand surface or dark neutral field. |
| `accent-contextual` | Contextual blue, purple, yellow, or green | Status, product state, data visualization, or focal emphasis. |

### Color rules

- Use `canvas` as the dominant background for the visual system.
- Keep most content monochrome; color should communicate state or focus.
- Use contextual accent color sparingly and never as a replacement for hierarchy.
- Use `text-primary` for headings and `text-muted` for descriptions; do not depend on opacity alone to create hierarchy.
- Use borders and surface changes before adding shadows.
- For light or inverted sections, use `white-soft` and `gray-brand` as the starting brand pair.
- Verify contrast separately for marketing copy, compact UI text, disabled states, and code-like content.

### 4.2 Typography tokens

Linear’s observed stack begins with `Inter Variable`, followed by display/system fallbacks. Product UI also uses a monospaced face for code and technical values.

```text
font-sans: "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont,
           "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
           "Helvetica Neue", sans-serif

font-mono: "Berkeley Mono", ui-monospace, "SF Mono", Menlo, monospace
```

| Role | Size | Line-height | Weight | Tracking |
| --- | ---: | ---: | ---: | ---: |
| Display / H1 desktop | `64px` | `64px` | ~`510` | ~`-1.4px` |
| Display / H1 mobile | `38px` | `41.8px` | ~`510` | ~`-0.84px` |
| Section statement | `40–48px` | `1.05–1.15` | `500–510` | Slightly negative |
| H2 / compact section | `24px` | `31.92px` | ~`510` | ~`-0.29px` |
| Body / marketing | `15px` | `24px` | `400` | ~`-0.17px` |
| Product UI body | `13–14px` | `19.5–21px` | `400–510` | Neutral to slightly negative |
| Metadata / labels | `12–13px` | `18–19.5px` | `400–510` | Neutral |
| Code | `12–14px` | `21px` | `400` | Slightly negative |

### Type behavior

- Headings are short, declarative, and often split at a meaningful phrase.
- Large type is aligned to the same page inset as the product proof below it.
- Body measure stays narrow enough to read quickly.
- Labels, captions, and small metadata create rhythm around larger statements.
- Avoid using too many weights; contrast size, color, and spacing first.
- Use mono only when content is genuinely technical.

### 4.3 Spacing tokens

```text
space-1    4px
space-2    8px
space-3   12px
space-4   16px
space-5   24px
space-6   32px
space-7   48px
space-8   64px
space-9   96px
space-10 128px
```

Recommended usage:

- `4–12px`: icon gaps, compact labels, tags, and control internals.
- `16–24px`: component padding and related text spacing.
- `32–48px`: card groups and local section separation.
- `64–96px`: section internals and mobile vertical rhythm.
- `128px`: large desktop section separation and hero breathing room.

### 4.4 Shape and elevation tokens

```text
radius-sm      4px       code, small controls, technical chips
radius-md      6–8px     cards, inputs, compact panels
radius-lg      12px      hero proof frames, large containers
radius-pill    9999px    buttons, tags, status pills

shadow-soft    restrained layered shadow for floating controls
glow-soft      low-opacity radial light behind proof objects
```

Use one clear border or shadow treatment per surface. Avoid combining heavy borders, multiple shadows, and bright glows on ordinary content.

## 5. Layout system

### Global geometry

- Desktop page inset: approximately `40px` at the hero edge.
- Mobile page inset: approximately `24px`.
- Recommended wide content max-width: `1200–1240px`.
- Keep text blocks around `32–60ch` depending on the role.
- Use full-width 1px keylines where a major section begins or ends.
- Align headings, descriptions, links, and proof frames to a shared container grid.
- Keep page-level whitespace generous even when the proof object is dense.

### Section rhythm

Linear’s homepage follows a repeatable cadence:

1. Short navigation/header.
2. Large positioning statement.
3. Supporting description and directional link.
4. Framed contextual or atmospheric visual.
5. Keyline or visual divider.
6. Short worldview/value statement.
7. Repeatable feature sections with one artifact each.
8. Social proof or changelog-style content.
9. High-contrast closing CTA.
10. Grouped footer navigation.

Each section should have one dominant content object and one clear next action.

### Responsive composition

- Desktop navigation collapses to logo, authentication/action links, and a menu control.
- Three-up feature layouts become a horizontal rail or a vertical stack.
- Dense proof frames use a mobile-specific crop or simplified state when the full UI becomes unreadable.
- Maintain the mobile side inset rather than squeezing content to the viewport edge.
- Keep the sequence of meaning stable: headline → explanation → proof → next action.
- Do not preserve desktop density when it damages legibility.

## 6. Component patterns

### 6.1 Global header

Structure:

- Wordmark or logo at the left.
- Primary navigation in the center/right on desktop.
- Secondary links such as login or documentation.
- One prominent pill action.
- Compact menu control on mobile.

Behavior:

- Stable height and consistent horizontal alignment.
- Low-contrast bottom keyline or divider.
- Navigation groups may use popovers, but the trigger must be keyboard accessible.
- The active state should be communicated with color, weight, or surface—not hover only.

### 6.2 Hero block

Structure:

1. Optional small context label.
2. One large H1.
3. One short supporting paragraph.
4. One directional link or primary pill action.
5. One proof frame or atmospheric visual.

The hero should not contain multiple competing messages. The heading owns the first viewport; the proof frame validates it.

### 6.3 Proof frame

The proof frame is the central Linear pattern: a contained, product-like artifact that demonstrates the promise.

Construction:

- Gradient or glow backdrop.
- Framed outer container with a thin border.
- Dark nested surface.
- Clear internal toolbar or navigation.
- Dense but legible content area.
- One focal state: issue, project, code diff, chart, agent conversation, or update.
- Optional shine/bloom layer around the frame.

Rules:

- Reserve dimensions before the content loads.
- Use one focal state instead of showing every feature at once.
- Keep text inside the proof frame shorter and smaller than the surrounding marketing copy.
- Use captions or supporting labels outside the frame when the meaning is not self-evident.

For Nexus, this pattern must not be interpreted as a technical diagram or an
operational representation. Use contextual institutional illustration without
implying topology, coverage, physical infrastructure, operational presence,
status, or availability.

Each Nexus frame may use no more than one slow symbolic loop. The loop must be
purely decorative, remain subordinate to the content, and resolve to an
intentional static composition when reduced motion is requested.

### 6.4 Feature/value rail

The reference frequently groups three related ideas into a rail:

- Small label.
- Short statement.
- One-sentence explanation.
- Optional visual or state marker.

Use equal card geometry and consistent vertical alignment. On mobile, cards should become a readable horizontal rail or a stack—not a compressed three-column grid.

### 6.5 Numbered product section

Use a numbered label such as `1.0`, `2.0`, or `3.0` to create an editorial product narrative.

Recommended anatomy:

- Section heading.
- Short description.
- Numbered directional link.
- Large framed product artifact.
- Optional supporting feature chips or sub-navigation.

The number is a navigation cue and storytelling device, not a product metric.

### 6.6 Compact UI primitives

#### Buttons

- Primary: full pill, light/inverted surface, dark text, subtle layered shadow.
- Secondary: dark surface with soft border and light text.
- Compact control: 28–36px high, 4–8px radius, low contrast until interaction.
- Icon-only: circular or square hit area with a clear accessible label.

#### Tags and status pills

- Use small, dense text with a pill or compact rounded shape.
- Keep background contrast subtle.
- Reserve stronger color for meaningful state.

#### Cards and panels

- Use `surface` plus `border-subtle` as the default.
- Use `surface-raised` for nested content.
- Use `radius-md` for ordinary cards and `radius-lg` for major proof frames.
- Keep card shadows restrained or absent.

#### Code and technical content

- Use the mono face only for code, branch names, file names, IDs, and other technical strings.
- Place code in a slightly raised surface with a small radius.
- Use line-height and contrast that remain legible at compact sizes.

### 6.7 Testimonial and changelog surfaces

Linear uses highly composed quote cards, customer stories, and changelog entries as editorial proof.

- Use large quote text with quiet attribution.
- Give each card a distinct but controlled visual field.
- Keep attribution smaller and visually subordinate.
- Use dates, labels, and categories as metadata.
- Avoid making every card look like a promotional banner.

### 6.8 Closing CTA

- Use a clean, high-contrast section with minimal content.
- Keep one primary action and one quieter secondary action.
- Use large type and generous vertical space.
- Full-pill buttons work well here because the surrounding composition is quiet.

### 6.9 Footer

- Group links into clear columns.
- Use concise section labels.
- Keep the brand mark separate from link groups.
- Include legal and social links in a quieter final row.
- Maintain the same keyline and surface language as the rest of the page.

## 7. Motion and interaction

Motion should make the interface feel responsive and alive without becoming a spectacle.

### Motion tokens

```text
duration-fast    120–180ms     hover, focus-adjacent surface changes
duration-base    240–320ms     component transitions
duration-slow    420–600ms     non-critical reveal or section entrance
ease-standard    cubic-bezier(0.2, 0.65, 0.3, 1)
```

### Recommended behavior

- Buttons shift surface, color, or shadow subtly on hover.
- Links can move an arrow or underline by a small amount.
- Proof frames may use a slow ambient glow or shine.
- Section reveals use restrained opacity and translate transitions.
- Focus appears immediately and does not depend on animation.
- Hover movement should remain around `2px` or less.

### Reduced motion

- Respect `prefers-reduced-motion: reduce` globally.
- Disable ambient motion when reduced motion is requested.
- Replace reveals with immediate visibility.
- Do not use animation to communicate success, failure, navigation, or critical state.
- Prevent layout shift by reserving media and proof-frame dimensions.

## 8. Accessibility requirements

- Provide a skip link and one clear H1 per page.
- Keep heading order logical and semantic.
- Use links for navigation and buttons for actions.
- Give every icon-only control an accessible name.
- Keep keyboard focus visible on both dark canvas and raised surfaces.
- Ensure popovers, menus, dialogs, and carousels are keyboard navigable.
- Do not make horizontal rails trap focus.
- Verify contrast for muted text, borders, labels, code, and disabled states.
- Provide meaningful alternative text for informative visuals and empty alt text for decoration.
- Use native elements or Radix primitives where they improve interaction semantics.

## 9. Implementation structure

### Styling ownership

Keep one primary owner for each styling concern:

- Tailwind CSS: page composition, grid, responsive layout, spacing, and simple utilities.
- StyleX: reusable static styles, design-token consumption, variants, and interaction states.
- Emotion: only runtime-computed styles, third-party adaptation, or cases StyleX and Tailwind cannot express cleanly.

Do not duplicate the same rule across all three styling systems.

### Suggested token files

```text
styles/tokens/
  color.stylex.ts
  type.stylex.ts
  space.stylex.ts
  radius.stylex.ts
  motion.stylex.ts
```

### Suggested reusable components

```text
components/layout/
  site-header
  site-footer
  page-shell

components/ui/primitives/
  button
  link
  surface
  keyline
  icon-button
  status-pill

components/ui/compositions/
  hero-block
  proof-frame
  feature-rail
  numbered-section
  quote-card
  changelog-card
  cta-band
```

### Content and visual proof

- Keep page copy in typed content modules rather than large JSX files.
- Treat product proof frames as reusable compositions with explicit data contracts.
- Use approved assets and stable dimensions.
- Keep decorative effects in the component that owns the proof frame.
- Do not let content components own global tokens.

## 10. Build checklist

Before considering an implementation complete:

- Confirm the page uses the dark Linear canvas and role-based surface tokens.
- Confirm the header, hero, proof frame, section keylines, CTA, and footer share one alignment system.
- Confirm the display type scale is intentional at desktop and mobile widths.
- Confirm compact controls have hover, active, focus, and disabled states.
- Confirm proof frames remain legible and do not create layout shift.
- Confirm motion respects reduced-motion preferences.
- Confirm all interactive elements are keyboard accessible and labelled.
- Confirm muted text and borders meet contrast expectations.
- Confirm no one-off visual values bypass the token system without a reason.

## 11. Final design direction

Implement the Linear system as a cohesive whole:

1. Dark canvas and quiet monochrome surfaces.
2. Large, tightly set editorial typography.
3. Compact header and pill-shaped actions.
4. Thin keylines and restrained elevation.
5. One framed product artifact per major idea.
6. Numbered sections and small metadata for rhythm.
7. Contextual color only where it explains state or emphasis.
8. Restrained motion with strong accessibility defaults.

The design should feel polished because of its consistency, spacing, and detail—not because every section has a new visual effect.
