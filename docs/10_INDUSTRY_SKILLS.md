# Section 10: Industry-Relevant Skills & Domain Tracks

- **Source File:** [IndustrySkills.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/IndustrySkills.tsx)
- **Component Name:** `IndustrySkills`
- **Render Location:** Section 09 of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="skills">`

---

## 1. What is the Component?

The **IndustrySkills** section is an interactive career mapping portal that connects technical skills directly to industry hiring demand, salary compensation ranges, and verified job titles. 

Users can toggle across 5 specialized technical tracks:
1. **Software Development:** (₹12 - 24 LPA · 1,400+ Active Roles · MERN, Next.js, Redis, Docker)
2. **AI & Machine Learning:** (₹14 - 28 LPA · 850+ Active Roles · PyTorch, LLMs & RAG, LangChain, Vector DBs)
3. **Data & Analytics:** (₹10 - 20 LPA · 980+ Active Roles · BigQuery, Spark, Snowflake, dbt)
4. **Cloud & DevOps:** (₹12 - 26 LPA · 760+ Active Roles · AWS, K8s, Terraform, ArgoCD GitOps)
5. **Product & UI/UX Design:** (₹9 - 18 LPA · 620+ Active Roles · Figma Pro, Design Systems, WCAG, Usability Testing)

---

## 2. What Purpose It Serves

1. **Outcome-First Orientation:** Bridges the gap between abstract coding concepts and concrete compensation outcomes, showing prospective students the financial return on their educational investment.
2. **Curriculum Depth Exploration:** Displays the exact tool stack, target capstone project, and qualifying job titles for each discipline.
3. **Decision Enablement:** Helps undecided students evaluate which discipline matches their personal career aspirations and earning expectations.

---

## 3. Why We Used This Component

- **Why Interactive Domain Tabs with Live Animation:** Stacking all 5 domains sequentially would create an overwhelming wall of text. Interactive tabs powered by `motion.div` and `AnimatePresence` let users fluidly inspect one discipline at a time while maintaining a clean, compact layout.
- **Why Compensation Badges (`₹12 - 24 LPA`):** In the Indian and global tech landscape, starting salary bands are the primary catalyst for career changers and college seniors. Prominently featuring verified LPA ranges provides immense motivation.
- **Why Domain-Specific Accent Colors:**
  - Software: Deep Royal Blue (`#1D4ED8`)
  - AI/ML: Deep Violet (`#7C3AED`)
  - Data: Sky Cyan (`#0284C7`)
  - Cloud: Emerald (`#059669`)
  - Design: Warm Amber (`#D97706`)
  Each color gives each domain a unique visual identity.

---

## 4. Technical Architecture & State Management

### 4.1 State Management
```tsx
const [activeId, setActiveId] = useState<string>('software')
const currentDomain = DOMAINS.find((d) => d.id === activeId) || DOMAINS[0]
```

### 4.2 Tab Layout Transition with `AnimatePresence`
When the user selects a new domain, `AnimatePresence mode="wait"` unmounts the previous panel and smoothly animates the new domain's specs:
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentDomain.id}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25 }}
  >
    ...
  </motion.div>
</AnimatePresence>
```

---

## 5. Design System & Styling Details

- **Section Background:** `bg-white` with dividing borders.
- **Tab Buttons:** Styled with custom background tints and active border highlights based on each domain's theme color (`style={{ borderColor: isActive ? currentDomain.accentColor : undefined }}`).
- **Metrics Strip:**
  - Salary Box: `bg-emerald-50/60 border border-emerald-200/80` with deep green typography (`text-emerald-800`).
  - Active Roles Box: `bg-blue-50/60 border border-blue-200/80` with navy typography (`text-blue-800`).
- **Skill Chips:** Pill-shaped tags (`bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700`).

---

## 6. Micro-Interactions & Animation Choreography

- **Tab Button Hover:** Smooth scale and border glow with active spring transitions.
- **Interactive Pill Highlighting:** Skill tags slightly lift (`hover:border-blue-400 hover:bg-blue-50/40`) when hovered.
- **Reduced Motion Support:** Bypasses translation shifts during tab transitions when `prefersReduced` is detected.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 5 horizontal tab selectors across the top; 12-column card split below with skills and capstones side-by-side.
- **Tablet (768px – 1023px):** Tabs wrap into two balanced rows; content card maintains two internal columns.
- **Mobile (<768px):** Tabs scroll horizontally or wrap into a compact 2-column grid; metrics, capstones, and skill chips stack vertically for seamless touch navigation.
- **ARIA Standards:** Domain selection buttons include `role="tab"` and `aria-selected={activeId === domain.id}` for assistive technology compatibility.
