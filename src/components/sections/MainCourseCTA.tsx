"use client"

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

export default function MainCourseCTA() {
  const prefersReduced = useReducedMotion()
  return (
    <section id="main-cta" style={{ background: 'var(--accent-primary)', padding: '1.75rem 0' }}>
      <div className="container" style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: '1rem',
      }}>
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display"
          style={{ fontSize: '1.125rem', fontWeight: 600, color: '#fff' }}>
          Ready to start learning? <span style={{ opacity: 0.8, fontWeight: 400 }}>Over 30 courses available now.</span>
        </motion.p>
        <motion.a
          href="#courses"
          whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.95)' }}
          whileTap={{ scale: 0.97 }}
          initial={prefersReduced ? false : { opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.6875rem 1.375rem',
            background: '#fff', color: 'var(--accent-primary)',
            fontWeight: 700, fontSize: '0.9375rem',
            borderRadius: 'var(--radius-btn)', textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}>
          View All Courses <ArrowRight size={16} weight="bold" />
        </motion.a>
      </div>
    </section>
  )
}
