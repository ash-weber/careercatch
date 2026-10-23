# Section 03: Popular Courses Directory

- **Source File:** [PopularCourses.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/PopularCourses.tsx)
- **Component Name:** `PopularCourses`
- **Render Location:** Direct child of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="courses">`

---

## 1. What is the Component?

The **PopularCourses** section is the primary educational product catalog of CareerCatch. It displays a comprehensive, filterable grid of cohort-based programs spanning Full Stack Web Development, Data Science & AI, UI/UX Design Masterclass, Cloud Computing with AWS, Advanced React & Node.js, and DevOps & CI/CD Pipelines. 

Each course card provides complete operational transparency: curriculum duration, student star ratings, review counts, instructor profiles, difficulty level, discounted pricing with original MSRP strikethrough, and direct syllabus exploration triggers.

---

## 2. What Purpose It Serves

1. **Catalog Exploration & Discovery:** Allows users to filter the active cohort catalog across distinct technical verticals (Full Stack, Data Science, UI/UX, Cloud) without page reloads.
2. **Transparent Commercial Proof:** Clearly discloses upfront tuition pricing (`₹4,999`, `₹5,999`, `₹6,999`) and duration (`48 Hours`, `60 Hours`), reducing purchase friction.
3. **Instructor Credibility Showcase:** Associates each course directly with named industry practitioners (e.g., *Ravi Kumar, Priya Sharma, Sneha Patel*) rather than anonymous corporate training.
4. **Advisor Handoff Channel:** Features a direct header CTA (*"Talk to an Academic Advisor"*) to capture users who are unsure which specialization matches their prior background.

---

## 3. Why We Used This Component

- **Why an Interactive Filter Bar:** In edtech, forced multi-page navigation creates drop-offs. Instant client-side filtering gives immediate feedback, encouraging prospective students to browse multiple tracks.
- **Why Staggered Card Entrance Animations:** Rather than popping cards onto the screen all at once, each card fades and glides upward with a staggered delay (`idx * 0.06s`). This creates an engaging visual cadence that guides attention across the grid.
- **Why Dual Action Buttons per Card:**
  - `Explore Syllabus`: Designed for low-commitment evaluators who want to inspect the modules, tools, and schedule.
  - `Enroll Now`: Designed for high-intent candidates ready to secure their seat before cohort registration closes.

---

## 4. Technical Architecture & State Management

### 4.1 Filter Configuration & State
```tsx
const TRACK_FILTERS = [
  { label: 'All Programs', key: 'all' },
  { label: 'Full Stack Web', key: 'Full Stack' },
  { label: 'Data Science & AI', key: 'Data Science' },
  { label: 'UI/UX Design', key: 'UI/UX Design' },
  { label: 'Cloud & DevOps', key: 'Cloud' },
]
```
The active tab is stored in `activeFilter` state:
```tsx
const [activeFilter, setActiveFilter] = useState('all')

const filteredCourses = activeFilter === 'all'
  ? COURSES
  : COURSES.filter((c) =>
      c.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
      (activeFilter === 'Cloud' && (c.category.includes('Cloud') || c.category.includes('DevOps')))
    )
```

### 4.2 Data Model from `src/lib/constants.ts`
Each course record adheres to the following interface:
```typescript
interface Course {
  id: number
  title: string
  category: string
  instructor: string
  instructorAvatar: string
  thumbnail: string
  rating: number
  reviews: number
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  originalPrice: number
}
```

---

## 5. Design System & Styling Details

- **Section Background:** `bg-white` bordered with `border-b border-slate-200/80` for clean separation.
- **Header Badge:** Live cohort indicator with an animated pulsing dot:
  ```html
  <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
  <span>LIVE INDUSTRY COHORTS</span>
  ```
- **Filter Tabs:** Uses custom CSS grid (`grid-cols-2 sm:grid-cols-3 md:grid-cols-5`). Active tabs receive `bg-blue-700 text-white shadow-md shadow-blue-700/20`, while inactive tabs remain neutral `bg-slate-50 border-slate-200/90`.
- **Card Typography:** Headings use `'Plus Jakarta Sans'` font-extrabold with tight tracking, ensuring titles remain legible on mobile displays.
- **Pricing Callout:** The discounted price is highlighted in bold Midnight Navy (`text-slate-900 font-extrabold`), with the original fee struck-through in muted gray (`text-slate-400 line-through`).

---

## 6. Micro-Interactions & UX Details

1. **Card Border Glow:** Hovering over any card elevates the container (`hover:shadow-xl hover:border-blue-300`) with smooth 300ms CSS transitions.
2. **Thumbnail Zoom:** Card thumbnail photos expand slightly (`group-hover:scale-105 duration-500`) within an `overflow-hidden` frame.
3. **Reduced Motion Adaptation:** Incorporates `useReducedMotion()`. When motion is restricted by the user, card reveals render statically without translation delays.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 3-column grid (`lg:grid-cols-3`) providing balanced spacing and thumbnail proportions.
- **Tablet (768px – 1023px):** 2-column grid (`md:grid-cols-2`) preserving card detail without horizontal compression.
- **Mobile (<768px):** 1-column layout (`grid-cols-1`). Filter buttons wrap into a two-column compact grid for effortless thumb tapping.
- **Keyboard Navigation:** Filter buttons and card links are fully tabbable with visible `:focus-visible` outlines.
