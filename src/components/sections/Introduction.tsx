"use client"

import { useRef, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReduced = useReducedMotion()

  return (
    <span ref={ref} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#155EEF', fontWeight: 800 }}>
      {prefersReduced || !inView ? `${target}${suffix}` : <Counter target={target} suffix={suffix} />}
    </span>
  )
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || !ref.current) return
    const start = Date.now()
    const duration = 1400
    let rafId: number

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      if (ref.current) {
        ref.current.textContent = `${Math.round(eased * target)}${suffix}`
      }
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, target, suffix])

  return <span ref={ref}>{0}{suffix}</span>
}

const STATS = [
  { value: 10000, suffix: '+', label: 'Students Enrolled' },
  { value: 50, suffix: '+', label: 'Expert Mentors' },
  { value: 95, suffix: '%', label: 'Placement Rate' },
  { value: 4.8, suffix: '★', label: 'Learner Rating' },
]

export default function Introduction() {
  const prefersReduced = useReducedMotion()
  const revealProps = (delay: number) => prefersReduced ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  }

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column - Copy matching Reference Image 1 */}
          <div className="lg:col-span-7">
            <motion.span
              {...revealProps(0)}
              className="text-xs font-bold uppercase tracking-wider text-[#155EEF] block mb-2"
            >
              CAREERS, NOT JUST COURSES
            </motion.span>

            <motion.h2
              {...revealProps(0.08)}
              className="font-['Plus_Jakarta_Sans'] font-black text-3xl sm:text-4xl md:text-5xl text-[#101B3C] tracking-tight mb-4 leading-[1.12]"
            >
              Learn by building <span className="text-[#155EEF]">real things</span>
            </motion.h2>

            <motion.p
              {...revealProps(0.16)}
              className="text-slate-600 text-base sm:text-lg font-['Inter'] leading-relaxed mb-8 max-w-xl"
            >
              Our programs are designed with industry experts to help you build in-demand skills through hands-on projects, mentorship and real-world experience.
            </motion.p>

            {/* 2x2 Bento Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
              {STATS.map(({ value, suffix, label }, i) => (
                <motion.div
                  key={label}
                  {...revealProps(0.2 + i * 0.05)}
                  className="p-4 rounded-xl bg-[#F0F6FF]/70 border border-[#DBEAFE] shadow-2xs"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#155EEF] leading-none mb-1">
                    <AnimatedNumber target={value} suffix={suffix} />
                  </div>
                  <div className="text-xs font-semibold text-slate-600">{label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div {...revealProps(0.3)} className="flex items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-500" />
                No filler tutorials
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-500" />
                Production git commits
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-emerald-500" />
                Live cohort sprints
              </span>
            </motion.div>
          </div>

          {/* Right Column - Editorial image */}
          <motion.div
            {...revealProps(0.2)}
            className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-200 aspect-4/3 sm:aspect-16/11 shadow-lg relative bg-slate-100"
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80"
              alt="Mentor and student reviewing real-world codebase"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 text-xs font-semibold text-[#101B3C]">
              Real engineering team workflows · Code reviews on GitHub
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
