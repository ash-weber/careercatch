import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Star,
  Clock,
  ArrowRight,
  GraduationCap,
} from '@phosphor-icons/react'
import { COURSES } from '@/lib/constants'

const TRACK_FILTERS = [
  { label: 'All Programs', key: 'all' },
  { label: 'Full Stack', key: 'Full Stack' },
  { label: 'Data Science & AI', key: 'Data Science' },
  { label: 'UI/UX Design', key: 'UI/UX Design' },
  { label: 'Cloud Computing', key: 'Cloud Computing' },
]

export default function PopularCourses() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCourses =
    activeFilter === 'all'
      ? COURSES
      : COURSES.filter((c) => c.category.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <section id="courses" className="py-14 sm:py-18 bg-white border-b border-slate-100">
      <div className="container">
        {/* Section Header: Explore Courses (Vedantu Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] block mb-1.5">
              LIVE COHORTS
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
              <h2 className="font-['Plus_Jakarta_Sans'] font-black text-2xl sm:text-3xl text-[#101B3C] tracking-tight">
                Explore courses
              </h2>
              <span className="text-sm font-medium text-slate-500 font-['Inter']">
                (Beginner to Career Placed)
              </span>
            </div>
          </div>

          <a
            href="#enquiry"
            className="text-sm font-semibold text-[#155EEF] hover:text-[#124BBF] inline-flex items-center gap-1 shrink-0 group"
          >
            <span>Talk to an Academic Advisor</span>
            <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {TRACK_FILTERS.map((tab) => {
            const isActive = activeFilter === tab.key
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#155EEF] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[#101B3C] text-[11px] font-bold shadow-xs">
                  {course.category}
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 shadow-2xs">
                  Live Cohort
                </span>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#101B3C] line-clamp-2 mb-2 group-hover:text-[#155EEF] transition-colors">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="text-xs text-slate-500 font-medium">
                      {course.instructor}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1 font-semibold text-[#101B3C]">
                      <Star size={13} weight="fill" className="text-amber-500" />
                      {course.rating}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {course.duration}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <GraduationCap size={13} />
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#101B3C]">
                      ₹{course.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through ml-1.5">
                      ₹{course.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <a
                    href="#enquiry"
                    className="px-3.5 py-1.5 rounded-lg bg-[#155EEF] hover:bg-[#124BBF] text-white text-xs font-semibold shadow-2xs transition-colors"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
