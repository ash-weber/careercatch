import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { List, X, CaretDown, BookOpen } from '@phosphor-icons/react'

const NAV_LINKS = [
  { label: 'Courses', dropdown: true },
  { label: 'Categories', href: '#categories' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'About', href: '#why-us' },
  { label: 'Blog', href: '#' },
]

const COURSE_CATEGORIES = [
  'Web Development', 'Data Science', 'UI/UX Design',
  'Cloud Computing', 'Cybersecurity', 'Mobile Development',
  'Digital Marketing', 'AI / ML',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: '72px',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
          borderBottom: '1px solid var(--border)',
          boxShadow: scrolled ? '0 2px 12px rgba(15,23,42,0.06)' : 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BookOpen size={20} color="#fff" weight="bold" />
            </div>
            <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              CareerCatch
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1, justifyContent: 'center' }}
            className="nav-desktop">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  <button
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.5rem 0.875rem',
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9375rem', fontWeight: 500,
                      borderRadius: 6,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                    <CaretDown size={14} weight="bold" style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: 'absolute', top: 'calc(100% + 8px)', left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--bg-surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 12, padding: '0.75rem',
                          width: 220, boxShadow: '0 12px 36px rgba(15,23,42,0.1)',
                          zIndex: 200,
                        }}
                      >
                        {COURSE_CATEGORIES.map(cat => (
                          <a key={cat} href="#courses" style={{
                            display: 'block', padding: '0.5rem 0.75rem',
                            color: 'var(--text-secondary)', fontSize: '0.875rem',
                            textDecoration: 'none', borderRadius: 8,
                            transition: 'background 0.15s, color 0.15s',
                          }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--text-secondary)' }}>
                            {cat}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={link.label} href={link.href}
                  style={{
                    padding: '0.5rem 0.875rem',
                    color: 'var(--text-secondary)', fontSize: '0.9375rem',
                    fontWeight: 500, textDecoration: 'none', borderRadius: 6,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }} className="nav-desktop">
            <a href="#enquiry" style={{
              padding: '0.5rem 1.125rem', borderRadius: 'var(--radius-btn)',
              border: '1px solid var(--border)', color: 'var(--text-secondary)',
              fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}>
              Login
            </a>
            <motion.a href="#enquiry" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-btn)',
                background: 'var(--accent-primary)', color: '#fff',
                fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(29,78,216,0.25)',
              }}>
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: '0.25rem' }}>
            {mobileOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', inset: 0, top: 72, zIndex: 99,
              background: 'var(--bg-base)', padding: '2rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a key={link.label} href={link.href || '#courses'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block', padding: '0.875rem 1rem',
                  color: 'var(--text-primary)', fontSize: '1.125rem',
                  fontWeight: 500, textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                }}>
                {link.label}
              </motion.a>
            ))}
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#enquiry" onClick={() => setMobileOpen(false)} style={{
                padding: '0.875rem', textAlign: 'center', borderRadius: 'var(--radius-btn)',
                border: '1px solid var(--border)', color: 'var(--text-primary)',
                fontWeight: 500, textDecoration: 'none', fontSize: '1rem',
              }}>Login</a>
              <a href="#enquiry" onClick={() => setMobileOpen(false)} style={{
                padding: '0.875rem', textAlign: 'center', borderRadius: 'var(--radius-btn)',
                background: 'var(--accent-primary)', color: '#fff',
                fontWeight: 600, textDecoration: 'none', fontSize: '1rem',
              }}>Enroll Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) { .nav-mobile { display: none !important; } }
        @media (max-width: 1023px) { .nav-desktop { display: none !important; } }
      `}</style>
    </>
  )
}
