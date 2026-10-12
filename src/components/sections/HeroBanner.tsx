import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowRight, Users, Star, Briefcase } from '@phosphor-icons/react'

const TRUST_STATS = [
  { icon: Users, value: '10,000+', label: 'Students Enrolled' },
  { icon: Star, value: '4.8 / 5', label: 'Learner Rating' },
  { icon: Briefcase, value: '95%', label: 'Placement Support' },
]

export default function HeroBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const wordAnim = (delay: number) => prefersReduced ? {} : {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92dvh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        backgroundColor: '#F8FAFC',
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: 'absolute', inset: 0,
          y: prefersReduced ? 0 : imgY,
        }}
      >
        <img
          src="/images/hero_students_light.jpg"
          alt="Students collaborating in bright sunlit tech campus"
          style={{ width: '100%', height: '115%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Crisp light gradient overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(248,250,252,0.45) 0%, rgba(248,250,252,0.8) 45%, rgba(248,250,252,0.98) 85%, #F8FAFC 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 25% 65%, rgba(29,78,216,0.06), transparent 60%)',
        }} />
      </motion.div>

      {/* Hero content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '4.5rem', paddingTop: '4rem', width: '100%' }}>
        <div style={{ maxWidth: 760 }}>

          {/* Eyebrow */}
          <motion.div {...wordAnim(0.08)} style={{ marginBottom: '1.25rem' }}>
            <span className="text-eyebrow" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: '#EFF6FF', padding: '0.35rem 0.85rem', borderRadius: 9999,
              border: '1px solid rgba(29,78,216,0.2)', color: 'var(--accent-primary)',
            }}>
              <span style={{
                display: 'inline-block', width: 6, height: 6,
                borderRadius: '50%', background: 'var(--accent-primary)',
              }} />
              Launch Your Tech Career
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...wordAnim(0.18)} className="text-display-xl"
            style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.08 }}>
            Turn Skills Into{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>Opportunities.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p {...wordAnim(0.28)}
            style={{ fontSize: '1.1875rem', color: 'var(--text-secondary)', marginBottom: '2.25rem', maxWidth: 560, lineHeight: 1.65 }}>
            Industry-aligned courses, expert mentors, and guaranteed career support from leaders who build scalable tech products.
          </motion.p>

          {/* CTAs */}
          <motion.div {...wordAnim(0.38)} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
            <motion.a
              href="#enquiry"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                background: 'var(--accent-primary)',
                color: '#fff', fontWeight: 600, fontSize: '1rem',
                borderRadius: 'var(--radius-btn)',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(29,78,216,0.25)',
              }}>
              Enroll Now <ArrowRight size={18} weight="bold" />
            </motion.a>
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)', fontWeight: 600, fontSize: '1rem',
                borderRadius: 'var(--radius-btn)',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
              }}>
              Explore Courses
            </motion.a>
          </motion.div>
        </div>

        {/* Trust stats strip */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.25rem',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}>
          {TRUST_STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                backgroundColor: '#FFFFFF', border: '1px solid var(--border)',
                padding: '0.5rem 1rem', borderRadius: 9999,
                boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
              }}
            >
              <Icon size={18} color="var(--accent-primary)" weight="duotone" />
              <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{value}</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{label}</span>
            </div>
          ))}
          {/* sample data */}
        </motion.div>
      </div>
    </section>
  )
}
