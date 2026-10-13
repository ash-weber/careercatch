import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookOpen,
  Code,
  MagnifyingGlass,
  RocketLaunch,
  CheckCircle,
  GitPullRequest,
  Star,
  Trophy,
  ArrowUpRight,
  Clock,
  Sparkle,
  ShieldCheck,
  Cpu,
} from '@phosphor-icons/react'
import { METHODOLOGY_STEPS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const STEP_THEMES = [
  {
    accent: '#1D4ED8', // Deep Royal Blue
    badgeBg: '#EFF6FF',
    badgeBorder: '#BFDBFE',
    badgeText: '#1E40AF',
    tagBg: '#DBEAFE',
    dotColor: '#2563EB',
    panelBg: '#F8FAFC',
    panelBorder: '#E2E8F0',
  },
  {
    accent: '#7C3AED', // Deep Royal Violet
    badgeBg: '#F5F3FF',
    badgeBorder: '#DDD6FE',
    badgeText: '#6D28D9',
    tagBg: '#EDE9FE',
    dotColor: '#8B5CF6',
    panelBg: '#F8FAFC',
    panelBorder: '#E2E8F0',
  },
  {
    accent: '#059669', // Deep Emerald
    badgeBg: '#ECFDF5',
    badgeBorder: '#A7F3D0',
    badgeText: '#047857',
    tagBg: '#D1FAE5',
    dotColor: '#10B981',
    panelBg: '#F8FAFC',
    panelBorder: '#E2E8F0',
  },
  {
    accent: '#D97706', // Warm Amber
    badgeBg: '#FFFBEB',
    badgeBorder: '#FDE68A',
    badgeText: '#B45309',
    tagBg: '#FEF3C7',
    dotColor: '#F59E0B',
    panelBg: '#F8FAFC',
    panelBorder: '#E2E8F0',
  },
]

const ICON_MAP = {
  BookOpen,
  Code,
  MagnifyingGlass,
  RocketLaunch,
}

// Rich tactile preview widgets tailored for light mode
function StepPreviewPanel({ stepIndex }: { stepIndex: number }) {
  if (stepIndex === 0) {
    // Step 01: Learn - Live Cohort & Module Breakdown
    return (
      <div className="flex flex-col gap-3.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
              Cohort 14 • Live Now
            </span>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
            Week 3 of 16
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Current Module
          </p>
          <h4 className="text-base font-bold text-slate-900 flex items-center justify-between">
            <span>Distributed Systems & High-Scale APIs</span>
            <ArrowUpRight size={16} className="text-slate-400" />
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            Led by Staff Engineer @ Uber & ex-Amazon Lead
          </p>
        </div>

        <div className="space-y-2 mt-1">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <CheckCircle size={15} weight="fill" className="text-emerald-600 shrink-0" />
              <span>Foundations & Concurrency Models</span>
            </div>
            <span className="text-slate-400 text-[11px] font-mono">Completed</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-50/70 border border-blue-200/90 text-xs">
            <div className="flex items-center gap-2 text-blue-900 font-semibold">
              <Clock size={15} weight="bold" className="text-blue-600 shrink-0" />
              <span>Redis Caching & Latency Optimization</span>
            </div>
            <span className="text-blue-700 text-[11px] font-mono font-bold">In Session</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/80 text-xs">
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <Cpu size={15} className="text-slate-400 shrink-0" />
              <span>Kafka Event Streams & Resilience</span>
            </div>
            <span className="text-slate-400 text-[11px] font-mono">Next Week</span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <span>Cohort Progress</span>
          <span className="font-bold text-blue-700">76% Completed</span>
        </div>
      </div>
    )
  }

  if (stepIndex === 1) {
    // Step 02: Build - Production PR & Code Inspector
    return (
      <div className="flex flex-col gap-3.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <GitPullRequest size={17} weight="bold" className="text-purple-600" />
            <span className="text-xs font-mono font-bold text-slate-800">
              PR #42 • careercatch-labs
            </span>
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-200">
            Merged to Main
          </span>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-snug">
            feat(cache): Multi-tier Redis caching layer with stale-while-revalidate
          </h4>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 font-mono">
            <span className="text-emerald-700 font-bold">+1,420</span>
            <span className="text-rose-700 font-bold">-185</span>
            <span>• 18 files changed</span>
          </div>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 my-1">
          {['TypeScript', 'PostgreSQL 16', 'Docker', 'Redis 7.2', 'Jest CI'].map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Benchmark callout */}
        <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200/80">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-purple-900">Load Test Verification</span>
            <span className="font-bold text-purple-700 font-mono">Passed (10k req/s)</span>
          </div>
          <p className="text-[11px] text-purple-800 leading-relaxed">
            p99 latency dropped from 142ms → 12ms. Zero memory leaks detected under continuous stress tests.
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} weight="fill" className="text-emerald-600" />
            <span>All 24 automated checks passed</span>
          </span>
        </div>
      </div>
    )
  }

  if (stepIndex === 2) {
    // Step 03: Review - Staff Engineer 1:1 Review & Rubric
    return (
      <div className="flex flex-col gap-3.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
              PS
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Priya Sharma</p>
              <p className="text-[11px] text-slate-500">Principal Engineer @ Razorpay</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
            <Star size={12} weight="fill" className="text-emerald-700" />
            Distinction
          </span>
        </div>

        {/* Mentor quote */}
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
          <p className="text-xs text-slate-700 italic leading-relaxed">
            "Clean separation between domain logic and persistence layers. Deadlock handling and connection pooling are architected exactly how we do it on our production payments cluster."
          </p>
        </div>

        {/* Rubric evaluation */}
        <div className="space-y-2 mt-0.5">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-700">Architecture & Modularity</span>
              <span className="font-bold text-emerald-700">10 / 10</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-700">Concurrency & Error Resilience</span>
              <span className="font-bold text-emerald-700">9.8 / 10</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-600 rounded-full" style={{ width: '98%' }} />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs font-medium text-slate-700">
          <span>Verdict:</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle size={15} weight="fill" />
            Approved for Career Portfolio
          </span>
        </div>
      </div>
    )
  }

  // Step 04: Launch - Placement & Compensation Dashboard
  return (
    <div className="flex flex-col gap-3.5 bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
        <div className="flex items-center gap-2">
          <Trophy size={17} weight="fill" className="text-amber-600" />
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
            Offer Secured
          </span>
        </div>
        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
          Fast-Track Referral
        </span>
      </div>

      <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              Role Confirmed
            </p>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Software Development Engineer (SDE-II)
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">Top-Tier Product Scaleup</p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs">
            ₹24.5 LPA
          </span>
        </div>
      </div>

      <div className="space-y-1.5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Placement Roadmap
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
            <p className="text-slate-500 text-[11px]">Time to Offer</p>
            <p className="font-bold text-slate-900 text-sm mt-0.5">34 Days</p>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
            <p className="text-slate-500 text-[11px]">Direct Referrals</p>
            <p className="font-bold text-slate-900 text-sm mt-0.5">6 Top Tech</p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
        <span className="flex items-center gap-1.5">
          <Sparkle size={14} weight="fill" className="text-amber-500" />
          <span>Salary Negotiation Support Included</span>
        </span>
        <span className="font-bold text-amber-700">100% Placement Backed</span>
      </div>
    </div>
  )
}

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
          scale: 0.94,
          opacity: 0.45,
          ease: 'power2.out',
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
    <section
      id="methodology"
      className="relative bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 border-t border-b border-slate-200/80"
    >
      {/* Section header */}
      <div className="container pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
          <Sparkle size={13} weight="fill" className="text-blue-600" />
          <span>How It Works</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3">
          A System That Gets You Hired
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Four deliberate phases designed by hiring managers to turn raw ambition into production-ready software engineers.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div ref={wrapRef} className="relative pb-20">
        {prefersReduced ? (
          // Reduced motion: Clean vertical grid list
          <div className="container flex flex-col gap-8 pb-12">
            {METHODOLOGY_STEPS.map((step, i) => {
              const theme = STEP_THEMES[i]
              const IconComponent = ICON_MAP[step.icon as keyof typeof ICON_MAP]

              return (
                <div
                  key={step.step}
                  className="rounded-[28px] p-2 bg-slate-200/70 border border-slate-300/80 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.07)]"
                >
                  <div className="rounded-[22px] bg-white p-6 sm:p-10 border border-slate-200/80 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border shadow-2xs"
                          style={{
                            background: theme.badgeBg,
                            borderColor: theme.badgeBorder,
                          }}
                        >
                          {IconComponent && (
                            <IconComponent size={24} color={theme.accent} weight="duotone" />
                          )}
                        </div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                          style={{
                            background: theme.badgeBg,
                            borderColor: theme.badgeBorder,
                            color: theme.badgeText,
                          }}
                        >
                          Step {step.step}
                        </span>
                      </div>

                      <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {step.body}
                      </p>
                    </div>

                    <div className="lg:col-span-5">
                      <StepPreviewPanel stepIndex={i} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          METHODOLOGY_STEPS.map((step, i) => {
            const theme = STEP_THEMES[i]
            const IconComponent = ICON_MAP[step.icon as keyof typeof ICON_MAP]

            return (
              <div
                key={step.step}
                className="method-card min-h-[90vh] flex items-center justify-center relative py-6"
                style={{ zIndex: i + 1 }}
              >
                <div className="method-card-inner w-full will-change-transform">
                  <div className="container">
                    {/* Double-Bezel Card Container */}
                    <div className="rounded-[28px] p-2 sm:p-2.5 bg-slate-200/75 border border-slate-300/85 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)]">
                      <div className="rounded-[20px] bg-white border border-slate-200/80 p-6 sm:p-10 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left Content Column */}
                        <div className="lg:col-span-7">
                          <div className="flex items-center gap-3 mb-5">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-2xs"
                              style={{
                                background: theme.badgeBg,
                                borderColor: theme.badgeBorder,
                              }}
                            >
                              {IconComponent && (
                                <IconComponent size={26} color={theme.accent} weight="duotone" />
                              )}
                            </div>
                            <span
                              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs"
                              style={{
                                background: theme.badgeBg,
                                borderColor: theme.badgeBorder,
                                color: theme.badgeText,
                              }}
                            >
                              Step {step.step}
                            </span>
                          </div>

                          <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
                            {step.title}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-slate-700 mb-4">
                            {step.subtitle}
                          </p>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                            {step.body}
                          </p>

                          {/* Extra High-Trust Badges */}
                          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-medium text-slate-500">Key Pillar:</span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                              {i === 0 && 'Cohort Live Mentoring'}
                              {i === 1 && 'Production Git Repositories'}
                              {i === 2 && 'Senior Engineer Rubrics'}
                              {i === 3 && 'Direct Hiring Pipeline'}
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                              {i === 0 && 'Industry Curriculum'}
                              {i === 1 && 'System Design Architecture'}
                              {i === 2 && '1-on-1 Feedback'}
                              {i === 3 && 'Offer Negotiation'}
                            </span>
                          </div>
                        </div>

                        {/* Right Interactive Preview Column */}
                        <div className="lg:col-span-5">
                          <StepPreviewPanel stepIndex={i} />
                        </div>
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
