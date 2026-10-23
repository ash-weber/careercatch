# 🎓 CareerCatch — Careers Crafted. Skills Proven.

> **Modern, high-conversion tech education web application built with React 19, Vite, Tailwind CSS v4, Motion, GSAP, and Phosphor Icons.**

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Private-slate.svg?style=flat-square)](#)

---

## 🧭 Navigation & Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Tooling](#-tech-stack--tooling)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Documentation Hub (`docs/`)](#-documentation-hub-docs)
  - [Architecture & Foundations](#architecture--foundations)
  - [Core Page Sections](#core-page-sections)
  - [Interactive Modules & Primitives](#interactive-modules--primitives)
- [Design System & Color Tokens](#-design-system--color-tokens)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Production Build & Deployment](#-production-build--deployment)
- [Contributing & Code Standards](#-contributing--code-standards)

---

## 🌟 Overview

**CareerCatch** is an outcome-driven ed-tech web platform engineered for aspiring developers, data scientists, cloud engineers, and product designers. Unlike traditional MOOCs and video-heavy tutorial platforms, CareerCatch emphasizes live cohort-based learning, 1:1 code reviews on real GitHub repositories, production cloud deployments, and direct placement connections with 200+ partner companies.

The website delivers an engaging, high-trust single-page experience combining clean aesthetic styling (Ice Blue canvas `#F0F6FF`, Midnight Navy `#101B3C`, Electric Blue `#155EEF`, and Warm Amber `#FF9F1C`), fluid scroll-driven animations, tactile IDE and GitHub pull request simulators, and responsive layouts across all device form factors.

---

## ✨ Key Features

- **🚀 Cinematic Hero with Career Dock:** Above-the-fold engagement featuring admissions status, value propositions, high-trust rating badges, and an overlapping 6-track career dock.
- **🔍 Filterable Popular Courses Catalog:** Instant client-side filtering across Full Stack, Data Science & AI, UI/UX Design, and Cloud DevOps with transparent pricing and review metrics.
- **⚡ Tactile 4-Phase Learning Methodology:** Interactive timeline powered by GSAP ScrollTrigger and Motion, showcasing simulated live IDE editors, pull request code reviews, and placement offer dashboards.
- **🍱 Curriculum Standards Bento Grid:** Asymmetric 6-module showcase highlighting 40+ syllabus modules, sub-15-minute TA doubt clearing, and tamper-proof cryptographic certificates.
- **💼 Real-World Capstone Projects:** Staggered diagonal gallery of enterprise-grade architectures (E-Commerce engines, AI recommendation systems, cloud CI/CD pipelines).
- **📈 Transparent Placement Proof:** Verified alumni career transformation case studies (Razorpay, Swiggy, Amazon, Flipkart) with median CTC metrics (₹12 LPA) and before-and-after salary visualizers.
- **👨‍🏫 Senior Industry Mentors:** Direct faculty directory linking to verified LinkedIn profiles of active engineering leads from Google, Amazon, and Microsoft.
- **📝 High-Converting Admissions Hub:** Multi-channel inquiry portal featuring validated forms, scholarship eligibility evaluators, toll-free advisory hotlines, and instant WhatsApp support.
- **🔘 Persistent Floating Enroll Widget:** Smart conversion trigger that appears dynamically upon scroll, collapses into a circular quick-action bubble, and highlights target form fields upon click.

---

## 🛠️ Tech Stack & Tooling

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Runtime & Framework** | [React](https://react.dev/) | `^19.1.0` | Modern UI component model with React DOM 19 |
| **Bundler & Dev Server** | [Vite](https://vitejs.dev/) | `^6.3.5` | Lightning-fast HMR and optimized Rollup production bundling |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~5.8.3` | End-to-end static type safety and interface validation |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.1.0` | Utility-first CSS engine with `@tailwindcss/vite` |
| **Animation Engine** | [Motion](https://motion.dev/) | `^12.0.0` | Declarative physics, layout transitions, and spring animations |
| **Scroll Choreography** | [GSAP](https://gsap.com/) | `^3.12.5` | Advanced timeline pinning and ScrollTrigger sequences |
| **Iconography** | [Phosphor Icons](https://phosphoricons.com/) | `^2.1.7` | Cohesive, duotone vector icon system |

---

## 📁 Project Architecture & Directory Structure

```
Career-Catch/
├── docs/                             # Dedicated section documentation
│   ├── README.md                     # Master Documentation Index & Overview
│   ├── 00_SYSTEM_ARCHITECTURE.md     # Platform architecture, tokens, and data flow
│   ├── 01_NAVBAR.md                  # Header navigation, dropdowns, and hotline
│   ├── 02_HERO_BANNER.md             # Hero banner and popular tracks dock
│   ├── 03_POPULAR_COURSES.md         # Filterable course directory
│   ├── 04_INTRODUCTION.md            # Mission statement and animated counters
│   ├── 05_TECHNOLOGIES_MARQUEE.md    # Infinite tech stack ribbon
│   ├── 06_WHY_LEARN_WITH_US.md       # Alternating differentiators grid
│   ├── 07_LEARNING_METHODOLOGY.md    # GSAP timeline & tactile simulators
│   ├── 08_COURSE_HIGHLIGHTS.md       # Bento grid curriculum standards
│   ├── 09_HANDS_ON_PROJECTS.md       # Staggered real-world portfolio capstones
│   ├── 10_INDUSTRY_SKILLS.md         # Interactive domain salary explorer
│   ├── 11_STUDENT_ACHIEVEMENTS.md    # Placement outcomes and alumni stories
│   ├── 12_TRAINERS_MENTORS.md        # Faculty directory and credentials
│   ├── 13_TESTIMONIALS.md            # Two-tier student social proof
│   ├── 14_CAREER_OPPORTUNITIES.md    # Hiring partner network and placement cell
│   ├── 15_FAQ.md                     # Two-column collapsible accordion
│   ├── 16_ENQUIRY_CTA.md             # Admissions form and WhatsApp gateway
│   ├── 17_FOOTER.md                  # Sitemap, newsletter, and legal policies
│   ├── 18_FLOATING_ENROLL_BUTTON.md  # Sticky viewport conversion widget
│   └── 19_SUPPLEMENTARY_COMPONENTS.md# Logo, categories bento, and promo CTA
│
├── public/                           # Static assets, logos, and faculty portraits
├── src/
│   ├── components/
│   │   ├── common/                   # Reusable atomic design primitives
│   │   │   ├── FloatingEnrollButton.tsx
│   │   │   └── Logo.tsx
│   │   ├── layout/                   # Global page shell wrappers
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   └── sections/                 # Primary page sections
│   │       ├── CareerOpportunities.tsx
│   │       ├── CourseCategories.tsx
│   │       ├── CourseHighlights.tsx
│   │       ├── EnquiryCTA.tsx
│   │       ├── FAQ.tsx
│   │       ├── HandsOnProjects.tsx
│   │       ├── HeroBanner.tsx
│   │       ├── IndustrySkills.tsx
│   │       ├── Introduction.tsx
│   │       ├── LearningMethodology.tsx
│   │       ├── MainCourseCTA.tsx
│   │       ├── PopularCourses.tsx
│   │       ├── StudentAchievements.tsx
│   │       ├── TechnologiesMarquee.tsx
│   │       ├── Testimonials.tsx
│   │       ├── TrainersMentors.tsx
│   │       └── WhyLearnWithUs.tsx
│   ├── lib/
│   │   └── constants.ts              # Centralized data registries (courses, mentors, FAQs)
│   ├── App.tsx                       # Main single-page application layout
│   ├── index.css                     # Global styles, Tailwind v4 imports, tokens
│   └── main.tsx                      # React 19 root bootstrap
│
├── package.json                      # Project dependencies and npm scripts
├── tsconfig.json                     # TypeScript strict configuration
└── vite.config.ts                    # Vite build configuration with Tailwind plugin
```

---

## 📚 Documentation Hub (`docs/`)

Every section and component is documented in its own dedicated technical guide in [`docs/`](file:///home/lokeshhh/Documents/Career-Catch/docs/). Each guide explains **what the component is**, **what purpose it serves**, **why it was used**, **how it is built**, and its **responsive/accessibility specifications**.

### Architecture & Foundations
- **[System Architecture & Design System](file:///home/lokeshhh/Documents/Career-Catch/docs/00_SYSTEM_ARCHITECTURE.md)** — Core design tokens, typography scale, global color palette, motion standards, and single-page hierarchy.

### Core Page Sections
1. **[Global Navbar (01_NAVBAR.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/01_NAVBAR.md)** — Sticky navigation, course track mega-menu, academic advisor phone trigger, and mobile drawer.
2. **[Hero Banner & Popular Tracks (02_HERO_BANNER.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/02_HERO_BANNER.md)** — Contained ice-blue hero card, admissions urgency badge, 3-color headline, floating metric badges, and career tracks dock.
3. **[Popular Courses Directory (03_POPULAR_COURSES.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/03_POPULAR_COURSES.md)** — Filterable course grid with live cohort tags, duration badges, rating stars, and syllabus action triggers.
4. **[Mission & Hands-on Philosophy (04_INTRODUCTION.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/04_INTRODUCTION.md)** — "Careers, Not Just Courses" value proposition with hardware-accelerated RAF animated counters and outcome checklists.
5. **[Technologies We Teach (05_TECHNOLOGIES_MARQUEE.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/05_TECHNOLOGIES_MARQUEE.md)** — Infinite looped tech stack marquee with gradient edge masks, hover-pause physics, and reduced-motion fallback.
6. **[Why Learn With Us (06_WHY_LEARN_WITH_US.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/06_WHY_LEARN_WITH_US.md)** — Alternating zig-zag feature grid contrasting live interactive cohorts with passive recorded video tutorials.
7. **[Learning Methodology (07_LEARNING_METHODOLOGY.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/07_LEARNING_METHODOLOGY.md)** — 4-stage pedagogical journey (Learn → Build → Review → Launch) powered by GSAP ScrollTrigger with simulated IDE and GitHub PR panels.
8. **[Course Highlights (08_COURSE_HIGHLIGHTS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/08_COURSE_HIGHLIGHTS.md)** — Asymmetric bento grid detailing 40+ hands-on modules, sub-15-minute doubt clearing, cloud environments, and verified credentials.
9. **[Hands-on Projects (09_HANDS_ON_PROJECTS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/09_HANDS_ON_PROJECTS.md)** — Staggered diagonal gallery of enterprise portfolio capstones with tech badges, GitHub links, and live demos.
10. **[Industry-Relevant Skills (10_INDUSTRY_SKILLS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/10_INDUSTRY_SKILLS.md)** — Interactive multi-domain explorer mapping software, AI/ML, cloud, data, and design to verified LPA salary bands.
11. **[Student Achievements (11_STUDENT_ACHIEVEMENTS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/11_STUDENT_ACHIEVEMENTS.md)** — Macro placement benchmarks (₹12 LPA median starting salary), before-and-after salary trajectory bars, and alumni transition case studies.
12. **[Trainers & Mentors (12_TRAINERS_MENTORS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/12_TRAINERS_MENTORS.md)** — Directory of active industry engineering leads from Google, Amazon, and Microsoft with verified LinkedIn links.
13. **[Student Testimonials (13_TESTIMONIALS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/13_TESTIMONIALS.md)** — Two-tier social validation layout with large featured spotlight cards and compact graduate reviews.
14. **[Career Opportunities (14_CAREER_OPPORTUNITIES.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/14_CAREER_OPPORTUNITIES.md)** — 200+ partner company logo wall, target job roles, and Placement Cell interview coaching details.
15. **[Frequently Asked Questions (15_FAQ.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/15_FAQ.md)** — Two-column collapsible accordion resolving objections around eligibility, EMI financing, refunds, and hardware requirements.
16. **[Admissions & Counseling Form (16_ENQUIRY_CTA.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/16_ENQUIRY_CTA.md)** — Central conversion hub with client-side validated form fields, scholarship eligibility checks, and toll-free advisory hotlines.
17. **[Global Footer (17_FOOTER.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/17_FOOTER.md)** — Multi-column site directory, newsletter subscription, social media channels, copyright, and legal policies.

### Interactive Modules & Primitives
18. **[Sticky Floating Enroll Button (18_FLOATING_ENROLL_BUTTON.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/18_FLOATING_ENROLL_BUTTON.md)** — Persistent viewport-anchored widget with dual expanded and minimized states that scrolls and highlights the admissions form.
19. **[Supplementary Modules (19_SUPPLEMENTARY_COMPONENTS.md)](file:///home/lokeshhh/Documents/Career-Catch/docs/19_SUPPLEMENTARY_COMPONENTS.md)** — Vector SVG brand emblem (`Logo.tsx`), alternative domain cards (`CourseCategories.tsx`), and compact promo banner (`MainCourseCTA.tsx`).

---

## 🎨 Design System & Color Tokens

The visual system is defined in [src/index.css](file:///home/lokeshhh/Documents/Career-Catch/src/index.css) using CSS custom properties:

```css
:root {
  --bg-base:         #F0F6FF; /* Soft Ice Blue */
  --bg-surface:      #FFFFFF; /* Pure White Card Canvas */
  --bg-elevated:     #F8FAFC; /* Elevated Slate Panel */
  --accent-primary:  #155EEF; /* Electric Blue (Primary CTAs & Links) */
  --accent-hover:    #124BBF; /* Darkened Blue (Active States) */
  --accent-secondary:#FF9F1C; /* Warm Orange (Admissions, Sparks, Badges) */
  --accent-light:    #EFF6FF; /* 10% Blue Tint */
  --text-navy:       #101B3C; /* Midnight Navy (Headings) */
  --text-primary:    #101B3C;
  --text-secondary:  #475467; /* Slate Gray (Body Copy) */
  --text-muted:      #667085; /* Muted Gray (Captions & Metadata) */
  --border:          #E2E8F0; /* Default Border */
  --border-accent:   rgba(21, 94, 239, 0.25);
}
```

### Typography Scale
- **Headings & Display:** `'Plus Jakarta Sans'` (Weights 600, 700, 800, 900)
- **Body & Interface:** `'Inter'` (Weights 400, 500, 600, 700)

---

## 💻 Getting Started & Local Development

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm (version 9.0.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/ash-weber/careercatch.git
cd Career-Catch
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build & Deployment

### Build for Production
To generate a type-checked, minified production build in the `dist/` directory:
```bash
npm run build
```

### Preview Production Build Locally
To test the generated production bundle locally:
```bash
npm run preview
```

### Deployment Configuration
The project includes a ready-to-use [`vercel.json`](file:///home/lokeshhh/Documents/Career-Catch/vercel.json) configuration for instant deployment on Vercel or similar static hosting platforms.

---

## 🤝 Contributing & Code Standards

1. **Strict TypeScript:** Maintain strict typing without `any` casts. Centralize shared data types in `src/lib/constants.ts`.
2. **Accessible Micro-Interactions:** Always wrap animations in `useReducedMotion()` from `motion/react` to respect user OS accessibility settings.
3. **Design System Adherence:** Use predefined CSS custom properties and standard Tailwind CSS tokens rather than arbitrary ad-hoc inline styles.
4. **Semantic HTML:** Use proper semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) and accessible ARIA attributes (`aria-expanded`, `aria-label`).

---

## 📄 License & Attribution

© 2026 CareerCatch. All rights reserved.  
Made with ❤️ in India 🇮🇳
