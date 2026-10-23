# Section 19: Supplementary Modules & Reusable Components

This document details the specialized supplementary modules and reusable design primitives included in the CareerCatch codebase:
1. **Brand Identity Emblem (`Logo.tsx`)**
2. **Featured Domain Bento & Categories Directory (`CourseCategories.tsx`)**
3. **High-Contrast Course Action Strip (`MainCourseCTA.tsx`)**

---

## 1. Brand Logo Primitive (`Logo.tsx`)

- **Source File:** [Logo.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/common/Logo.tsx)
- **Component Name:** `Logo`
- **Location in Codebase:** [src/components/common/Logo.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/common/Logo.tsx)

### 1.1 What is the Component?
`Logo` is a vector SVG brand symbol and logotype paired together as an accessible home link (`<a href="/" ...>`).

### 1.2 Design Rationale & Graphic Geometry
- **Emblem Construction:**
  - **Electric Blue Main Arc:** Vector `<path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C21.4 28 25.95 24.45 27.5 19.5" stroke="#155EEF" strokeWidth="3.5" strokeLinecap="round" />` represents steady technical foundation and continuous educational momentum.
  - **Warm Orange Spark Arc:** Secondary `<path d="M27.8 13.5C27.2 9.8 24.6 6.8 21.2 5.2" stroke="#FF9F1C" strokeWidth="3.5" strokeLinecap="round" />` represents ambition and career breakthrough.
  - **Inner Core Sparks:** Center dots (`#155EEF` and `#FF9F1C`) symbolizing student and mentor pairing.
- **Wordmark Typography:** Styled in `'Plus Jakarta Sans'`, font-weight 800, 21px size, midnight navy (`#101B3C`), tracking tight.

### 1.3 Props Interface
```typescript
interface LogoProps {
  className?: string
  iconSize?: number // Defaults to 34px
}
```

---

## 2. Featured Domain Cards & Categories (`CourseCategories.tsx`)

- **Source File:** [CourseCategories.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/CourseCategories.tsx)
- **Component Name:** `CourseCategories`
- **Location in Codebase:** [src/components/sections/CourseCategories.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/CourseCategories.tsx)

### 2.1 What is the Component?
`CourseCategories` is an alternative, domain-driven educational directory inspired by high-trust learning portals. It offers a structured visual pathway for students seeking deep specialization tracks.

### 2.2 Key Features
1. **Three Prominent Featured Domain Cards:**
   - **Software Development:** Royal Blue theme (`#2563EB`), tags for Full Stack MERN, React 19 & Next.js, System Design. Includes a smiling mentor cutout photo anchored in the bottom-right corner.
   - **Data Science & AI:** Deep Purple theme (`#7C3AED`), tags for Python, ML, BigQuery & SQL, GenAI & LLMs.
   - **Cloud & Product Design:** Amber theme (`#D97706`), tags for AWS, Docker & K8s, Figma Pro, UX Systems.
2. **"More Tech Disciplines" 8-Card Grid:** An 8-column visual index covering Cybersecurity, Mobile Dev, Digital Marketing, AI/ML, and Web Dev with Phosphor icons and course counts (`24 courses`, `18 courses`, etc.).

### 2.3 Why We Built This Component
- Provides a direct alternative layout to the `PopularCourses` grid when designing domain-centric landing pages.
- Placing smiling instructor imagery directly inside card corners humanizes the technical roadmaps and increases conversion intent.

---

## 3. Compact Promotional Action Strip (`MainCourseCTA.tsx`)

- **Source File:** [MainCourseCTA.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/MainCourseCTA.tsx)
- **Component Name:** `MainCourseCTA`
- **Location in Codebase:** [src/components/sections/MainCourseCTA.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/MainCourseCTA.tsx)

### 3.1 What is the Component?
`MainCourseCTA` is a compact, high-contrast promotional banner that can be inserted between dense content sections to prompt course exploration.

### 3.2 Visual & Behavioral Specifications
- **Background:** Full-width Electric Blue (`var(--accent-primary)`).
- **Messaging:** *"Ready to start learning? Over 30 courses available now."* in crisp white typography.
- **Button:** White solid button (`#fff`) with electric blue text and subtle shadow, featuring tactile hover scaling (`whileHover={{ scale: 1.04 }}`).
- **Reduced Motion Support:** Honors `useReducedMotion()`.
