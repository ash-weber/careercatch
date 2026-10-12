import { motion, useReducedMotion } from 'motion/react'
import { TECHNOLOGIES } from '@/lib/constants'

// Duplicate for seamless loop
const TECH_LIST = [...TECHNOLOGIES, ...TECHNOLOGIES]

export default function TechnologiesMarquee() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="technologies" style={{ background: 'var(--bg-surface)', padding: '5rem 0', overflow: 'hidden' }}>
      <div className="container">
        <motion.h2 className="text-heading"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.75rem' }}>
          Technologies We Teach
        </motion.h2>
        <motion.p
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.0625rem' }}>
          Build real skills with industry-standard tools.
        </motion.p>
      </div>

      {/* Marquee - full-width, outside container */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: 'linear-gradient(to right, var(--bg-surface), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, zIndex: 2,
          background: 'linear-gradient(to left, var(--bg-surface), transparent)',
          pointerEvents: 'none',
        }} />

        <div style={{ overflow: 'hidden' }}>
          <div className={prefersReduced ? undefined : 'marquee-track'}
            style={prefersReduced ? {
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', padding: '0 1.5rem',
            } : {}}>
            {TECH_LIST.map((tech, i) => (
              <div key={`${tech.slug}-${i}`}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: '0.5rem', padding: '1rem 1.5rem',
                  minWidth: 100, flexShrink: 0,
                }}>
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/3B82F6`}
                  alt={tech.name}
                  style={{ width: 36, height: 36, objectFit: 'contain' }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
