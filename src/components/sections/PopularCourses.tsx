import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Code,
  ChartBar,
  Cloud,
  PenNib,
  DeviceMobile,
  User,
  CaretRight,
  ArrowRight,
  Star,
  Clock,
} from '@phosphor-icons/react'
import { COURSES } from '@/lib/constants'

const CATEGORY_CARDS = [
  {
    title: 'Full Stack Development',
    desc: 'Build modern web applications',
    icon: Code,
    iconBg: '#F5F3FF',
    iconBorder: '#DDD6FE',
    iconColor: '#7C3AED',
    categoryKey: 'Full Stack',
  },
  {
    title: 'Data Science & AI',
    desc: 'Work with data, build intelligent systems',
    icon: ChartBar,
    iconBg: '#FFFBEB',
    iconBorder: '#FDE68A',
    iconColor: '#D97706',
    categoryKey: 'Data Science',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Deploy, scale and manage modern infrastructure',
    icon: Cloud,
    iconBg: '#ECFDF5',
    iconBorder: '#A7F3D0',
    iconColor: '#059669',
    categoryKey: 'Cloud Computing',
  },
  {
    title: 'UI/UX Design',
    desc: 'Design beautiful and usable products',
    icon: PenNib,
    iconBg: '#FDF2F8',
    iconBorder: '#FBCFE8',
    iconColor: '#DB2777',
    categoryKey: 'UI/UX Design',
  },
  {
    title: 'Mobile App Development',
    desc: 'Build for Android & iOS',
    icon: DeviceMobile,
    iconBg: '#FFF7ED',
    iconBorder: '#FED7AA',
    iconColor: '#EA580C',
    categoryKey: 'Mobile Dev',
  },
  {
    title: '1-on-1 Mentorship',
    desc: 'Personal guidance for faster growth',
    icon: User,
    iconBg: '#EFF6FF',
    iconBorder: '#BFDBFE',
    iconColor: '#155EEF',
    categoryKey: 'all',
  },
]

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCourses = selectedCategory
    ? selectedCategory === 'all'
      ? COURSES
      : COURSES.filter((c) => c.category === selectedCategory || c.title.toLowerCase().includes(selectedCategory.toLowerCase()))
    : COURSES.slice(0, 4)

  return (
    <section id="courses" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="container">
        {/* Exact Header matching Reference Image 1 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] block mb-1">
              POPULAR COURSES
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
              <h2 className="font-['Plus_Jakarta_Sans'] font-black text-2xl sm:text-3xl text-[#101B3C] tracking-tight">
                Find your next skill
              </h2>
              <p className="text-sm text-slate-500 font-['Inter']">
                Choose from our industry-focused programs designed for real-world careers.
              </p>
            </div>
          </div>

          <a
            href="#courses"
            onClick={() => setSelectedCategory('all')}
            className="text-sm font-semibold text-[#155EEF] hover:text-[#124BBF] inline-flex items-center gap-1 shrink-0 group"
          >
            <span>View All Courses</span>
            <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* The Exact 6 Skill Cards in a Row (from Reference Image 1) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-10">
          {CATEGORY_CARDS.map((card) => {
            const Icon = card.icon
            const isSelected = selectedCategory === card.categoryKey

            return (
              <button
                type="button"
                key={card.title}
                onClick={() => setSelectedCategory(isSelected ? null : card.categoryKey)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-[#155EEF] bg-blue-50/40 shadow-sm'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Top Row: Icon + Arrow */}
                <div className="flex items-center justify-between w-full mb-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: card.iconBg,
                      borderColor: card.iconBorder,
                      color: card.iconColor,
                    }}
                  >
                    <Icon size={20} weight="duotone" />
                  </div>

                  <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#155EEF] group-hover:border-[#155EEF]/40 transition-colors">
                    <CaretRight size={13} weight="bold" />
                  </div>
                </div>

                {/* Bottom: Title & Subtext */}
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm text-[#101B3C] leading-snug mb-1 group-hover:text-[#155EEF] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed Course Cards Grid (Filtered View) */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#101B3C]">
              {selectedCategory && selectedCategory !== 'all'
                ? `Showing ${selectedCategory} Programs`
                : 'Featured Cohorts Available for Enrollment'}
            </h3>
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="text-xs font-semibold text-[#155EEF] hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#101B3C] text-[11px] font-bold shadow-xs">
                    {course.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#101B3C] line-clamp-2 mb-2">
                      {course.title}
                    </h4>

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
                      className="px-3 py-1.5 rounded-lg bg-[#155EEF] hover:bg-[#124BBF] text-white text-xs font-semibold shadow-2xs"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
