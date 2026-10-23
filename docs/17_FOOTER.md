# Section 17: Global Footer & Site Navigation

- **Source File:** [Footer.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/layout/Footer.tsx)
- **Component Name:** `Footer`
- **Render Location:** Bottom of [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Semantic `<footer>` landmark

---

## 1. What is the Component?

The **Footer** is the comprehensive structural foundation and closing navigation hub of the CareerCatch web application. 

It provides four distinct functional quadrants:
1. **Brand Identity & Social Hub:** CareerCatch SVG logo, brand tagline (*"Careers Crafted. Skills Proven."*), and verified social media channels (LinkedIn, Twitter/X, Instagram, YouTube).
2. **Curriculum & Company Directory:** Organized navigation columns covering active courses (Web Dev, Data Science, UI/UX, Cloud, Mobile, AI/ML), company links (About Us, Blog, Careers, Press, Privacy, Terms), and contact coordinates.
3. **Weekly Newsletter Subscription:** Input module enabling prospective students to receive weekly engineering roadmaps, syllabus updates, and career tips.
4. **Legal & Accreditation Bar:** Copyright statement (`© 2026 CareerCatch. All rights reserved.`) and national pride banner (`Made with ❤️ in India 🇮🇳`).

---

## 2. What Purpose It Serves

1. **Secondary Site Navigation:** Allows visitors who reach the bottom of the page to find specific legal policies, company details, and technical topics without scrolling back to the top.
2. **Long-Tail Lead Nurturing:** Captures email addresses for prospects who may not yet be ready to enroll in a full cohort via the newsletter subscription module.
3. **Legal Compliance & Trust:** Hosts mandatory links to Privacy Policy and Terms of Service, satisfying regulatory requirements and building trust with enterprise sponsors.
4. **Social Proof & Community Building:** Directs users to active social channels where student projects, mentor AMAs, and alumni placement interviews are regularly published.

---

## 3. Why We Used This Component

- **Why a Multi-Column Responsive Grid:** Single-line footers look sparse on large marketing websites. A structured 4-column layout organizes links logically, enhancing both aesthetics and user experience.
- **Why an Inline Newsletter Subscription Box:** Many prospects who reach the footer want to stay connected without scheduling an immediate admissions call. The newsletter offers a low-friction entry point into the CareerCatch ecosystem.
- **Why Subtle Contrast Background (`#F1F5F9`):** Grounding the footer in a slightly darker slate tint (`#F1F5F9`) signals a clear and definitive conclusion to the page.

---

## 4. Technical Architecture & Component Elements

### 4.1 Footer Directory Data
```tsx
const FOOTER_COLS = [
  {
    title: 'Courses',
    links: ['Web Development', 'Data Science', 'UI/UX Design', 'Cloud Computing', 'Mobile Dev', 'AI / ML'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Contact',
    links: ['hello@careercatch.in', '+91 98765 43210', 'Bengaluru, India'],
  },
]
```

### 4.2 Social Links Array
Includes Phosphor Icons:
- `LinkedinLogo`
- `TwitterLogo`
- `InstagramLogo`
- `YoutubeLogo`

---

## 5. Design System & Styling Details

- **Footer Canvas:** `background: '#F1F5F9'` with top border divider `borderTop: '1px solid var(--border)'`.
- **Vertical Padding:** `padding: '4.5rem 0 2.5rem'`.
- **Column Typography:** Headings use `.font-display` with `fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)'`.
- **Social Buttons:** Square rounded icon containers (`36x36px`, `borderRadius: 8`, `border: 1px solid var(--border)`).
- **Newsletter Input:** Crisp white field (`background: 'var(--bg-surface)'`, `border: '1px solid var(--border)'`, `borderRadius: 8`). Focus states transition border to `var(--accent-primary)`.

---

## 6. Micro-Interactions & UX States

- **Social Button Hover:** Border and icon color shift from muted gray (`var(--text-muted)`) to electric blue (`var(--accent-primary)`) on hover.
- **Nav Link Hover:** Text color smoothly transitions from muted gray to secondary slate (`var(--text-secondary)`).
- **Focus Rings:** Input focus state applies an electric blue highlight border (`onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}`).

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** 5-column CSS grid (`repeat(auto-fit, minmax(180px, 1fr))`) spreading brand, course links, company links, contact, and newsletter across the full width.
- **Mobile (<640px):** Columns stack gracefully without text crowding. The newsletter input and submit button adjust to full touch width.
- **Semantic Structure:** Wrapped in semantic `<footer>` HTML tag with clean nested `<ul>` and `<li>` elements.
