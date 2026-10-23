# Section 08: Course Highlights (Curriculum Standards Bento Grid)

- **Source File:** [CourseHighlights.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/CourseHighlights.tsx)
- **Component Name:** `CourseHighlights`
- **Render Location:** Section 07 of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="highlights">`

---

## 1. What is the Component?

The **CourseHighlights** section is an asymmetrical, high-density Bento Grid showcasing the concrete deliverables, academic standards, and support infrastructure included in every CareerCatch cohort. 

The layout organizes 6 interconnected value modules:
1. **Production-Grade Syllabus Feature (2-Column Hero Bento):** Curriculum designed by senior FAANG and Unicorn leads with metrics (`40+ Modules`, `120+ Coding Exercises`, `100% Practical Repos`).
2. **Live Interactive Sessions Card:** 3x weekly live sessions with 90-day cloud recording archives.
3. **Fast Doubt Clearing Card:** Less than 15-minute doubt resolution with dedicated TAs online from 10 AM to 10 PM.
4. **Production Deployments Card:** 6+ capstones deployed to live AWS/Vercel URLs with real GitHub commit histories.
5. **Industry Certification Card:** Cryptographically verifiable digital certificates recognized by 200+ partner companies.
6. **1-on-1 Code Reviews Banner (Full-Width 3-Column Footer):** Line-by-line pull request audits and resume reviews with an inline `Enroll Now` trigger.

---

## 2. What Purpose It Serves

1. **Concrete Scope Transparency:** Answers the critical prospect question: *"What exactly do I get for my tuition?"*
2. **Mitigating Learner Blockers:** Directly addresses the #1 reason students abandon technical courses — getting stuck on syntax or configuration bugs — by spotlighting sub-15-minute TA availability.
3. **Employability Assurance:** Emphasizes that capstones are deployed to live cloud infrastructure rather than remaining local `localhost:3000` demos.
4. **Credential Legitimacy:** Highlights verified certification IDs that recruiters can inspect directly on LinkedIn.

---

## 3. Why We Used This Component

- **Why a Multi-Cell Bento Grid:** Linear lists or repetitive 3x3 icon grids cause cognitive fatigue. Bento grids offer varied cell sizes (2-column wide cards, standard square cards, and full-span banners), creating visual hierarchy that guides the eye to the most important points first.
- **Why Domain-Specific Color Gradients:**
  - Syllabus Card: Pure white with subtle ambient blue glow.
  - Doubt Clearing Card: Soft Purple gradient (`from-purple-50/40 via-white`).
  - Deployments Card: Soft Emerald gradient (`from-emerald-50/40 via-white`).
  - Certification Card: Soft Amber gradient (`from-amber-50/50 via-white`).
  - Code Review Banner: Royal Blue gradient (`from-blue-50/60 via-white to-blue-50/30`).
  This subtle tinting keeps cards distinct without clashing with the overall color system.

---

## 4. Technical Architecture & Component Elements

### 4.1 Grid Geometry (Desktop 3-Column Layout)
The bento grid uses Tailwind's CSS grid:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
  {/* Large Hero Card: Spans 2 Columns */}
  <div className="md:col-span-2 ...">...</div>

  {/* Live Classes Card: Spans 1 Column */}
  <div className="md:col-span-1 ...">...</div>

  {/* Fast Doubt Support: Spans 1 Column */}
  <div className="md:col-span-1 ...">...</div>

  {/* Projects & Deployments: Spans 1 Column */}
  <div className="md:col-span-1 ...">...</div>

  {/* Verified Certificates: Spans 1 Column */}
  <div className="md:col-span-1 ...">...</div>

  {/* Full Width Footer Card: Spans 3 Columns */}
  <div className="md:col-span-3 ...">...</div>
</div>
```

### 4.2 Icon Mapping
Leverages Phosphor Duotone icons for deep visual polish:
- `CodeBlock`: Production syllabus
- `VideoCamera`: Live interactive sessions
- `Question`: Instant doubt clearing
- `TerminalWindow`: Live cloud deployments
- `Certificate`: Tamper-proof certification
- `UsersThree`: 1-on-1 code reviews

---

## 5. Design System & Styling Details

- **Section Container:** `bg-slate-50/70` with border divider `border-y border-slate-200/80`.
- **Eyebrow:** `.text-eyebrow` in Electric Blue (`#155EEF`), uppercase tracking.
- **Card Radii & Elevation:** Rounded 16px/18px borders (`rounded-2xl`), subtle borders (`border-slate-200/90`), and elevation shadows (`shadow-sm hover:shadow-md`).
- **Typography Scale:**
  - Section Title: `font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-slate-900`.
  - Metric Numbers: `text-3xl font-extrabold text-slate-900 block mb-1`.
  - Body Text: `font-['Inter'] text-sm text-slate-600 leading-relaxed`.

---

## 6. Micro-Interactions & Animation Choreography

- **Ambient Glow Hover:** The main syllabus card contains an absolute-positioned ambient sphere (`bg-blue-500/5 group-hover:bg-blue-500/10 rounded-full blur-3xl duration-500`) that gently intensifies when hovered.
- **Link Arrow Translation:** Sub-links feature small arrow icons that translate horizontally on card hover (`group-hover:translate-x-1`).
- **Motion Reveal:** All cards use staggered scroll-entry reveals (`transition={{ duration: 0.6, delay: 0.1, 0.15, 0.2, 0.25, 0.3 }}`).

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** Asymmetric 3-column bento grid.
- **Tablet (768px – 1023px):** Collapses into a balanced 2-column format where cards reorganize without text clipping.
- **Mobile (<768px):** Stacks as a single column (`grid-cols-1`) with generous vertical tap targets and accessible icon proportions.
- **Reduced Motion:** Integrated with `useReducedMotion()`.
