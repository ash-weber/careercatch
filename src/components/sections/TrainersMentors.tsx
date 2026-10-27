"use client"

import { motion, useReducedMotion } from 'motion/react'
import { LinkedinLogo, Briefcase, Sparkle } from '@phosphor-icons/react'
import { MENTORS } from '@/lib/constants'

export default function TrainersMentors() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="mentors" className="py-20 md:py-28 bg-white text-slate-800 border-b border-slate-200/80 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-eyebrow mb-2">Expert Faculty</p>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Learn from Industry Insiders
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 leading-relaxed">
            Direct 1:1 guidance from active senior engineers, architects, and designers at high-scale tech giants.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MENTORS.map((mentor, idx) => (
            <motion.div
              key={mentor.id}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-white border border-slate-200 p-5 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 group flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="aspect-square w-full rounded-xl overflow-hidden mb-5 bg-slate-100 relative">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 border border-slate-200 shadow-xs">
                    {mentor.experience} Exp
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight">
                    {mentor.name}
                  </h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-blue-700 transition-colors"
                    aria-label={`LinkedIn profile of ${mentor.name}`}
                  >
                    <LinkedinLogo size={18} weight="fill" />
                  </a>
                </div>

                <div className="text-sm font-semibold text-blue-700 mb-3 flex items-center gap-1.5">
                  <Briefcase size={14} />
                  <span>
                    {mentor.role} @ <strong className="text-slate-900 font-bold">{mentor.company}</strong>
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {mentor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-amber-700 font-semibold">
                  <Sparkle size={13} weight="fill" /> Top Rated Mentor
                </span>
                <span className="text-blue-700 font-semibold">1:1 Mentorship</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#mentors"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-xs"
          >
            Meet All 50+ Mentors
          </a>
        </div>
      </div>
    </section>
  )
}
