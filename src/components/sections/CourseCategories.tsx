import { motion, useReducedMotion } from 'motion/react'
import {
  Code, ChartBar, PenNib, Cloud,
  Shield, DeviceMobile, MegaphoneSimple, Brain,
} from '@phosphor-icons/react'
import { CATEGORIES } from '@/lib/constants'

const ICON_MAP: Record<string, React.ComponentType<{ size: number; color: string; weight: 'bold' }>> = {
  Code, ChartBar, PenNib, Cloud, Shield, DeviceMobile, MegaphoneSimple, Brain,
}

export default function CourseCategories() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="categories" className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="container">
        <motion.h2 className="text-heading"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.75rem' }}>
          Explore by Category
        </motion.h2>
        <motion.p
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.0625rem' }}>
          Find the path that fits your goals
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem',
        }}>
          {CATEGORIES.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon]
            const isFeatured = i < 2
            return (
              <motion.a key={cat.name} href="#courses"
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -3, borderColor: 'var(--border-accent)' }}
                style={{
                  display: 'flex', flexDirection: 'column', gap: '0.875rem',
                  padding: isFeatured ? '1.75rem' : '1.25rem',
                  gridColumn: isFeatured ? 'span 2' : 'span 1',
                  background: isFeatured
                    ? 'linear-gradient(135deg, rgba(29,78,216,0.06), #FFFFFF)'
                    : 'var(--bg-surface)',
                  border: `1px solid ${isFeatured ? 'rgba(29,78,216,0.3)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-card)',
                  boxShadow: '0 1px 3px rgba(15,23,42,0.05)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--glow-hover)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 1px 3px rgba(15,23,42,0.05)')}
              >
                <div style={{
                  width: isFeatured ? 52 : 44, height: isFeatured ? 52 : 44,
                  borderRadius: 12,
                  background: '#EFF6FF',
                  border: '1px solid rgba(29,78,216,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {Icon && <Icon size={isFeatured ? 26 : 22} color="var(--accent-primary)" weight="bold" />}
                </div>
                <div>
                  <p className="font-display" style={{
                    fontSize: isFeatured ? '1.125rem' : '1rem',
                    fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem',
                  }}>
                    {cat.name}
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {cat.count} courses
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
