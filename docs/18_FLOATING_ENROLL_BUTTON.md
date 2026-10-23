# Section 18: Sticky Floating Enroll Widget (FloatingEnrollButton)

- **Source File:** [FloatingEnrollButton.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/components/common/FloatingEnrollButton.tsx)
- **Component Name:** `FloatingEnrollButton`
- **Render Location:** Appended at root of [App.tsx](file:///home/lokeshhh/Documents/Career-Catch/src/App.tsx)
- **Anchor Target / Role:** Viewport-fixed complementary widget (`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50`)

---

## 1. What is the Component?

The **FloatingEnrollButton** is a conversion-focused, viewport-anchored interactive widget designed to maintain a persistent enrollment pathway as users explore long-form curriculum content.

The widget operates in two distinct reactive states:
1. **Expanded Mode (Floating Pill Card):** A card (`max-w-[380px]`) featuring an active admissions beacon, a 40% scholarship badge, a graduation cap glyph, concise messaging (*"Start to Enroll Today 🚀"*), a primary action button (*"Apply for Cohort & Scholarship"*), and reassurance micro-copy.
2. **Minimized Mode (Circular Quick Action Floating Bubble):** A compact 56x56px circular button displaying a `RocketLaunch` icon and an animated scholarship percentage badge (`%`).

---

## 2. What Purpose It Serves

1. **Persistent Conversion Access:** As prospective students scroll through extensive testimonials, project lists, and curriculum highlights, they do not need to scroll back up or hunt for a signup link.
2. **Dynamic Attention Capture:** Mounts intelligently after scrolling past 200px or after an initial 2.5-second dwell threshold, drawing attention at high-intent moments.
3. **Form Highlight Feedback:** When clicked, it smoothly scrolls the page to the admissions card (`#enquiry`) and applies a temporary electric blue focus ring (`ring-4 ring-blue-500/40`), guiding user focus straight to the form inputs.
4. **User-Controlled Minimization:** Respects user autonomy with a close button (`X`), collapsing into an unobtrusive bubble rather than permanently obstructing content.

---

## 3. Why We Used This Component

- **Why a Smart Delayed Trigger (200px / 2.5s):** Showing popups or persistent banners immediately upon landing causes banner blindness and annoys visitors. Delaying appearance until the user has begun reading increases click-through rates.
- **Why Two-State Transitions (Expanded vs Minimized):** Users who find sticky modals intrusive can easily minimize the card with one click, preserving a clean reading experience while keeping the conversion option accessible.
- **Why Target Form Highlighting:** Simple anchor jumps can be disorienting. Applying an animated ring pulse (`ring-4 ring-blue-500/40`) to the destination form card confirms to the user exactly where they have landed.

---

## 4. Technical Architecture & State Management

### 4.1 Activation & Visibility Lifecycle
```tsx
const [isVisible, setIsVisible] = useState(false)
const [isMinimized, setIsMinimized] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true)
    }
  }

  const timer = setTimeout(() => {
    setIsVisible(true)
  }, 2500)

  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(timer)
  }
}, [])
```

### 4.2 Smooth Scroll & Highlighting Action
```tsx
const handleScrollToEnroll = () => {
  const target = document.getElementById('enquiry') || document.getElementById('enroll')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // Highlight the form card briefly
    const formCard = document.getElementById('enrollment-form-card')
    if (formCard) {
      formCard.classList.add('ring-4', 'ring-blue-500/40', 'scale-[1.01]')
      setTimeout(() => {
        formCard.classList.remove('ring-4', 'ring-blue-500/40', 'scale-[1.01]')
      }, 1800)
    }
  }
}
```

---

## 5. Design System & Styling Details

- **Positioning:** `fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50`.
- **Card Background:** Translucent white glassmorphism (`bg-white/95 backdrop-blur-md`).
- **Card Border:** `border border-blue-200/90 shadow-2xl shadow-blue-900/15`.
- **Minimized Circular Bubble:**
  ```css
  background: linear-gradient(to bottom right, #2563EB, #1D4ED8, #4338CA);
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.3);
  ```
- **Beacon Dot:** Emerald pulsating radar element (`animate-ping bg-emerald-400`).

---

## 6. Micro-Interactions & Animation Choreography

- **Spring-Loaded Card Reveal:** Expanded card animates with a bouncy spring curve (`type: 'spring', stiffness: 350, damping: 25`).
- **Rocket Launch Hover Effect:** In minimized state, hovering over the bubble tilts the rocket icon by 12 degrees (`group-hover:rotate-12 duration-300`).
- **Arrow Icon Translation:** Primary button arrow shifts rightward on hover (`group-hover:translate-x-1`).

---

## 7. Accessibility & Responsive Breakdown

- **Desktop (1024px+):** Fixed to lower right corner with balanced margins.
- **Mobile (<640px):** Scales to max-width 340px, fitting comfortably on mobile viewports without covering primary text.
- **Accessibility Attributes:**
  - `role="complementary"` declares non-intrusive landmark status.
  - Buttons include explicit `aria-label="Minimize enrollment prompt"` and `aria-label="Expand enrollment prompt"` tags.
