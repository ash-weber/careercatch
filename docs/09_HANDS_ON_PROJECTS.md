# Section 09: Hands-on Projects (Portfolio-Grade Capstones)

- **Source File:** [HandsOnProjects.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/HandsOnProjects.tsx)
- **Component Name:** `HandsOnProjects`
- **Render Location:** Section 08 of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="projects">`

---

## 1. What is the Component?

The **HandsOnProjects** section is an editorial, staggered showcase of the 6 production-grade capstone applications built by CareerCatch students during their cohort. 

Rejecting simplistic to-do list tutorials, it spotlights complex, enterprise-ready software architectures:
1. **E-Commerce Platform:** Full-stack distributed shopping engine built with React, Node.js, and MongoDB.
2. **Data Analytics Dashboard:** Interactive telemetry and insights platform built with Python, Pandas, and Plotly.
3. **Mobile Banking App:** High-security fintech application built with Flutter and Firebase.
4. **ML Recommendation Engine:** Intelligent predictive model built with Python and TensorFlow.
5. **DevOps CI/CD Pipeline:** Automated deployment orchestrator built with Docker, AWS, and GitHub Actions.
6. **Developer Portfolio Builder:** Jamstack publishing platform built with Next.js and Tailwind CSS.

---

## 2. What Purpose It Serves

1. **Proof of Practical Competence:** Demonstrates to hiring managers and recruiters that CareerCatch graduates have built multi-tiered, database-backed web and mobile applications with real authentication, APIs, and deployments.
2. **Portfolio Expectations:** Gives incoming students a clear visual benchmark of the tangible assets they will graduate with.
3. **Overcoming "Tutorial Hell":** Contrasts CareerCatch's rigorous capstone requirements against superficial tutorial platforms that teach theory without engineering problem-solving.

---

## 3. Why We Used This Component

- **Why a Diagonal Staggered Grid (`lg:translate-y-6`):** Standard symmetric 3x2 grids can feel static and clinical. By shifting every odd-indexed card vertically on desktop (`idx % 2 === 1 ? 'lg:translate-y-6' : ''`), the section creates an editorial, dynamic visual cadence that mimics design agency portfolio sites.
- **Why Tech Stack Badges (`tags`):** Candidates and technical recruiters want to know exact toolings. Displaying clean chips (`React`, `Docker`, `TensorFlow`) allows rapid technical assessment.
- **Why Dual Action Footers (GitHub Code + Live Demo):** Engineering credibility rests on code transparency. Including simulated GitHub repository links alongside live demo previews validates that student work is public, audited, and deployed.

---

## 4. Technical Architecture & Component Elements

### 4.1 Data Schema from `src/lib/constants.ts`
```typescript
interface Project {
  name: string
  tags: string[]
  img: string
}
```

### 4.2 Staggered Translation Logic
```tsx
{PROJECTS.map((project, idx) => {
  // Give odd indices a vertical shift on desktop
  const offsetClass = idx % 2 === 1 ? 'lg:translate-y-6' : ''

  return (
    <motion.div
      key={project.name}
      initial={prefersReduced ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      className={`group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 ... ${offsetClass}`}
    >
      ...
    </motion.div>
  )
})}
```

---

## 5. Design System & Styling Details

- **Section Background:** `bg-[#F8FAFC]` (Elevated Slate Canvas) with `py-20 md:py-28`.
- **Eyebrow Pill:**
  ```html
  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-3">
    <Sparkle size={14} weight="fill" />
    <span>Real Work</span>
  </div>
  ```
- **Card Media Aspect Ratio:** Aspect ratio `aspect-video` (16:9) with gradient shadow overlay (`bg-linear-to-t from-slate-950/30 via-transparent`).
- **Typography:**
  - Section Headline: `font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900`.
  - Project Title: `font-['Plus_Jakarta_Sans'] text-xl font-bold text-slate-900 group-hover:text-blue-700`.

---

## 6. Micro-Interactions & Animation Choreography

- **Image Zoom:** On card hover, the project preview image scales up smoothly (`group-hover:scale-105 duration-500`).
- **Border & Shadow Transition:** The container transitions from a neutral slate border to electric blue (`hover:border-blue-400 hover:shadow-xl hover:shadow-blue-600/10`).
- **External Link Hover:** The diagonal arrow icon (`ArrowUpRight`) shifts upward and to the right on cursor focus.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 3-column staggered layout with alternating vertical offsets.
- **Tablet (768px – 1023px):** 2-column grid without vertical offsets to maintain balanced vertical gutters.
- **Mobile (<768px):** 1-column linear feed with 16:9 images and touch-friendly button targets.
- **Motion Reduction:** Fully integrates `useReducedMotion()` to remove Y-translation delays when accessibility settings require static display.
