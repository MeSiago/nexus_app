# Nexus — Linear Design Pattern Extraction

**Status:** Working design direction  
**Scope:** Pattern extraction only; this document does not define a page implementation or final Nexus brand identity.  
**Reference reviewed:** [Linear homepage](https://linear.app/) and [Linear brand guidelines](https://linear.app/brand), reviewed August 23, 2026.

## 1. Executive direction

Use Linear as a reference for restraint, hierarchy, and product-quality interaction—not as a visual identity to reproduce.

The transferable design idea is:

> Quiet chrome + editorial typography + precise keylines + one convincing visual proof per section.

For Nexus, this should become a premium institutional system for a Brazilian IT service provider. It should feel reliable, operational, and composed. The experience can borrow Linear’s rhythm and craft while retaining a light, cool-neutral, understated foundation with blue as the primary brand color.

### Keep

- Strong hierarchy with very few competing visual ideas.
- Short, direct copy blocks with generous breathing room.
- A consistent 1px structural keyline used to separate sections and frames.
- Proof-oriented visuals that explain the service instead of decorative stock imagery.
- Compact, high-quality controls with visible hover, focus, and pressed states.
- Responsive layouts that change composition, not merely scale down.

### Do not copy

- Linear logos, wordmarks, icons, proprietary illustrations, screenshots, or brand assets.
- Product-dashboard content, fake metrics, invented customer quotes, or invented operational claims.
- Linear’s exact colors as Nexus brand tokens.
- A SaaS navigation model that introduces routes or product concepts outside the approved Nexus information architecture.

## 2. Reference observations

These are observations from the public reference, not approved Nexus tokens.

### Visual language

- Near-black canvas with near-white primary type and cool gray secondary type.
- Large editorial headline, usually left aligned, with tight line-height and slightly negative tracking.
- Thin gray borders and subtle surface changes create structure without heavy shadows.
- Rounded corners are restrained: small radii for controls, medium radii for cards, full pills for primary actions and tags.
- Gradient light, glow, and soft blur are used as atmosphere behind a proof object; they are not used as the main content layer.
- Product UI is shown inside framed surfaces with a dark nested palette, clear hierarchy, and dense but legible detail.

### Observed reference measurements

| Pattern | Desktop observation | Mobile observation | Nexus implication |
| --- | ---: | ---: | --- |
| Header height | ~73px | ~65px | Keep site chrome compact and stable. |
| H1 | 64px / 64px line-height / weight ~510 | 38px / 41.8px / weight ~510 | Use a display scale that feels editorial, not corporate-default. |
| H2 | Large section statements | 24px / 31.92px | Keep section headings short and let the visual carry detail. |
| Body copy | 15px / 24px in marketing sections | 15px / 24px | Use readable short measure; avoid dense paragraphs. |
| Primary action | ~44px tall, fully rounded | ~44px tall, fully rounded | Make the main contact action tactile and easy to find. |
| Content inset | ~40px at the desktop hero edge | ~23–24px | Use 24px as the mobile safety inset and widen progressively. |
| Major frame radius | ~8–12px | ~8–12px | Reserve larger radii for visual proof and CTA containers. |

### Observed reference roles

The reference uses role-based values that can be translated into Nexus tokens:

| Role | Reference observation | Nexus treatment |
| --- | --- | --- |
| Canvas | `rgb(8, 9, 10)` | Keep Nexus’s current cool-neutral light canvas by default; allow dark proof modules only when useful. |
| Primary text | `rgb(247, 248, 248)` | Map to `ink` in the current Nexus theme. |
| Muted text | `rgb(138, 143, 152)` | Map to `mutedInk`; verify contrast on the cool-neutral canvas. |
| Structural border | `rgba(255,255,255,.08)` / `#23252a` | Map to the current `border` token and add a weaker keyline role if needed. |
| Raised surface | `#0f1011` to `#161718` | Map to `surface` / `surfaceSubtle`; do not add surfaces without a content reason. |
| Accent | Controlled blue/purple/yellow moments | Replace the current green accent direction with Nexus blue as the primary action, link, focus, and technical-emphasis color. |

## 3. Design principles for Nexus

### 3.1 Signal over decoration

Every section should answer one question: who Nexus serves, what it provides, why it can be trusted, or how to begin a conversation. Remove visual effects that do not improve that answer.

### 3.2 Editorial first, operational second

Lead with a concise institutional statement. Follow it with a concrete visual explanation of links, installation, maintenance, or support. The visual should make the service easier to understand, not simulate a logged-in product.

### 3.3 One hero, one proof

The hero should have one primary headline, one supporting paragraph, one primary contact direction, and one proof object. Avoid hero carousels, multiple competing CTAs, or a collage of unrelated claims.

### 3.4 Precision creates trust

Use consistent alignment, deliberate spacing, clear status language, and stable navigation. Reliability should be felt through the interface before it is stated in copy.

### 3.5 Calm density

Nexus can use Linear’s dense framed panels for technical explanation, but pair them with open space and short copy. Never let a technical illustration make the page feel like an operations console.

### 3.6 Progressive disclosure

Show the essential institutional message first. Put deeper technical detail, service steps, and supporting notes in secondary sections or expandable patterns only when the approved content exists.

## 4. Layout system

### Global geometry

- Mobile safety inset: `24px`.
- Wide desktop inset: `40px` minimum; use a centered max-width container for long pages.
- Recommended content max-width: `1200–1240px`.
- Primary text measure: approximately `32–60ch` depending on role.
- Use full-width keylines when a section changes; keep content aligned to the same container grid.
- Avoid edge-to-edge text. Edge-to-edge media is acceptable when the media has a clear role.

### Spacing scale

Use a small, predictable scale rather than one-off values:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

Recommended meaning:

- `4–12`: icon gaps, tag padding, compact control internals.
- `16–24`: component padding and related copy spacing.
- `32–48`: card groups and small section separation.
- `64–96`: section internals and mobile vertical rhythm.
- `128`: large desktop section separation or hero breathing room.

### Responsive composition

Desktop should use composition and proximity to create hierarchy. Mobile should preserve the same order of meaning while changing the layout:

- Collapse full navigation to logo, login/contact action, and a menu control.
- Convert three-up feature rows into a horizontal rail or stacked cards.
- Keep the proof object wider than the text only when it remains legible; otherwise crop, simplify, or use a purposeful mobile variant.
- Maintain 24px side padding and at least 32px between unrelated content groups.
- Do not preserve desktop density if it causes unreadable technical content.

## 5. Typography system

The current Nexus token foundation is light and cool-neutral. Keep the font family flexible until the brand typography is approved, but use a deliberate variable sans or high-quality system sans rather than browser-default Arial if a licensed/self-hosted choice becomes available.

### Type roles

| Role | Starting size | Line-height | Weight | Use |
| --- | ---: | ---: | ---: | --- |
| Display / H1 desktop | `56–64px` | `0.98–1.05` | `500–600` | One positioning statement per route. |
| Display / H1 mobile | `36–40px` | `1.05–1.12` | `500–600` | Preserve impact without creating a wall of text. |
| Section statement | `28–40px` | `1.1–1.2` | `500–600` | Major section promise or service idea. |
| H2 / compact section | `24–30px` | `1.25–1.35` | `500–600` | Card and route-level subsections. |
| Body | `15–16px` | `1.5–1.6` | `400` | Supporting copy and descriptions. |
| Label / metadata | `12–13px` | `1.4–1.5` | `500–600` | Eyebrows, status, navigation, captions. |
| Technical / mono | `12–14px` | `1.5` | `400–500` | Only for approved technical values or diagrams. |

### Type behavior

- Use slightly negative tracking only for large headings; keep body copy comfortable.
- Break headings intentionally at meaningful phrases, not arbitrary character counts.
- Keep headings to one or two short lines where possible.
- Use muted color for supporting copy, never reduced opacity as the only contrast strategy.
- Keep public copy in Brazilian Portuguese, even when the design reference is English.

## 6. Color and surface roles

Blue is now the explicit primary color direction for Nexus as an IT service provider. The current codebase provides a cool-neutral light baseline, and blue replaces the prior green accent direction:

- Background: `#f6f8fb`
- Surface: `#ffffff`
- Ink: `#162238`
- Muted ink: `#586579`
- Border: `#d9e0e9`
- Accent: currently `#1d685b` in code; replace with the working blue primary below.

Treat these as role tokens, not literal page decoration. Extend them only when a real component requires a distinct role.

### Working blue primary palette

These values establish the current design direction and should remain easy to update after logo, typography, and brand review:

| Token | Value | Use |
| --- | --- | --- |
| `primary-700` | `#1D4ED8` | Hover, pressed, and high-emphasis blue on light surfaces. |
| `primary-600` | `#2563EB` | Default primary action, active link, and key interactive state. |
| `primary-500` | `#3B82F6` | Supporting accent, diagrams, and restrained technical highlights. |
| `primary-100` | `#DBEAFE` | Soft blue surface, selected state, and informational background. |
| `primary-50` | `#EFF6FF` | Very light callout or background tint. |
| `inkOnPrimary` | `#FFFFFF` | Text and icons placed on `primary-600` or `primary-700`. |
| `deepBlue` | `#0B1F3A` | Optional dark proof surface or technical illustration background. |

### Blue usage rules

- Blue is the primary brand signal for actions, links, focus, active navigation, and approved technical diagrams.
- Use `primary-600` as the default interactive blue and `primary-700` for hover or pressed states.
- Keep body text and large decorative areas neutral; do not turn every heading blue.
- Pair blue with the cool-neutral canvas and verify contrast for every text size.
- Use `primary-100` and `primary-50` as quiet support surfaces, not as repeated card decoration.
- Use `deepBlue` only inside purposeful proof frames or technical compositions so the overall site remains calm.
- Do not use blue to imply uptime, SLA performance, availability, or any other unapproved operational claim.

### Recommended additions

```text
surfaceSubtle   light tint for secondary cards or quiet bands
surfaceRaised   elevated surface for a proof frame or CTA band
inkOnAccent     text/icon color with verified contrast on accent
borderSubtle    low-emphasis keyline for section boundaries
focusRing       visible keyboard focus color and width
shadowSoft      restrained elevation for floating controls
```

### Color rules

- Use one dominant canvas per route and one primary blue accent.
- Use blue for interaction and orientation, not for every heading or icon.
- Prefer borders and surface shifts over heavy shadows.
- If a dark proof panel is introduced, make it a contained component with its own accessible text tokens.
- Never use a color, gradient, metric, or status treatment to imply an unapproved service level.

## 7. Shape, border, and elevation

### Radius tokens

```text
radius-sm      4px     code, compact technical chips
radius-md      8px     cards, framed media, inputs
radius-lg      12px    hero proof frame, major CTA band
radius-pill    9999px  primary buttons, tags, status pills
```

### Border and shadow tokens

- `border-strong`: clear container boundary.
- `border-subtle`: low-contrast section keyline.
- `shadow-soft`: one restrained shadow for controls that float above content.
- Avoid stacking multiple shadows, inner glows, and borders on ordinary content cards.
- Use a 1px horizontal rule or keyline to create rhythm between major sections.

## 8. Component patterns

### 8.1 Site header

Structure:

- Nexus mark/wordmark on the left.
- Primary route links in the center or right on desktop.
- One clear contact action on the right.
- Mobile: mark, contact action, menu button.

Behavior:

- Stable height across routes.
- Visible keyboard focus.
- Menu button exposes a labelled navigation region.
- Do not hide primary route names behind hover-only behavior.

### 8.2 Hero / positioning block

Structure:

1. Optional eyebrow or context label.
2. One H1 with a clear audience and value proposition.
3. One short supporting paragraph.
4. One primary contact direction and, only if needed, one secondary link.
5. One proof visual or restrained atmospheric treatment.

Nexus content constraint: do not fill the hero with numerical proof, client logos, SLAs, or testimonials until approved.

### 8.3 Proof frame

Use a framed visual to explain a service. A Nexus proof frame could show:

- A simplified airport network path diagram.
- A clean installation detail or equipment composition.
- A maintenance/support workflow.
- A location-aware but non-sensitive operational map illustration.

The frame should have a clear caption, stable dimensions to prevent layout shift, and a meaningful alternative text when informative.

### 8.4 Feature / value rail

Linear uses a three-part rail to establish a product worldview. For Nexus, use at most three values or service differentiators per section:

- Short label.
- One sentence of explanation.
- Optional small visual cue.

On mobile, use a scrollable rail only when the cards are independently understandable; otherwise stack them.

### 8.5 Service section

Recommended anatomy:

- Section number or small label.
- Short service title.
- One paragraph of institutional explanation.
- Framed visual or diagram.
- Link to the next relevant route or contact direction.

Use this for `/solucoes` with three approved service areas: links, installation, and maintenance.

### 8.6 Status / metadata row

Use compact metadata only when it improves comprehension, for example service category, audience, or process stage. Metadata must not resemble a live SLA, uptime badge, or monitoring feed unless the underlying claim is approved.

### 8.7 CTA band

- Keep the CTA band visually simple and high contrast.
- Use one clear action label in Brazilian Portuguese.
- Full-pill buttons are appropriate for the primary action.
- A secondary action should be visually quieter, not another competing filled button.
- Do not imply that a contact form was submitted until a real destination exists.

### 8.8 Footer

Use grouped links with a clear hierarchy:

- Explore: approved routes.
- Solutions: approved service areas.
- Contact: only approved destinations.
- Legal: only when legal copy and destinations are approved.

The footer should feel like a quiet closing frame, not a second sitemap with invented content.

## 9. Motion and interaction

The reference uses motion to add polish to framed proof and controls. Nexus should keep it restrained.

### Allowed defaults

- Hover: `120–180ms`, small color or surface shift.
- Focus: immediate visible ring; never rely on motion to communicate focus.
- Reveal: `240–420ms` opacity/translate for non-critical content.
- CTA hover: subtle lift or surface change, maximum approximately `2px` movement.
- Proof visuals: gentle ambient gradient or shine only if it does not distract from the service explanation.

### Required behavior

- Respect `prefers-reduced-motion: reduce`.
- Do not autoplay video or animation that carries essential meaning.
- Do not animate layout-critical content in a way that causes cumulative layout shift.
- Never make navigation, contact, or form feedback depend on animation.

## 10. Accessibility requirements

- One clear H1 per route and a logical heading order.
- Links navigate; buttons act. Do not style one as the other without preserving semantics.
- All icon-only controls need an accessible name.
- Maintain a visible focus state on the cool-neutral background and on dark proof surfaces.
- Verify text and border contrast rather than assuming muted gray is safe.
- Provide alt text for informative visuals and empty alt text for decorative visuals.
- Make horizontal rails keyboard reachable and communicate overflow without trapping focus.
- Ensure mobile menu, accordions, and any dialog follow Radix/native accessibility patterns.
- Keep the contact flow honest: no fake success state, persistence, or submission behavior.

## 11. Nexus route translation

This is the recommended pattern mapping for the approved four-route structure.

| Route | Linear-derived structural pattern | Nexus-specific content boundary |
| --- | --- | --- |
| `/` | Editorial hero → proof frame → value rail → contact band | Positioning, concise service overview, core values, approved contact direction. |
| `/solucoes` | Numbered sections with framed proof and directional links | Network links, installation, maintenance; no invented timelines, prices, coverage, or SLA numbers. |
| `/sobre` | Statement-led narrative with spacious supporting blocks | Mission, commitment, founder story only after approval. |
| `/contato` | Focused conversion frame with minimal distractions | Contact destination and form behavior remain pending; never simulate submission. |

## 12. Implementation alignment

### Token ownership

Keep canonical tokens in `styles/tokens`. Extend the existing StyleX theme by role, not by component-specific color names.

Suggested ownership:

- Tailwind: page composition, grid, responsive spacing, layout utilities.
- StyleX: reusable component variants, visual states, token consumption.
- Emotion: only justified runtime-computed styles or third-party adaptation.

Do not express the same visual responsibility in all three systems.

### Suggested component boundaries

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

components/ui/compositions/
  hero-block
  proof-frame
  value-rail
  service-section
  cta-band
  status-row

styles/tokens/
  theme.stylex.ts
  type.ts
  space.ts
  motion.ts
```

Keep visible copy in `content/pages` and `content/shared`. Components should consume typed content rather than becoming the content source of truth.

### Validation checklist

- Check every route at a desktop width and at approximately 390px mobile width.
- Verify header, footer, CTA, proof frame, and mobile menu states.
- Verify no text overflows or becomes too low-contrast on the cool-neutral background.
- Verify all images reserve dimensions before load.
- Verify reduced motion and keyboard focus.
- Add visual-regression coverage once the first visual system implementation stabilizes.

## 13. Decision summary

The strongest Linear pattern for Nexus is not “dark mode” or “rounded cards.” It is the combination of:

1. A very small set of visual roles.
2. Large, confident typography.
3. Consistent keylines and alignment.
4. One proof object per idea.
5. Compact, accessible interaction details.
6. Content that earns trust through clarity instead of unsupported claims.

That is the design structure to carry into Nexus. The palette, logo, final typeface, imagery, CTA copy, and operational proof remain separate product decisions governed by `docs/product-foundation.md`, `docs/SOURCE_OF_TRUTH.md`, and `docs/RULES.md`.
