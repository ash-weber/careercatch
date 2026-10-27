"use client"

import { motion, useReducedMotion } from 'motion/react'
import {
  Code,
  ChartBar,
  PenNib,
  Cloud,
  Shield,
  DeviceMobile,
  MegaphoneSimple,
  Brain,
  CaretRight,
} from '@phosphor-icons/react'
import { CATEGORIES } from '@/lib/constants'

const FEATURED_TRACKS = [
  {
    level: 'Beginner to Advanced',
    title: 'Software Development',
    tags: ['Full Stack MERN', 'React 19 & Next.js', 'System Design & DSA'],
    mentorImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    color: '#2563EB',
    bgColor: '#EFF6FF',
    borderColor: '#BFDBFE',
  },
  {
    level: 'High Demand Careers',
    title: 'Data Science & AI',
    tags: ['Python for Data', 'Machine Learning', 'BigQuery & SQL', 'GenAI & LLMs'],
    mentorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    borderColor: '#DDD6FE',
  },
  {
    level: 'Industry Essential',
    title: 'Cloud & Product Design',
    tags: ['AWS Solutions', 'Docker & Kubernetes', 'Figma Pro', 'UX Systems'],
    mentorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80',
    color: '#D97706',
    bgColor: '#FFFBEB',
    borderColor: '#FDE68A',
  },
]

const ICON_MAP: Record<string, React.ComponentType<{ size: number; color: string; weight: 'bold' }>> = {
  Code, ChartBar, PenNib, Cloud, Shield, DeviceMobile, MegaphoneSimple, Brain,
}

export default function CourseCategories() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="categories" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="container">
        {/* Vedantu-Style "Explore courses" Section Header */}
        <div className="mb-10 text-left">
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">
            Explore courses{' '}
            <span className="text-sm sm:text-base font-medium text-slate-500 font-['Inter_Tight']">
              (Beginner to Career Placed)
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-['Inter_Tight'] max-w-xl">
            Choose from comprehensive career roadmaps curated by tech leads from top engineering companies.
          </p>
        </div>

        {/* 3 Prominent Featured Domain Cards (Vedantu Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEATURED_TRACKS.map((track, i) => (
            <motion.div
              key={track.title}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-1.5"
                  style={{ color: track.color }}
                >
                  {track.level}
                </span>

                <h3 className="font-['Outfit'] text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {track.title}
                </h3>

                {/* Sub-Pills */}
                <div className="flex flex-col gap-2 mb-6 max-w-[62%]">
                  {track.tags.map((tag) => (
                    <a
                      key={tag}
                      href="#courses"
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-between transition-colors shadow-2xs"
                    >
                      <span className="truncate">{tag}</span>
                      <CaretRight size={13} className="text-slate-400 shrink-0 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Smiling Instructor/Mentor Visual in corner */}
              <div
                className="absolute right-0 bottom-0 w-36 h-44 rounded-tl-3xl overflow-hidden border-t-2 border-l-2"
                style={{
                  backgroundColor: track.bgColor,
                  borderColor: track.borderColor,
                }}
              >
                <img
                  src={track.mentorImg}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="#courses"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  View All Batches &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Categories Grid */}
        <div className="pt-6 border-t border-slate-100">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-5">
            More Tech Disciplines
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {CATEGORIES.map((cat, i) => {
              const Icon = ICON_MAP[cat.icon]
              return (
                <motion.a
                  key={cat.name}
                  href="#courses"
                  initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex flex-col items-center text-center p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all text-decoration-none group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-2 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shadow-2xs">
                    {Icon && <Icon size={20} color="#2563EB" weight="bold" />}
                  </div>
                  <span className="font-['Outfit'] font-bold text-xs text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-0.5">
                    {cat.count} courses
                  </span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
