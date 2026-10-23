# System Architecture & Design System Documentation

## 1. Executive Summary & Page Overview

**CareerCatch** is built as a single-page, performance-optimized, immersive tech-education web application. The application delivers an outcome-first, high-trust digital storefront that converts prospective students, career switchers, and upskilling developers into enrolled cohort members.

### Technical Foundation
- **Core Runtime:** React 19 (`^19.1.0`) with React DOM 19
- **Build System & Dev Server:** Vite 6 (`^6.3.5`)
- **Styling Architecture:** Tailwind CSS v4 (`^4.1.0`) with `@tailwindcss/vite`
- **Animation Frameworks:** Motion (`motion/react ^12.0.0`) and GSAP 3 (`^3.12.5` with `ScrollTrigger`)
- **Iconography System:** Phosphor Icons (`@phosphor-icons/react ^2.1.7`)
- **Type Checking:** TypeScript 5.8 (`~5.8.3`) in strict mode

---

## 2. Core Architectural Philosophy

### 2.1 Single-Page Conversion Architecture
The application layout in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx) uses a single-page scrolling format that structures the user journey into progressive psychological milestones:
1. **Awareness & Immediate Hook:** Navbar + Hero Banner + Popular Tracks Dock
2. **Catalog Discovery:** Filterable Popular Courses Grid
3. **Pedagogical Trust & Differentiators:** Hands-on Mission Statement + Technologies Marquee + Live Cohort Comparison
4. **Learning Transparency:** 4-Step Methodology Timeline with live UI simulation panels + Curriculum Highlights Bento Grid
5. **Demonstrable Proof of Competence:** Real Hands-on Portfolio Projects + Industry Skills & Salary Mapping
6. **Social Proof & Credibility:** Verified Alumni Hikes + Instructor Profiles + Authentic Testimonials + 200+ Hiring Partners
7. **Objection Handling & Friction Reduction:** Collapsible FAQ Accordion
8. **Direct Action & Lead Capture:** Comprehensive Admissions Enquiry Form + Persistent Sticky Floating Enroll Widget + Global Footer

### 2.2 Component Hierarchy & Structure

```
App.tsx (Root container with standard background and font tokens)
│
├── <Navbar /> (Sticky header with mega-dropdown, advisor phone, mobile drawer)
│
├── <main>
│   ├── <HeroBanner /> (Contained ice-blue card, admissions pill, dual CTAs, career dock)
│   ├── <PopularCourses /> (Category filter tabs, 3-col card grid, advisor CTA)
│   ├── <Introduction /> (Hands-on manifesto, 4 animated stat counters, outcome checklist)
│   ├── <TechnologiesMarquee /> (Dual continuous loop strip with simpleicons/SVGs)
│   ├── <WhyLearnWithUs /> (Alternating row layout: Live sessions & Lifetime career support)
│   ├── <LearningMethodology /> (GSAP ScrollTrigger + interactive preview widgets)
│   ├── <CourseHighlights /> (Curriculum standards bento grid)
│   ├── <HandsOnProjects /> (Diagonal staggered grid of enterprise portfolio capstones)
│   ├── <IndustrySkills /> (Domain selector tabs with salary LPA, active openings, tech chips)
│   ├── <StudentAchievements /> (Placement records, salary hike badges, testimonial quotes)
│   ├── <TrainersMentors /> (4-column faculty cards with verified LinkedIn handles)
│   ├── <Testimonials /> (Featured quote spotlight + student reviews)
│   ├── <CareerOpportunities /> (Hiring network logo wall + interview prep pipeline)
│   ├── <FAQ /> (Two-column collapsible accordion)
│   └── <EnquiryCTA /> (Lead capture form, WhatsApp channel, direct academic phone lines)
│
├── <Footer /> (Multi-column site navigation, social badges, copyright)
│
└── <FloatingEnrollButton /> (Viewport-fixed conversion trigger with scholarship badge)
```

---

## 3. Design Tokens & Styling System

The application design tokens are defined in [src/index.css](file:///home/lokeshhh/Documents/Career-Catch/src/index.css) utilizing CSS custom properties and Tailwind CSS v4 variables:

### 3.1 Color Palette

| Token | Hex / Value | Semantic Role |
|---|---|---|
| `--bg-base` | `#F0F6FF` | Primary page base canvas (Soft Ice Blue tint) |
| `--bg-surface` | `#FFFFFF` | Primary card, modal, and panel background |
| `--bg-elevated` | `#F8FAFC` | Secondary panel background, badge fills, hover states |
| `--accent-primary` | `#155EEF` | Electric Blue: primary CTAs, links, active tab highlights |
| `--accent-hover` | `#124BBF` | Darkened Electric Blue for active/hover button states |
| `--accent-secondary` | `#FF9F1C` | Vibrant Warm Orange: admissions alerts, scholarship chips, star ratings |
| `--accent-light` | `#EFF6FF` | 10% electric blue tint for icon containers and tag badges |
| `--text-navy` / `--text-primary`| `#101B3C` | Deep Midnight Navy for primary headings and prominent text |
| `--text-secondary` | `#475467` | Medium slate gray for body paragraphs and descriptions |
| `--text-muted` | `#667085` | Subtle gray for metadata, timestamps, and secondary captions |
| `--border` | `#E2E8F0` | Default card and divider border color |
| `--border-accent` | `rgba(21, 94, 239, 0.25)` | Focused card border and active pill outlines |

### 3.2 Typography Tokens
The typography pairing combines:
- **Heading / Display Font:** `'Plus Jakarta Sans'` (Weights 600, 700, 800, 900)
- **Body & Interface Font:** `'Inter'` (Weights 400, 500, 600, 700)

```css
.text-display-xl {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.text-display-l {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.text-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);
}
```

### 3.3 Container & Spacing Standards
- **Global Content Constraint:** `.container` with max-width `1280px`, centered with `auto` margins, with `1.5rem` (`px-6`) mobile padding and `2rem` (`px-8`) desktop padding.
- **Section Vertical Rhythm:** Default `.section-pad` set to `py-20 md:py-28` (80px on mobile, 112px on desktop) ensuring generous whitespace between high-density cards.
- **Radius Tokens:** `--radius-card: 18px;` and `--radius-btn: 10px;`.

---

## 4. Animation & Motion Design Standards

1. **Hardware Acceleration:** All transform and opacity animations run on composited layers (`transform`, `opacity`) without triggering layout recalculations.
2. **Reduced Motion Accessibility:** All animated sections utilize `useReducedMotion()` from `motion/react`. When a user enables OS-level reduced motion preferences, animations gracefully fall back to static instant rendering (`initial: false`).
3. **Scroll Triggers:** Viewport triggers are configured with `{ once: true, amount: 0.2 }` to eliminate jarring repeat triggers when users scroll up and down.
4. **GSAP ScrollTrigger:** Applied in complex step-by-step sequences ([LearningMethodology.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/LearningMethodology.tsx)) for multi-stage pinning and coordinated timeline progression.

---

## 5. Global State & Data Flow Architecture

The website uses centralized static registries in [src/lib/constants.ts](file:///home/lokeshhh/Documents/Career-Catch/src/lib/constants.ts):
- `COURSES`: Array of courses with instructor, thumbnail, rating, duration, and pricing data.
- `CATEGORIES`: List of all technical disciplines with Phosphor icon mappings.
- `TECHNOLOGIES`: List of tech stack items with SimpleIcons slugs and brand colors.
- `METHODOLOGY_STEPS`: Four-stage curriculum progression model.
- `PROJECTS`: Capstone portfolio projects with live descriptions and toolings.
- `MENTORS`: Faculty profiles with credentials, companies, and experience badges.
- `TESTIMONIALS`: Student reviews, ratings, and outcomes.
- `HIRING_PARTNERS`: Enterprise recruiter brand logos.
- `FAQS`: Ten key admissions, placement, and curriculum Q&As.

Each section imports the relevant slice of data, ensuring decoupled UI components and simple maintainability when connecting to a production headless CMS or REST API.
