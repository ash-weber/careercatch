# Section 01: Global Navigation Header (Navbar)

- **Source File:** [Navbar.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/layout/Navbar.tsx)
- **Component Name:** `Navbar`
- **Render Location:** Top of [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx), persistent across entire viewport lifecycle.
- **Anchor Target / Role:** Semantic `<header>` landmark with `sticky top-0 z-50`.

---

## 1. What is the Component?

The **Navbar** is the sticky top-level navigational command center of the CareerCatch website. It establishes brand identity through the custom SVG CareerCatch logo, provides fast navigational jump links to page sections (`#courses`, `#mentors`, `#achievements`, `#why-learn`, `#faq`), features an interactive **Course Tracks Mega Dropdown**, offers an immediate click-to-call academic advisor hotline, and hosts prominent conversion actions (`Sign In` and `Enroll Now`).

---

## 2. What Purpose It Serves

1. **Persistent Brand Anchoring:** Keeps the CareerCatch brand visible at all scroll depths, reinforcing legitimacy and authority.
2. **Direct Pathway to Learning Tracks:** Eliminates friction for users seeking specific skills (Full Stack, AI/ML, Cloud DevOps, UI/UX) via a two-column desktop flyout menu.
3. **High-Urgency Contact Facilitation:** Provides a direct toll-free hotline (`1800-890-2282`) that connects high-intent prospects directly with academic counselors before they bounce.
4. **Primary Conversion Gate:** Delivers the primary `Enroll Now` CTA that smoothly navigates users directly to the admissions and scholarship application form.
5. **Seamless Mobile Accessibility:** Transforms into an animated slide-down navigation drawer on smaller viewports, ensuring complete functional parity on mobile devices.

---

## 3. Why We Used This Component

- **Why a Sticky Header with Scroll Detection:** Rather than a static header that disappears as soon as the user scrolls, a sticky navbar ensures the user never feels lost on a long-form landing page with 18+ rich content sections. The scroll listener adds a subtle border and shadow only when scrolled (`window.scrollY > 10`), keeping the top of the page clean while providing visual separation during content navigation.
- **Why a Custom Mega-Menu instead of standard select dropdown:** Standard HTML dropdowns are sterile and convey little information. CareerCatch's custom mega-menu pairs each discipline with a branded Phosphor duotone icon, custom background tint, and a concise curriculum teaser (e.g., *"MERN, Next.js, System Design"* or *"AWS, Docker, Kubernetes"*), educating users before they even click.
- **Why an Advisor Phone Number in the Header:** Ed-tech purchases have high deliberation times. Presenting an immediate human contact channel in the top-right corner increases trust and dramatically lifts conversion rates for skeptical parents and working professionals.

---

## 4. Technical Architecture & State Management

### 4.1 Local State Hooks
- `scrolled` (`boolean`): Controlled by a passive `window.addEventListener('scroll')` hook. When `scrollY > 10`, it applies `shadow-xs border-b border-slate-200/80` to anchor the navbar visually over scrollable content.
- `coursesOpen` (`boolean`): Controls the visibility of the interactive course tracks mega-dropdown. Triggered via click and desktop hover (`onMouseEnter`/`onMouseLeave`).
- `mobileOpen` (`boolean`): Controls the open/closed state of the full-width mobile responsive navigation drawer.

### 4.2 Click-Outside Ref Handling
An active `useRef<HTMLDivElement>(null)` monitors the dropdown container:
```tsx
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setCoursesOpen(false)
    }
  }
  document.addEventListener('mousedown', handleClickOutside)
  return () => document.removeEventListener('mousedown', handleClickOutside)
}, [])
```
This ensures the dropdown dismisses naturally when users click anywhere else on the document.

### 4.3 Track Registry Structure
```tsx
const COURSE_TRACKS = [
  { title: 'Full Stack Development', desc: 'MERN, Next.js, System Design', icon: Code, color: '#155EEF' },
  { title: 'Data Science & AI', desc: 'Python, ML, Deep Learning', icon: ChartLine, color: '#7C3AED' },
  { title: 'UI/UX Design', desc: 'Figma, Design Systems, Research', icon: PenNib, color: '#FF9F1C' },
  { title: 'Cloud & DevOps', desc: 'AWS, Docker, Kubernetes', icon: Cloud, color: '#059669' },
  { title: 'Mobile App Development', desc: 'Flutter, React Native, iOS', icon: DeviceMobile, color: '#EA580C' },
  { title: '1-on-1 Mentorship', desc: 'Mock Interviews & Code Reviews', icon: ShieldCheck, color: '#0284C7' },
]
```

---

## 5. Design System & Styling Details

- **Height:** Strict 68px (`style={{ height: '68px' }}`) ensuring consistent vertical alignment.
- **Background & Elevation:** `bg-white` with dynamic bottom border transition (`border-slate-100` when top; `border-slate-200/80` with `shadow-xs` when scrolled).
- **Z-Index:** `z-50` for header and `z-40` for the mobile drawer, preventing conflicts with lower page elements.
- **Colors:**
  - Brand Logo: `#155EEF` (Electric Blue) + `#FF9F1C` (Warm Amber spark).
  - Nav Link Default: `text-slate-600` (`#475467`), transitioning to `text-[#155EEF]` on hover.
  - Primary CTA: `bg-[#155EEF]` with hover state `hover:bg-[#124BBF]`, crisp white text, and rounded-lg border radius.
  - Hotline Badge: `bg-blue-50 text-[#155EEF]` with duotone `PhoneCall` icon.

---

## 6. Micro-Interactions & Animation Choreography

1. **Courses Dropdown Popover:** Rendered inside `AnimatePresence`. Uses subtle vertical translate and scale (`initial={{ opacity: 0, y: 8, scale: 0.98 }}`, `animate={{ opacity: 1, y: 0, scale: 1 }}`, duration 160ms).
2. **Caret Rotation:** The dropdown chevron icon smoothly rotates 180 degrees (`rotate-180`) when active.
3. **Button Press Physics:** `active:scale-[0.98]` applied to the primary `Enroll Now` button for tactile physical feedback.
4. **Mobile Drawer Entry:** Smooth slide-down reveal (`y: -10` to `y: 0`, opacity fade) within 180ms.

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** Shows complete horizontal navigation link set, course track dropdown button, click-to-call hotline, sign-in button, and `Enroll Now` CTA.
- **Tablet (768px – 1023px):** Hides center links to prevent crowding; maintains the hotline, sign-in, and primary CTA.
- **Mobile (<768px):** Collapses into a minimal header displaying the Logo, Courses quick pill, and an accessible hamburger toggle (`<button aria-label="Toggle navigation menu">`). Clicking slides down the mobile drawer with full stacked links and dual CTA buttons.
- **Screen Reader Support:** Includes `aria-expanded` attributes on the dropdown trigger button, descriptive `aria-label` tags for telephone anchors, and semantic HTML5 `<header>` and `<nav>` landmarks.
