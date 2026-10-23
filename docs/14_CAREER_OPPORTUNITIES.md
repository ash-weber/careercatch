# Section 14: Career Opportunities & Hiring Network

- **Source File:** [CareerOpportunities.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/CareerOpportunities.tsx)
- **Component Name:** `CareerOpportunities`
- **Render Location:** Section 13 of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="careers">`

---

## 1. What is the Component?

The **CareerOpportunities** section highlights CareerCatch's corporate recruitment pipeline and corporate hiring partners. 

The section is divided into two columns:
1. **Left Job Board & Partner Grid:**
   - **Hiring Partner Logos Grid:** 10 major technology employers (**TCS**, **Infosys**, **Wipro**, **Accenture**, **Amazon**, **Flipkart**, **Swiggy**, **Razorpay**, **Atlassian**, **Microsoft**) displayed as verified monochrome brand marks.
   - **Role Opportunity Cards:** 3 high-demand job categories with compensation and volume metrics:
     - Full Stack Developer (`₹8 - 18 LPA` · `1,400+ Openings`)
     - Data Scientist & AI Eng (`₹10 - 24 LPA` · `980+ Openings`)
     - UI/UX & Product Designer (`₹7 - 16 LPA` · `620+ Openings`)
   - **Placement Drive CTA:** Direct button triggering enrollment application with a *"100% placement support assistance"* guarantee badge.
2. **Right Editorial Visual Panel:** An expansive modern office portrait with a floating glassmorphic callout card spotlighting the **CareerCatch Placement Cell** (mock HR drills & automated ATS screening).

---

## 2. What Purpose It Serves

1. **Recruiter Network Validation:** Proves to applicants that top tech companies actively hire directly from graduating CareerCatch cohorts.
2. **Salary Expectations Setting:** Transparently states realistic starting LPA ranges across disciplines, helping students set expectations.
3. **Dedicated Career Infrastructure Visibility:** Spotlights the active services of the CareerCatch Placement Cell (resume optimization, portfolio reviews, and mock interview coaching).

---

## 3. Why We Used This Component

- **Why a Dual Partner Wall + Open Roles Layout:** Simply showing company logos is common and often dismissed as stock icons. Pairing company logos with live active job roles and salary bands transforms a passive logo strip into an actionable job board.
- **Why SimpleIcons Integration with Monochrome Styling:** Full-color corporate logos can look messy and clash. Using monochrome brand marks (`https://cdn.simpleicons.org/${slug}/0F172A`) ensures visual harmony with the clean navy-and-blue design language.
- **Why Floating Placement Cell Callout:** Highlighting internal career support mechanisms gives reassurance to career changers who have never sat for a technical interview.

---

## 4. Technical Architecture & Component Elements

### 4.1 Role Categories Data
```tsx
const ROLES = [
  { title: 'Full Stack Developer', avgLpa: '₹8 - 18 LPA', openings: '1,400+ Openings' },
  { title: 'Data Scientist & AI Eng', avgLpa: '₹10 - 24 LPA', openings: '980+ Openings' },
  { title: 'UI/UX & Product Designer', avgLpa: '₹7 - 16 LPA', openings: '620+ Openings' },
]
```

### 4.2 Hiring Partner Registry from `src/lib/constants.ts`
```tsx
export const HIRING_PARTNERS = [
  "tcs", "infosys", "wipro", "accenture", "amazon",
  "flipkart", "swiggy", "razorpay", "atlassian", "microsoft",
]
```

---

## 5. Design System & Styling Details

- **Section Background:** `bg-white` bordered with `border-b border-slate-200/80`.
- **Eyebrow:** Pill badge with `Sparkle` icon and uppercase tracking.
- **Partner Card:** `bg-white border border-slate-200 hover:border-blue-400 p-3 rounded-lg shadow-2xs`.
- **Role Cards:** `p-4 rounded-xl bg-white border border-slate-200 shadow-2xs`.
- **Primary CTA:** `bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-700/20`.

---

## 6. Micro-Interactions & Animation Choreography

- **Partner Logo Hover:** Opacity transitions from 85% to 100% on cursor hover (`opacity-85 hover:opacity-100 transition-opacity`).
- **Editorial Card Scale Reveal:** Right visual panel reveals with scale and opacity interpolation:
  ```tsx
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  ```
- **Reduced Motion:** Fully integrated with `useReducedMotion()`.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 12-column layout (7 columns copy/job board, 5 columns editorial image panel).
- **Tablet (640px – 1023px):** Left column stacks above image; logo grid adjusts to 5 columns.
- **Mobile (<640px):** Single-column layout; partner logos shift to a 3-column compact grid; role cards stack vertically.
- **Image Accessibility:** Contains descriptive `alt="Students collaborating in modern tech office"` and lazy-loading attributes.
