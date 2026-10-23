# Section 05: Technologies We Teach (Marquee)

- **Source File:** [TechnologiesMarquee.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/TechnologiesMarquee.tsx)
- **Component Name:** `TechnologiesMarquee`
- **Render Location:** Section 04 of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="technologies">`

---

## 1. What is the Component?

The **TechnologiesMarquee** is an infinite, smooth-scrolling visual ribbon that showcases the modern technologies, languages, frameworks, databases, and DevOps tools taught across CareerCatch cohorts. It features industry-standard software icons including React, TypeScript, Next.js, Python, Node.js, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, and Figma.

---

## 2. What Purpose It Serves

1. **Immediate Modernity Validation:** Assures engineering candidates that the curriculum is current, modern, and aligned with market demands (e.g. React 19, TypeScript, Docker) rather than outdated legacy stacks (e.g. jQuery, PHP 5).
2. **Visual Rhythm & Dynamic Energy:** Introduces kinetic motion into an otherwise text-and-card heavy page, refreshing the user's attention.
3. **Cross-Discipline Breadth:** Demonstrates that CareerCatch covers the entire software development lifecycle, from frontend and backend to infrastructure and product design.

---

## 3. Why We Used This Component

- **Why an Infinite Hardware-Accelerated Marquee:** Static logo grids take up substantial vertical screen space and feel static. An infinite horizontal marquee condenses 15+ tool logos into a sleek, compact visual strip that invites passive engagement.
- **Why Gradient Edge Fades:** Hard cutoffs at the viewport boundary look abrupt and unfinished. Adding soft linear-gradient masks (`120px` width) on both left and right creates a smooth infinity-pool illusion where logos gracefully fade in and out.
- **Why SimpleIcons Integration with Local Fallback:** By pulling SVGs dynamically styled in CareerCatch electric blue (`#3B82F6`), all brand marks maintain a consistent color identity while retaining their authentic trademarks.

---

## 4. Technical Architecture & Component Elements

### 4.1 Infinite Looping via Array Duplication
To achieve seamless CSS-driven infinite loop translation without awkward jumps, the source array is duplicated once:
```tsx
const TECH_LIST = [...TECHNOLOGIES, ...TECHNOLOGIES]
```

### 4.2 Reduced-Motion Graceful Degradation
If a user has OS-level reduced motion enabled, running a continuous horizontal scroll is disorienting. The component detects this via `useReducedMotion()` and automatically swaps the continuous marquee for an elegant static wrap grid:
```tsx
<div className={prefersReduced ? undefined : 'marquee-track'}
  style={prefersReduced ? {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', padding: '0 1.5rem',
  } : {}}>
```

### 4.3 Error Handling on Remote Assets
If any remote icon fails to load, an inline `onError` handler gracefully conceals the broken image node to prevent visual blemishes:
```tsx
onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
```

---

## 5. Design System & Styling Details

- **Section Background:** `var(--bg-surface)` (`#FFFFFF`) with `padding: '5rem 0'`.
- **Fade Masks:**
  ```css
  /* Left edge mask */
  background: linear-gradient(to right, var(--bg-surface), transparent);
  width: 120px;
  /* Right edge mask */
  background: linear-gradient(to left, var(--bg-surface), transparent);
  width: 120px;
  ```
- **Typography:**
  - Headline: `.text-heading` in `var(--text-primary)` (`#101B3C`), centered.
  - Subtitle: `var(--text-secondary)` (`#475467`) at `1.0625rem`.
  - Tech Labels: `0.75rem`, `var(--text-muted)` (`#667085`), uppercase, letter spacing `0.06em`.

---

## 6. Micro-Interactions & CSS Animation Specs

The infinite animation runs on the `.marquee-track` class defined in `src/index.css`:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
```
**Key UX Touch:** When the user hovers their mouse cursor over any technology item, the entire track smoothly pauses (`animation-play-state: paused`), allowing them to inspect specific tools at their own pace.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** Full 120px edge fade masks with seamless horizontal translation.
- **Mobile (<640px):** Edge masks scale gracefully. Touch interaction allows natural inspection without layout shifts.
- **Reduced Motion:** Fully disables keyframe translation and renders an accessible static flex-wrap grid.
- **Image Accessibility:** Each icon has an explicit `alt={tech.name}` attribute for screen readers.
