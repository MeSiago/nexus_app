# Nexun — Product Foundation

**Status:** Initial product and scope document  
**Version:** 0.1  
**Updated:** August 23, 2026

## 1. Document purpose

This document defines what the first Nexun website is, who it serves, and the boundaries that should guide its development. It is the reference point for development, design, and future content decisions.

It is not a final brand, marketing-content, operations, or integration document. Those elements will be incorporated incrementally after the site's foundation is complete.

## 2. Product vision

Nexun is a connectivity company focused on businesses already operating within airports. The website will be its digital institutional presence: a trusted place for referred contacts, partners, and prospective clients to quickly understand what the company does and how to begin a conversation.

The product will be a multi-page B2B corporate website in Portuguese, with a corporate, understated, and minimalist tone.

### Language convention

- **Development artifacts:** English. This includes documentation, directories, files, component names, variables, internal content keys, commit messages, and code comments.
- **Public-facing experience:** Portuguese (Brazil). This includes visible copy, navigation labels, form labels, error messages, metadata intended for users, and public URLs.

### Working value proposition

> Connectivity for businesses operating within airports, delivered with reliability, operational excellence, support, and an SLA commitment.

This is a provisional strategic direction, not final brand copy. Brand language will be defined later.

## 3. Audience and initial market

### Primary audience

- Businesses already operating within airports.
- Businesses that need connectivity for their network points in that environment.

### Initial geographic focus

- São Paulo, Brazil.

### Expected website journey

The main acquisition channel is expected to be referrals and commercial relationships, not paid media. The website should therefore prioritize immediate clarity, trust, and easy contact paths without assuming a high-volume acquisition funnel.

## 4. Services within the initial communication scope

The website should present Nexun clearly, without prematurely detailing processes, numerical SLAs, or commercial terms.

- Network-link provision for network points.
- Network-point installation.
- Network-point and associated connectivity maintenance.

Technical details, packages, availability, timelines, prices, and quantitative proof points will be added once validated by the business.

## 5. Website objectives

1. Present Nexun professionally and consistently.
2. Clearly communicate the audience served and available services.
3. Convey the values of reliability, operational excellence, support, and SLA commitment.
4. Support conversations initiated through referrals, partners, and the commercial team.
5. Provide simple contact paths, to be defined during the content and integration stage.

## 6. Initial information architecture

The site will not be a single-page application. It will have independent routes with consistent navigation and footer elements.

| Route | Purpose | Expected initial content |
| --- | --- | --- |
| `/` | Home | Nexun positioning, a concise services overview, core values, and a route toward contact. |
| `/solucoes` | Solutions | Network links, installation, and maintenance, presented at an institutional level. |
| `/sobre` | About | Future space for mission, customer commitment, and a brief founder story. |
| `/contato` | Contact | Institutional contact point; WhatsApp and form behavior will be defined and implemented later. |

### Shared elements

- Header with Nexun identity and primary navigation.
- Institutional footer.
- Responsive layout for desktop and mobile devices.
- Reusable component foundation for sections, buttons, cards, and contact prompts.

## 7. Content principles and acknowledged gaps

Content must not be invented to fill unknowns. Development should use structure, neutral supporting copy, and clearly identifiable placeholders where necessary.

Items intentionally pending:

- Visual identity, logo, color palette, and typography.
- Final institutional copy.
- Founder narrative and mission.
- Metrics, SLAs, availability, certifications, and case studies.
- Photos, illustrations, and other visual assets.
- Button labels and calls to action.
- WhatsApp destination number and prefilled message.
- Contact-form fields, behavior, and submission destination.

## 8. Initial technical scope

### Intended stack

- Next.js.
- Radix UI for accessible interface primitives where applicable.
- Emotion and/or StyleX for styling.

### Styling decision pending

Emotion and StyleX can be used with Next.js, but they fulfill substantially overlapping styling roles. The first implementation should choose **one primary styling solution**, unless there is a specific technical reason for using both. This reduces duplication, visual inconsistency, and maintenance cost.

### Expected first-version architecture

- A Next.js-rendered website with institutional pages and reusable components.
- No authentication, payments, logged-in area, database, CRM, or custom REST API in the project foundation.
- Content initially stored within the codebase or in structured local files until there is a real CMS need.
- A structure that can accommodate future integrations without rewriting navigation or pages.

### Backend and contact-form note

A persistent backend or database is not necessary to build the institutional website. WhatsApp redirects also do not require a backend.

However, a working form will eventually need a processing destination: for example, a Next.js endpoint, a form service, or an email/CRM integration. This can be added as an isolated step without turning the site into an application with its own persistent backend. Until that decision is made, the form must not simulate submission or store data.

## 9. Foundation quality requirements

- Clear, predictable navigation across all four routes.
- Responsive design, with an equivalent experience on mobile and desktop.
- Semantic and accessible components; Radix UI can support interactive behaviors.
- Good loading performance, with optimized images when they are added.
- Modular code with clear separation between layout, components, content, and styles.
- No premature dependencies or infrastructure without a demonstrated need.

## 10. Out of scope for this phase

- Login, user accounts, and permissions.
- Payments or transactions.
- CRM, database, and commercial automations.
- Public or private REST API.
- Campaigns, paid-media tracking, and advertising funnel work.
- Social media and news feed.
- Active WhatsApp integration or contact-form submission.
- Final institutional content, performance proof points, and operational materials.
- Legal review, privacy, LGPD compliance, and regulatory copy; these will be handled later by a designated specialist.

## 11. Market reference reviewed

The [Grupo Arion website](https://www.grupoarion.com.br/) was reviewed as a category reference. It presents a broad portfolio of telecommunications services, solutions, news, and multiple contact paths.

Nexun should adopt only the useful principles—clear institutional presentation, straightforward navigation, and visible access to contact—while keeping a smaller scope specialized for businesses operating within airports. There is no intent to reproduce its extensive structure, copy, or visual identity.

## 12. Next development stage

1. Create the project structure and navigation for the four routes.
2. Define a minimal visual system and the primary styling solution.
3. Build layouts and components with clearly marked provisional content.
4. Decide route-specific copy, CTAs, WhatsApp behavior, and form behavior when each section is developed.
5. Integrate contact channels only after their destination and data-handling process are defined.
