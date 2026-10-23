# Section 02: Hero Banner & Popular Tracks Dock

- **Source File:** [HeroBanner.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/HeroBanner.tsx)
- **Component Name:** `HeroBanner`
- **Render Location:** Top of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="hero">`

---

## 1. What is the Component?

The **HeroBanner** is the primary above-the-fold centerpiece of the website. It contains two unified visual modules:
1. **The Contained Cinematic Hero Card:** An expansive ice-blue gradient container with a rounded 36px border radius, featuring an urgent admissions announcement badge, high-impact 3-color typography, three value-proposition bullets, primary action CTAs, and an authentic campus hero photograph with floating glassmorphic achievement badges.
2. **The Signature Popular Career Tracks Dock:** A floating overlap dock (`-mt-14 sm:-mt-18 lg:-mt-22`) anchored below the hero card, presenting 6 high-demand career tracks with duotone icons, active tech stack previews, and directional link indicators.

---

## 2. What Purpose It Serves

1. **Immediate Value Articulation:** In less than 3 seconds, communicates what CareerCatch offers: live cohorts, real-world project work, top-tier engineering mentorship, and verified placement support.
2. **Batch Urgency:** The prominent amber badge (`ADMISSIONS OPEN · BATCH 2026`) creates urgency and signals fresh cohort availability.
3. **Overcoming Educational Skepticism:** The three bullet points directly counter common edtech grievances (passive video watching, absent instructors, and lack of hiring connections).
4. **Immediate Career Path Orientation:** The overlapping career dock allows users with a specific goal in mind (e.g., AI/ML or Full Stack) to jump directly to their domain of interest without having to scroll through long descriptive text.
5. **Instant Social Proof:** Floating rating badge (`4.9/5 Learner Rating · 10,000+ students trained`) provides instant third-party validation above the fold.

---

## 3. Why We Used This Component

- **Why a Contained Card instead of Full-Bleed Dark Hero:** Many tech platforms use generic pitch-black backgrounds that can feel cold or uninviting to beginners. CareerCatch utilizes a bright, pristine Ice Blue gradient (`#F0F6FF` to `#E8F1FD`) encased in a rounded card with ambient lighting. This creates a welcoming, premium educational environment.
- **Why a 3-Color Dynamic Headline:**
  - `BUILD SKILLS.` in Midnight Navy (`#101B3C`) establishes authority.
  - `BUILD YOUR` in Electric Blue (`#155EEF`) connects to technology.
  - `FUTURE.` in Warm Orange (`#FF9F1C`) sparks optimism and ambition.
  This visual hierarchy guides the eye and avoids monolithic text blocks.
- **Why Floating Badges Over the Hero Media:** Placing real metrics directly over the photography creates depth and visual texture, breaking the standard flat image layout seen in generic templates.
- **Why the Overlapping Career Dock:** Pulling the dock upward to overlap the hero boundary creates visual momentum, naturally encouraging users to scroll into the course catalog.

---

## 4. Technical Architecture & Component Elements

### 4.1 Career Tracks Data Registry
```tsx
const POPULAR_TRACKS = [
  {
    role: 'Full Stack Development',
    highlight: 'MERN · Next.js · TS',
    icon: Code,
    accent: '#155EEF',
    iconBg: '#EFF6FF',
    badge: 'High Demand',
    href: '#courses',
  },
  {
    role: 'Data Science & AI',
    highlight: 'Python · ML · GenAI',
    icon: ChartBar,
    accent: '#7C3AED',
    iconBg: '#F5F3FF',
    badge: 'Trending',
    href: '#courses',
  },
  {
    role: 'Cloud & DevOps',
    highlight: 'AWS · Docker · K8s',
    icon: Cloud,
    accent: '#059669',
    iconBg: '#ECFDF5',
    badge: 'Enterprise',
    href: '#courses',
  },
  {
    role: 'UI/UX Design',
    highlight: 'Figma · Design Systems',
    icon: PenNib,
    accent: '#DB2777',
    iconBg: '#FDF2F8',
    badge: 'Creative',
    href: '#courses',
  },
  {
    role: 'Mobile App Dev',
    highlight: 'Flutter · iOS · Android',
    icon: DeviceMobile,
    accent: '#EA580C',
    iconBg: '#FFF7ED',
    badge: 'Fast Track',
    href: '#courses',
  },
  {
    role: '1-on-1 Mentorship',
    highlight: 'Top Tech Leads',
    icon: UsersThree,
    accent: '#0284C7',
    iconBg: '#F0F9FF',
    badge: 'Personalized',
    href: '#mentors',
  },
]
```

### 4.2 Floating Badge Sub-Components
- **Rating Overlay:** Positioned `absolute top-4 left-4`, styled with `#101B3C`/85 background, glassmorphic backdrop-blur, amber star icon, and dual-line typography.
- **Mentorship Callout:** Positioned `absolute bottom-4 right-4`, styled with white translucent background, duotone `ChartLineUp` icon, and a right caret icon.

---

## 5. Design System & Styling Details

- **Container Background:**
  ```css
  background: linear-gradient(135deg, #F0F6FF 0%, #E8F1FD 50%, #F5F9FF 100%);
  border: 1px solid rgba(219, 234, 254, 0.8);
  border-radius: 24px (mobile) / 36px (desktop);
  ```
- **Ambient Lighting:** An absolute radial glow element (`w-96 h-96 opacity-40 blur-3xl`) positioned in the upper right quadrant.
- **Card Dock Elevation:**
  ```css
  box-shadow: 0 20px 50px -12px rgba(21, 94, 239, 0.10);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  ```

---

## 6. Micro-Interactions & UX Details

1. **Card Hover Elevation:** Every career track card in the dock elevates on hover (`hover:-translate-y-1 hover:shadow-md`) with an icon scale animation (`group-hover:scale-108`).
2. **Action Arrow Inversion:** The circular arrow button on each track card flips from subtle gray (`bg-slate-100 text-slate-400`) to vibrant blue (`group-hover:bg-[#155EEF] group-hover:text-white`).
3. **CTA Tactile Response:** Active button clicks use `active:scale-[0.98]` to simulate a native tactile spring.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 12-column split (7 columns copy/CTAs, 5 columns photography with floating badges). Dock renders as a 6-column grid.
- **Tablet (640px – 1023px):** Hero stacks vertically; career dock shifts to a 3-column grid with comfortable touch targets.
- **Mobile (<640px):** Single-column layout. The admissions pill scales down, and the dock switches to a 2-column compact grid (`min-h-[135px]`) optimized for finger taps.
- **Image Accessibility:** The hero photography uses explicit `alt` text (*"Students coding together on laptop in modern campus"*) and eager image loading (`loading="eager"`) to optimize the Largest Contentful Paint (LCP) metric.
