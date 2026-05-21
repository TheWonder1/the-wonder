<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)"  srcset="https://raw.githubusercontent.com/TheWonder1/the-wonder-ds/main/assets/logos/wonder-wordmark-color.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/TheWonder1/the-wonder-ds/main/assets/logos/wonder-icon-color.svg">
    <img src="https://raw.githubusercontent.com/TheWonder1/the-wonder-ds/main/assets/logos/wonder-icon-color.svg" alt="The Wonder logo" height="72">
  </picture>
</p>

<h1 align="center">The Wonder — Smart IT &amp; Automation Studio</h1>

<p align="center">
  <strong>One-page micro-agency website</strong> — a premium marketing landing page built with a workflow-map browsing experience. Every section is a node on a live flow diagram that draws itself as you scroll.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-11-black?logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
</p>

---

## Overview

**The Wonder** is a boutique IT & automation studio that helps companies and individuals remove operational friction through reliable systems and smart workflows. This site is the public face of that practice — designed to convert visitors, communicate expertise, and feel like the product itself.

### What makes it unique

Instead of a standard scroll layout, the page is structured as a **workflow automation map**:

- A vertical **FlowRail** (SVG) draws itself down the page as the user scrolls — using `stroke-dashoffset` animation
- Each major section is a **flow node** — a glowing circle on the rail that activates when it enters the viewport
- Cards alternate left / right on desktop, creating a visual dialogue between the rail and the content
- The hero section opens with a mini workflow preview (`Intake → Automate → Deliver → Optimize`) that mirrors the studio's process

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) — App Router, TypeScript |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) — class-based dark mode |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Scroll triggers | [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) |
| Icons | [lucide-react](https://lucide.dev) |
| Utilities | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| Contact form | [Formspree](https://formspree.io) (with mock handler for local dev) |
| Design system | [TheWonder1/the-wonder-ds](https://github.com/TheWonder1/the-wonder-ds) |

---

## Design System

All visual tokens come from **The Wonder DS v1.0** — colours, typography, shadows, gradients, and the Flow language spec.

### Colour tokens

| Token | Dark mode | Light mode | Use |
|---|---|---|---|
| `--w-bg` | `#0B1220` | `#F7F8FB` | Page background |
| `--w-surface` | `#111A2E` | `#FFFFFF` | Cards, panels |
| `--w-surface-2` | `#1B2541` | `#EEF1F7` | Inputs, hover states |
| `--w-primary` | `#A78BFA` | `#7C5CF0` | Lavender — brand primary |
| `--w-secondary` | `#22D3EE` | `#0891B2` | Cyan — brand secondary |
| `--w-accent` | `#FFDD44` | `#F2B900` | Amber — CTA accent (used sparingly) |
| `--w-text` | `#E5E7EB` | `#111827` | Body text |
| `--w-muted` | `#94A3B8` | `#475569` | Secondary text, labels |

### Typography

| Scale | Font | Size | Weight |
|---|---|---|---|
| Display (h1–h3) | Space Grotesk | 64 / 48 / 32 px | 600 |
| Body | Manrope | 16 px | 400 |
| Mono | JetBrains Mono | 14 px | 500 |

### Key CSS utilities (from `globals.css`)

```css
.gradient-primary   /* lavender → cyan, brand gradient */
.gradient-text      /* gradient applied as text clip */
.gradient-aurora    /* radial aurora hero background */
.glass-dark         /* glassmorphism — dark variant */
.glass-light        /* glassmorphism — light variant */
.card-base          /* surface + border + hover lift */
.btn-shimmer        /* shimmer sweep on hover */
```

---

## Sub-brands

The Wonder studio uses a family of sub-brand identities — each sharing the same core icon mark but with a distinct colour that signals its domain. All assets live in [TheWonder1/the-wonder-ds](https://github.com/TheWonder1/the-wonder-ds/tree/main/assets/logos).

<table>
  <thead>
    <tr>
      <th>Mark</th>
      <th>Sub-brand</th>
      <th>Colour</th>
      <th>Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://raw.githubusercontent.com/TheWonder1/the-wonder-ds/main/assets/logos/wonderflow-icon.svg" height="36" alt="WonderFlow"></td>
      <td><strong>WonderFlow</strong></td>
      <td><code>#22D3EE</code> Cyan</td>
      <td>Workflow automation — Power Automate, Make, Zapier pipelines</td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/TheWonder1/the-wonder-ds/main/assets/logos/wonderops-icon.svg" height="36" alt="WonderOps"></td>
      <td><strong>WonderOps</strong></td>
      <td><code>#A78BFA</code> Lavender</td>
      <td>IT operations — Microsoft 365, Azure AD, ServiceNow, endpoint management</td>
    </tr>
    <tr>
      <td><img src="https://raw.githubusercontent.com/TheWonder1/the-wonder-ds/main/assets/logos/wonderstack-icon.svg" height="36" alt="WonderStack"></td>
      <td><strong>WonderStack</strong></td>
      <td><code>#FFDD44</code> Amber</td>
      <td>Tech stack builds — SharePoint intranets, Power Apps, custom integrations</td>
    </tr>
  </tbody>
</table>

### Logo assets

| File | Use |
|---|---|
| `wonder-wordmark-color.svg` | Full wordmark — dark backgrounds, presentations, social |
| `wonder-icon-color.svg` | Gradient mark — site navbar, light & dark compatible |
| `wonder-icon-white.svg` | All-white mark — coloured or photo backgrounds |
| `wonder-icon-square-color.svg` | Compact square mark — app icons, badges |
| `favicon.svg` | Browser tab / PWA favicon (32 × 32, rounded rect) |

---

## Features

### Core experience
- **FlowCanvas + FlowRail** — scroll-driven SVG animation (`stroke-dashoffset`) with a gradient lavender-to-cyan rail
- **FlowNodeSection** — each section is a node; activates with a glow and pulse ring on viewport entry
- **Alternating left / right card layout** on desktop; single column on mobile

### Theme
- Dark / light toggle — persisted to `localStorage`, respects `prefers-color-scheme` on first load
- Anti-FOUC inline script in `<head>` — theme class applied before first paint, no flash

### Navigation
- Sticky navbar with **glassmorphism** effect on scroll
- **Scrollspy** — active nav link highlights based on current section (IntersectionObserver)
- Smooth scroll to section anchors
- **Download Capability Deck** button → opens a modal
- Floating **Back to Top** button after 400 px scroll

### Sections (9 flow nodes)
1. **Hero** — headline, CTAs, mini workflow preview diagram
2. **Trust Strip** — enterprise tool badges
3. **Services** — bento grid of 6 service cards with bullets and micro-CTAs
4. **Outcomes** — 4 result cards with placeholder metrics
5. **Featured Work** — 6 case study cards (Problem → Solution → Result), view-all modal
6. **Process** — animated workflow map (Discover → Design → Automate → Optimize) + optional branches
7. **About** — studio mission + founder card + credibility bullets
8. **Testimonials** — 3 professional placeholder quotes
9. **Contact** — validated form with Formspree, copy-email button, mailto fallback

### Accessibility
- Keyboard navigable (all interactive elements have `:focus-visible` rings)
- ARIA labels on icons, modals, and nav
- Colour contrast meets WCAG AA
- `role="dialog" aria-modal="true"` on modals with focus trap + Escape key close

---

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm 9 or later

### Installation

```bash
# Clone the repo
git clone https://github.com/TheWonder1/the-wonder.git
cd the-wonder

# Install dependencies
npm install

# Copy the environment template
cp .env.example .env.local
```

### Environment variables

Open `.env.local` and fill in your values:

```env
# Formspree contact form ID
# Sign up at https://formspree.io, create a form, paste the ID here
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

> If `NEXT_PUBLIC_FORMSPREE_ID` is left empty the contact form shows a **mock success** response locally — no real emails are sent.

### Run in development

```bash
npm run dev
# → http://localhost:3000
```

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
the-wonder/
├── .env.example                  # Environment variable template
├── .gitattributes                # LF line endings enforced
├── .gitignore
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts            # DS tokens wired as CSS variable colors
├── tsconfig.json
├── package.json
└── src/
    ├── app/
    │   ├── globals.css           # CSS custom properties (dark + light tokens)
    │   ├── layout.tsx            # Root layout — fonts, metadata, anti-FOUC script
    │   └── page.tsx              # Main page — assembles all nodes
    ├── components/
    │   ├── ThemeProvider.tsx     # Dark/light context + localStorage persistence
    │   ├── Navbar.tsx            # Sticky nav, scrollspy, glassmorphism, mobile menu
    │   ├── FlowCanvas.tsx        # Scroll progress context + ResizeObserver
    │   ├── FlowRail.tsx          # SVG rail — stroke-dashoffset animation
    │   ├── FlowNodeSection.tsx   # Section wrapper — node circle + alternating layout
    │   ├── BackToTop.tsx         # Floating scroll-to-top button
    │   ├── Modal.tsx             # Accessible modal — focus trap, Escape key
    │   ├── Footer.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── TrustStrip.tsx
    │       ├── Services.tsx
    │       ├── Outcomes.tsx
    │       ├── FeaturedWork.tsx
    │       ├── Process.tsx
    │       ├── About.tsx
    │       ├── Testimonials.tsx
    │       └── Contact.tsx
    ├── data/
    │   └── content.ts            # All site copy — services, cases, testimonials, nav
    └── lib/
        └── utils.ts              # cn() helper (clsx + tailwind-merge)
```

---

## Key Architecture Decisions

### FlowRail scroll animation

`FlowCanvas` measures its own height via `ResizeObserver` and tracks scroll position via a `scroll` + `visibilitychange` listener (the visibility event re-syncs progress when the user returns to a tab). It passes `progress` (0–1) to `FlowRail`.

`FlowRail` renders two layers:
1. A **CSS dashed track** (always visible, no JS needed) — stable on first paint
2. An **SVG `<line>`** with `stroke-dasharray = height` and `stroke-dashoffset = height × (1 - progress)` — the "drawing" effect

### Colour opacity modifiers

Tailwind's `/opacity` modifier syntax (`bg-w-primary/40`) requires colours to be defined as RGB channels, not hex. The config registers:

```ts
'w-primary':   'rgb(var(--w-primary-rgb) / <alpha-value>)',
'w-secondary': 'rgb(var(--w-secondary-rgb) / <alpha-value>)',
```

While `--w-primary` (hex) is kept for direct CSS use (gradients, scrollbar, etc.).

### Theme anti-FOUC

An inline `<script>` in `layout.tsx` runs before the first paint and applies the correct `dark` class based on `localStorage` or `prefers-color-scheme`. `ThemeProvider` then reads the already-applied class as its initial state (lazy `useState` initialiser) — no hydration mismatch, no flash.

---

## Deployment

The project is a standard Next.js app and deploys to any Node-compatible platform.

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Set `NEXT_PUBLIC_FORMSPREE_ID` in the Vercel project environment variables dashboard.

### Other platforms

- **Netlify** — use the Next.js runtime plugin
- **Railway / Render** — set the build command to `npm run build` and start command to `npm start`
- **Docker** — use the official [Next.js Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

---

## Customisation

### Update site content
All text, service cards, case studies, testimonials, and nav links live in one file:

```
src/data/content.ts
```

Edit the exported constants — the UI picks up changes automatically.

### Connect Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. Add it to `.env.local`: `NEXT_PUBLIC_FORMSPREE_ID=your_id`

### Add the capability deck PDF
Place the PDF at `public/capability-deck.pdf`. The Download button in the Capability Deck modal already points to `/capability-deck.pdf`.

### Swap colours / tokens
All tokens are in `src/app/globals.css` under `:root` (light) and `.dark` (dark). Change the hex values — Tailwind picks them up via the CSS variable references in `tailwind.config.ts`.

---

## Git Workflow

```bash
# Feature branch
git checkout -b feat/your-feature

# Commit
git add <files>
git commit -m "type: short description"

# Push
git push origin feat/your-feature

# Open a pull request on GitHub
```

### Commit types
| Type | Use |
|---|---|
| `feat` | New feature or section |
| `fix` | Bug fix |
| `style` | Visual / CSS-only change |
| `content` | Copy or data change in `content.ts` |
| `refactor` | Code restructure, no behaviour change |
| `docs` | README or comment update |

---

## License

MIT © 2026 The Wonder Studio

---

*Built with the [The Wonder Design System](https://github.com/TheWonder1/the-wonder-ds)*
