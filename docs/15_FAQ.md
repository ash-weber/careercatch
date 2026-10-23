# Section 15: Frequently Asked Questions (FAQ)

- **Source File:** [FAQ.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/sections/FAQ.tsx)
- **Component Name:** `FAQ`
- **Render Location:** Section 14 of `<main>` in [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<section id="faq">`

---

## 1. What is the Component?

The **FAQ** section is a two-column collapsible accordion designed to resolve common objections, clarify admissions logistics, and remove purchase hesitation. 

It addresses 10 core questions covering:
1. What courses CareerCatch offers
2. Prerequisites and prior coding requirements
3. Live class formatting and recording access
4. Cohort durations (36 to 60 hours across 3–5 months)
5. Placement support and hiring guarantees
6. 7-day refund policies
7. Hardware and software requirements
8. Industry recognition of completion certificates
9. Post-course dashboard access
10. 0% interest EMI financing plans

The section concludes with a **"Still have questions?"** callout box linking directly to free academic counseling.

---

## 2. What Purpose It Serves

1. **Objection Handling & Friction Removal:** Directly tackles questions about zero-prior-experience eligibility, refunds, and hardware requirements.
2. **Financial Transparency:** Clarifies EMI financing options (splitting tuition into 3, 6, or 12 installments at 0% interest) and refund terms (7-day no-questions-asked refund policy).
3. **Counseling Safety Net:** Offers an escape hatch (*"Request a Free 15-Minute Counseling Call"*) for prospects with unique personal situations.

---

## 3. Why We Used This Component

- **Why a 2-Column Desktop Grid Over a Long Single Column:** Ten expanded or stacked accordion questions create excessive vertical scroll depth. Splitting questions into two balanced columns (5 questions per column) keeps the content compact and easily scannable on desktop displays.
- **Why Active Border & Indicator Highlighting:** When an item is opened, its border switches from neutral slate (`border border-slate-200`) to high-contrast blue (`border-2 border-blue-600 shadow-md`), while the toggle button inverts from gray to solid royal blue with a `Minus` icon. This clear visual state helps users track what they are reading.
- **Why Default First Item Open (`openIndex = 0`):** Opening the first question by default immediately teaches the user that the cards are interactive accordions.

---

## 4. Technical Architecture & State Management

### 4.1 State Management
```tsx
const [openIndex, setOpenIndex] = useState<number | null>(0)

const leftColumn = FAQS.slice(0, 5)
const rightColumn = FAQS.slice(5, 10)

const toggle = (idx: number) => {
  setOpenIndex(openIndex === idx ? null : idx)
}
```

### 4.2 Accordion Item Renderer
```tsx
const renderFaqItem = (faq: { q: string; a: string }, actualIdx: number) => {
  const isOpen = openIndex === actualIdx

  return (
    <div
      key={actualIdx}
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-white border-2 border-blue-600 shadow-md'
          : 'bg-white border border-slate-200 hover:border-slate-300 shadow-2xs'
      }`}
    >
      <button
        type="button"
        onClick={() => toggle(actualIdx)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-base md:text-lg">
          {faq.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'
          }`}
        >
          {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-sm md:text-base text-slate-600 font-['Inter'] leading-relaxed border-t border-slate-100">
          {faq.a}
        </div>
      )}
    </div>
  )
}
```

---

## 5. Design System & Styling Details

- **Section Background:** `bg-[#F8FAFC]` (Elevated Slate Canvas) with `border-b border-slate-200/80`.
- **Eyebrow:** `.text-eyebrow` in Electric Blue (`#155EEF`).
- **Headline:** `font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900`.
- **Active State Card:** `border-2 border-blue-600 shadow-md bg-white`.
- **Inactive State Card:** `border border-slate-200 hover:border-slate-300 bg-white shadow-2xs`.
- **Advisor Box:** White card (`rounded-2xl border border-slate-200 shadow-sm p-8 max-w-xl mx-auto`).

---

## 6. Micro-Interactions & Animation Choreography

- **Plus / Minus Icon Swap:** Instant transition between Phosphor `Plus` and `Minus` icons with circular background inversion (`bg-slate-100` $\rightarrow$ `bg-blue-700 text-white`).
- **Smooth Expand / Collapse:** Toggling is instantaneous and clean, preventing layout jank.
- **Link Hover:** Bottom counseling callout includes an animated right arrow prompt (`Request a Free 15-Minute Counseling Call →`).

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 2-column layout with 5 questions per column.
- **Mobile & Tablet (<1024px):** Single-column stacked layout with full width.
- **ARIA Compliance:**
  - `<button aria-expanded={isOpen}>` explicitly announces expansion state to screen readers.
  - Keyboard accessible: native `<button>` elements support Enter and Spacebar toggling with focused states.
