import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReduced = useReducedMotion()

  return (
    <span ref={ref} style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--accent-secondary)', fontWeight: 700 }}>
      {prefersReduced || !inView ? `${target}${suffix}` : <Counter target={target} suffix={suffix} />}
    </span>
  )
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const start = Date.now()
  const duration = 1500

  if (inView && ref.current) {
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      if (ref.current) ref.current.textContent = `${Math.round(eased * target)}${suffix}`
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return <span ref={ref}>{0}{suffix}</span>
}

const STATS = [
  { value: 10000, suffix: '+', label: 'Students Enrolled' },
  { value: 50, suffix: '+', label: 'Expert Mentors' },
  { value: 95, suffix: '%', label: 'Placement Rate' },
  { value: 4.8, suffix: '★', label: 'Avg Rating', isFloat: true },
]

export default function Introduction() {
  const prefersReduced = useReducedMotion()
  const revealProps = (delay: number) => prefersReduced ? {} : {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }

  return (
    <section id="why-us" className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left - text + stats */}
          <div>
            <motion.h2 {...revealProps(0)} className="text-display-l"
              style={{ color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Why CareerCatch?
            </motion.h2>
            <motion.p {...revealProps(0.1)}
              style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '0.875rem' }}>
              Most courses teach you to code. We teach you to get hired. Every lesson is built around the gap between what students know and what companies actually need.
            </motion.p>
            <motion.p {...revealProps(0.18)}
              style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Live mentoring, real projects, and career support that continues until you land the role, not just until you pass a quiz.
            </motion.p>

            {/* Stats 2×2 bento */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {STATS.map(({ value, suffix, label }, i) => (
                <motion.div key={label}
                  {...revealProps(0.1 + i * 0.07)}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-card)',
                    boxShadow: '0 1px 3px rgba(15,23,42,0.05)',
                  }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1, marginBottom: '0.375rem' }}>
                    {/* sample data */}
                    <AnimatedNumber target={value} suffix={suffix} />
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - editorial image */}
          <motion.div {...revealProps(0.2)}
            style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', border: '1px solid var(--border)', boxShadow: '0 12px 32px -4px rgba(15,23,42,0.08)' }}>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt="Mentor and student reviewing code together"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
