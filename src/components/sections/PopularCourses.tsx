"use client"

import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  Star,
  Clock,
  ArrowRight,
  GraduationCap,
  Sparkle,
  Code,
  Laptop,
  CheckCircle,
} from '@phosphor-icons/react'
import { COURSES } from '@/lib/constants'

const TRACK_FILTERS = [
  { label: 'All Programs', key: 'all' },
  { label: 'Full Stack Web', key: 'Full Stack' },
  { label: 'Data Science & AI', key: 'Data Science' },
  { label: 'UI/UX Design', key: 'UI/UX Design' },
  { label: 'Cloud & DevOps', key: 'Cloud' },
]

export default function PopularCourses() {
  const [activeFilter, setActiveFilter] = useState('all')
  const prefersReduced = useReducedMotion()

  const filteredCourses =
    activeFilter === 'all'
      ? COURSES
      : COURSES.filter((c) =>
          c.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
          (activeFilter === 'Cloud' && (c.category.includes('Cloud') || c.category.includes('DevOps')))
        )

  return (
    <section id="courses" className="py-16 md:py-24 bg-white border-b border-slate-200/80 relative">
      <div className="container">
        {/* Section Header: Pure CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-10 pb-6 border-b border-slate-100">
          <div className="md:col-span-8">
            <span className="inline-grid grid-flow-col items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>LIVE INDUSTRY COHORTS</span>
            </span>

            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Explore Industry-Aligned Programs
            </h2>

            <p className="font-['Inter'] text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Curricula designed and taught by active practitioners at Google, Microsoft, and Amazon. Learn by shipping real software.
            </p>
          </div>

          <div className="md:col-span-4 md:justify-self-end">
            <a
              href="#enquiry"
              className="grid grid-flow-col items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100/70 text-blue-700 text-xs sm:text-sm font-bold transition-all shadow-2xs group cursor-pointer"
            >
              <span>Talk to an Academic Advisor</span>
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Filter Bar: Pure CSS Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-10">
          {TRACK_FILTERS.map((tab) => {
            const isActive = activeFilter === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`grid place-items-center py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
                }`}
              >
                <span className="truncate">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Course Cards Grid: 3-Column Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="grid grid-rows-[auto_1fr] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlaid Badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 grid grid-flow-col items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-xs border border-white/60">
                  <Code size={12} weight="bold" className="text-blue-600" />
                  <span>{course.category}</span>
                </div>

                <div className="absolute top-3 right-3 grid grid-flow-col items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>Live Cohort</span>
                </div>
              </div>

              {/* Card Content: Pure CSS Grid Rows */}
              <div className="grid grid-rows-[auto_auto_auto_1fr_auto] p-5 gap-3.5">
                {/* Title */}
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight line-clamp-1">
                    {course.title}
                  </h3>
                </div>

                {/* Instructor Row: Pure 2-Column Grid */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-2.5">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div className="grid">
                    <span className="text-xs font-bold text-slate-800 leading-tight">
                      {course.instructor}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium leading-tight">
                      Senior Industry Mentor
                    </span>
                  </div>
                </div>

                {/* Stats Row: Pure 3-Column Equal Grid */}
                <div className="grid grid-cols-3 items-center divide-x divide-slate-200/80 bg-slate-50/90 rounded-xl p-2.5 text-center text-xs border border-slate-200/60">
                  <div className="grid place-items-center">
                    <span className="grid grid-flow-col items-center gap-1 font-bold text-slate-900">
                      <Star size={13} weight="fill" className="text-amber-500" />
                      {course.rating}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {course.reviews} reviews
                    </span>
                  </div>

                  <div className="grid place-items-center">
                    <span className="grid grid-flow-col items-center gap-1 font-bold text-slate-900">
                      <Clock size={13} className="text-blue-600" />
                      {course.duration}
                    </span>
                    <span className="text-[10px] text-slate-500">Duration</span>
                  </div>

                  <div className="grid place-items-center">
                    <span className="grid grid-flow-col items-center gap-1 font-bold text-slate-900">
                      <GraduationCap size={13} className="text-indigo-600" />
                      {course.level}
                    </span>
                    <span className="text-[10px] text-slate-500">Experience</span>
                  </div>
                </div>

                {/* Perks Preview: Grid of check points */}
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600 pt-1">
                  <span className="grid grid-flow-col items-center justify-start gap-1">
                    <CheckCircle size={13} weight="fill" className="text-emerald-600" />
                    <span>Real-world capstones</span>
                  </span>
                  <span className="grid grid-flow-col items-center justify-start gap-1">
                    <CheckCircle size={13} weight="fill" className="text-blue-600" />
                    <span>1:1 Code reviews</span>
                  </span>
                </div>

                {/* Price & Action: Pure Grid */}
                <div className="grid grid-cols-[1fr_auto] items-center gap-3 pt-3.5 border-t border-slate-100">
                  <div className="grid">
                    <div className="grid grid-flow-col items-baseline justify-start gap-1.5">
                      <span className="font-['Plus_Jakarta_Sans'] text-lg font-black text-slate-900">
                        ₹{course.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700">
                      Save ₹{(course.originalPrice - course.price).toLocaleString('en-IN')} (50% Off)
                    </span>
                  </div>

                  <a
                    href="#enquiry"
                    className="grid grid-flow-col items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 active:scale-[0.98] text-white text-xs font-bold shadow-md shadow-blue-700/20 transition-all cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight size={13} weight="bold" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Feature Pillars: Pure 4-Column CSS Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-100">
          <div className="grid grid-flow-col items-center justify-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 grid place-items-center shrink-0">
              <Laptop size={18} weight="fill" />
            </div>
            <div className="grid">
              <strong className="text-xs font-bold text-slate-900 leading-tight">Live Interactive</strong>
              <span className="text-[11px] text-slate-500">Zoom Q&amp;A sessions</span>
            </div>
          </div>

          <div className="grid grid-flow-col items-center justify-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center shrink-0">
              <Code size={18} weight="fill" />
            </div>
            <div className="grid">
              <strong className="text-xs font-bold text-slate-900 leading-tight">Real Capstones</strong>
              <span className="text-[11px] text-slate-500">Production codebases</span>
            </div>
          </div>

          <div className="grid grid-flow-col items-center justify-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/60">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 grid place-items-center shrink-0">
              <Sparkle size={18} weight="fill" />
            </div>
            <div className="grid">
              <strong className="text-xs font-bold text-slate-900 leading-tight">1:1 Mentorship</strong>
              <span className="text-[11px] text-slate-500">Direct senior feedback</span>
            </div>
          </div>

          <div className="grid grid-flow-col items-center justify-start gap-3 p-3.5 rounded-xl bg-amber-100/60 text-amber-800 border border-amber-200/60">
            <div className="w-9 h-9 rounded-lg bg-amber-200/70 text-amber-800 grid place-items-center shrink-0">
              <GraduationCap size={18} weight="fill" />
            </div>
            <div className="grid">
              <strong className="text-xs font-bold text-slate-900 leading-tight">Placement Support</strong>
              <span className="text-[11px] text-slate-600">200+ Hiring partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
