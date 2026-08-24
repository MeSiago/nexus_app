# Nexun — Source of Truth

## Purpose

This document is the operational reference for the Nexun website. It translates the product foundation into development boundaries and should remain aligned with `docs/product-foundation.md` as the project evolves.

## Product summary

Nexun is a Brazilian B2B connectivity company serving businesses that already operate within airports. The website is its institutional presence and must help referred contacts, partners, and prospective clients understand the company, its services, and how to begin a conversation.

The experience is intentionally small in functional scope and ambitious in visual quality. It should feel corporate, understated, trustworthy, precise, and premium without inventing claims or operational details.

## Language

- Development artifacts are written in English: folders, files, components, variables, content keys, code comments, and technical documentation.
- The public experience is written in Brazilian Portuguese: navigation, copy, form labels, validation messages, metadata, and URLs.

## Routes

| Route | Responsibility |
| --- | --- |
| `/` | Positioning, concise service overview, core values, and contact direction. |
| `/solucoes` | Institutional presentation of network links, installation, and maintenance. |
| `/sobre` | Company commitment, mission, and founder story when approved content exists. |
| `/contato` | Contact experience. WhatsApp and form behavior remain pending. |

All routes share the same header, navigation, footer, responsive behavior, and visual system.

## Technical direction

- Framework: Next.js with the App Router.
- Language: TypeScript in strict mode.
- Styling: Tailwind CSS, StyleX, and Emotion with distinct responsibilities.
- Accessible primitives: Radix UI.
- Content: local, typed content modules until a real CMS need exists.
- Rendering: prefer Server Components; add Client Components only for actual browser-side interaction.
- Backend: none by default. Do not create a database, API layer, authentication, or simulated form submission.

### Styling responsibilities

All three requested styling technologies are part of the stack, but they must not compete for the same responsibility:

- **Tailwind CSS** is the primary tool for page composition, responsive layout, spacing, and simple one-off presentation utilities.
- **StyleX** owns reusable static component styles, design-token consumption, variants, and interaction states that benefit from typed composition.
- **Emotion** is reserved for the small number of cases that require runtime-computed styling, third-party style adaptation, or behavior StyleX and Tailwind cannot express cleanly.

Every component should have one primary styling owner. Do not express the same rule in multiple systems.

## Directory ownership

```text
app/
├── contato/                 # /contato route
├── solucoes/                # /solucoes route
└── sobre/                   # /sobre route
components/
├── layout/                  # Header, footer, navigation, page shell
├── sections/                # Route-specific, composed page sections
│   ├── about/
│   ├── contact/
│   ├── home/
│   └── solutions/
└── ui/
    ├── compositions/        # Reusable product-level UI patterns
    └── primitives/          # Low-level accessible primitives and Radix wrappers
content/
├── pages/                   # Typed copy and content grouped by route
└── shared/                  # Navigation, footer, company, and shared CTA content
docs/                        # Product and project documentation
hooks/                       # Reusable client-side React hooks, only when necessary
lib/                         # Framework-independent helpers and configuration
public/assets/
├── fonts/                   # Self-hosted font files
├── icons/                   # Static icon and favicon assets
└── images/                  # Approved raster or vector content assets
styles/
├── emotion/                 # Emotion theme/provider and exceptional runtime styles
├── stylex/                  # Shared StyleX definitions and reusable style recipes
└── tokens/                  # Canonical design tokens: color, type, space, motion
tests/
├── e2e/                     # Route, navigation, and critical-flow coverage
├── unit/                    # Focused logic and component tests
└── visual/                  # Visual-regression scenarios for design-critical views
types/                       # Shared domain and content TypeScript types
```

Route entry files belong in `app`. Route-specific UI belongs in `components/sections`, not inside a large page file. Shared visible copy belongs in `content`; JSX must not become the canonical content store.

## Content boundaries

Do not invent:

- numerical SLAs, performance metrics, coverage, availability, or timelines;
- prices, packages, certifications, clients, testimonials, or case studies;
- the founder story, company mission, final CTAs, or final brand language;
- contact destinations, WhatsApp numbers, form fields, or submission behavior.

Use neutral, clearly provisional content until business-approved content is supplied. A form must never pretend that data was sent or stored.

## Quality bar

- Visual craft is a primary product requirement, not a final polish task.
- Desktop and mobile must provide equivalent clarity and hierarchy.
- Navigation must remain predictable across every route.
- Components must be semantic, keyboard accessible, and screen-reader friendly.
- Motion must be restrained, purposeful, and respect reduced-motion preferences.
- Images, when introduced, must be approved, optimized, responsive, and accompanied by meaningful alternative text when informative.
- Prefer a small, coherent component system over many narrowly different components.

## Explicitly out of scope

Authentication, accounts, payments, CRM, databases, custom REST APIs, commercial automation, active contact submission, advertising funnels, social/news feeds, and unapproved legal or LGPD copy are outside the current foundation.

## Decision order

When documents or implementation choices conflict, resolve them in this order:

1. The latest explicit product-owner decision.
2. `docs/product-foundation.md` for product scope and facts.
3. This file for architecture and implementation boundaries.
4. `RULES.md` for day-to-day development conventions.

Update the relevant document in the same change whenever an approved decision alters the project scope, architecture, routes, content ownership, or styling responsibilities.
