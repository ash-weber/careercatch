import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpen, Code, MagnifyingGlass, RocketLaunch } from '@phosphor-icons/react'
import { METHODOLOGY_STEPS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ComponentType<{ size: number; color: string; weight: 'duotone' }>> = {
  BookOpen, Code, MagnifyingGlass, RocketLaunch,
}

const CARD_COLORS = [
  { bg: '#FFFFFF', border: '#DBEAFE', accent: '#1D4ED8', badgeBg: '#EFF6FF' },
  { bg: '#FFFFFF', border: '#EDE9FE', accent: '#6D28D9', badgeBg: '#F5F3FF' },
  { bg: '#FFFFFF', border: '#CFFAFE', accent: '#0284C7', badgeBg: '#F0F9FF' },
  { bg: '#FFFFFF', border: '#FEF3C7', accent: '#D97706', badgeBg: '#FFFBEB' },
]

export default function LearningMethodology() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !wrapRef.current) return

    const cards = gsap.utils.toArray<HTMLElement>('.method-card')
    if (cards.length <= 1) return

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cards[cards.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        })
        const inner = card.querySelector('.method-card-inner')
        if (!inner) return
        gsap.to(inner, {
          scale: 0.93,
          opacity: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [prefersReduced])

  return (
    <section id="methodology" style={{ background: 'var(--bg-surface)' }}>
      {/* Section header - outside stack */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '3rem', textAlign: 'center' }}>
        <motion.p className="text-eyebrow"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginBottom: '0.75rem' }}>
          How It Works
        </motion.p>
        <motion.h2 className="text-display-l"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ color: 'var(--text-primary)' }}>
          A System That Gets You Hired
        </motion.h2>
      </div>

      {/* Sticky stack */}
      <div ref={wrapRef} style={{ position: 'relative' }}>
        {prefersReduced ? (
          // Reduced motion: plain list
          <div className="container" style={{ paddingBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {METHODOLOGY_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon]
              const col = CARD_COLORS[i]
              return (
                <div key={step.step} style={{
                  background: col.bg,
                  border: `1px solid ${col.border}`,
                  boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05)',
                  borderRadius: 24, padding: '2.5rem',
                }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 600, color: col.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>{step.step}</p>
                  <h3 className="text-heading" style={{ color: 'var(--text-primary)', marginBottom: '0.625rem' }}>{step.title}</h3>
                  <p style={{ color: col.accent, fontSize: '0.9375rem', marginBottom: '1rem' }}>{step.subtitle}</p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              )
            })}
          </div>
        ) : (
          METHODOLOGY_STEPS.map((step, i) => {
            const Icon = ICON_MAP[step.icon]
            const col = CARD_COLORS[i]
            return (
              <div
                key={step.step}
                className="method-card"
                style={{
                  minHeight: '100dvh',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: i + 1,
                  position: 'relative',
                }}>
                <div className="method-card-inner" style={{ willChange: 'transform, opacity', width: '100%' }}>
                  <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                    <div style={{
                      background: col.bg,
                      border: `1px solid ${col.border}`,
                      boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.6)',
                      borderRadius: 24,
                      padding: 'clamp(2rem, 5vw, 4rem)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '3rem',
                      alignItems: 'center',
                    }}>
                      {/* Step number watermark + icon */}
                      <div style={{ position: 'relative' }}>
                        <span className="font-display" style={{
                          position: 'absolute', top: '-1rem', left: '-1rem',
                          fontSize: 'clamp(5rem, 12vw, 9rem)', fontWeight: 900,
                          color: col.accent, opacity: 0.08, lineHeight: 1,
                          userSelect: 'none', pointerEvents: 'none',
                        }}>
                          {step.step}
                        </span>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                          <div style={{
                            width: 64, height: 64, borderRadius: 16,
                            background: col.badgeBg,
                            border: `1px solid ${col.border}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '1.5rem',
                          }}>
                            {Icon && <Icon size={32} color={col.accent} weight="duotone" />}
                          </div>
                          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: col.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                            Step {step.step}
                          </p>
                          <h3 className="text-display-l" style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            {step.title}
                          </h3>
                          <p style={{ color: col.accent, fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                            {step.subtitle}
                          </p>
                          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '1.0625rem', maxWidth: '52ch' }}>
                            {step.body}
                          </p>
                        </div>
                      </div>
                      {/* Decorative right panel */}
                      <div style={{
                        height: 320, borderRadius: 16,
                        background: `linear-gradient(135deg, ${col.badgeBg}, #FFFFFF)`,
                        border: `1px solid ${col.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span className="font-display" style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 900, color: col.accent, opacity: 0.18 }}>
                          {step.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
