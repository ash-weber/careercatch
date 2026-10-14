import { LinkedinLogo, TwitterLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react'
import Logo from '../common/Logo'

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

export default function Footer() {
  return (
    <footer style={{ background: '#F1F5F9', borderTop: '1px solid var(--border)', padding: '4.5rem 0 2.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <Logo iconSize={32} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem', maxWidth: 220 }}>
              Careers Crafted. Skills Proven.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[LinkedinLogo, TwitterLogo, InstagramLogo, YoutubeLogo].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', transition: 'color 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.borderColor = 'var(--border-accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {FOOTER_COLS.map(col => (
            <div key={col.title}>
              <h4 className="font-display" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '0.04em' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      color: 'var(--text-muted)', fontSize: '0.875rem',
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-display" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Newsletter
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '0.875rem' }}>
              Get course updates & career tips weekly.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="Your email"
                style={{
                  flex: 1, padding: '0.6rem 0.875rem',
                  background: 'var(--bg-surface)', border: '1px solid var(--border)',
                  borderRadius: 8, color: 'var(--text-primary)', fontSize: '0.875rem',
                  outline: 'none', minWidth: 0,
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
              />
              <button style={{
                padding: '0.6rem 1rem',
                background: 'var(--accent-primary)', color: '#fff',
                border: 'none', borderRadius: 8, cursor: 'pointer',
                fontSize: '0.875rem', fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            © 2026 CareerCatch. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            Made with ❤️ in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
