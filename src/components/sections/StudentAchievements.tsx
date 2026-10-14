import { motion, useReducedMotion } from 'motion/react'
import {
  SealCheck,
  TrendUp,
  Buildings,
  ArrowRight,
  Sparkle,
  Timer,
  CheckCircle,
  RocketLaunch,
} from '@phosphor-icons/react'

interface StudentStory {
  name: string
  prevRole: string
  newRole: string
  company: string
  salary: string
  hike: string
  duration: string
  avatar: string
  course: string
  quote: string
  tag: string
}

const STUDENT_STORIES: StudentStory[] = [
  {
    name: 'Aarav Patel',
    prevRole: 'Non-tech (B.Com)',
    newRole: 'Associate SDE',
    company: 'Razorpay',
    salary: '₹14 LPA',
    hike: '+230% Hike',
    duration: '4 Months',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    course: 'Full Stack Web Dev',
    quote: 'Built a real-time checkout engine in Capstone that became the center of my technical rounds.',
    tag: 'Non-Tech to SDE',
  },
  {
    name: 'Shreya Kulkarni',
    prevRole: 'Junior QA Tester',
    newRole: 'Backend Engineer',
    company: 'Swiggy',
    salary: '₹16 LPA',
    hike: '+180% Hike',
    duration: '3.5 Months',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    course: 'React & Node.js Advanced',
    quote: 'Mentor code reviews broke down distributed microservices until I could architect them with ease.',
    tag: 'QA to Backend',
  },
  {
    name: 'Nikhil Sharma',
    prevRole: 'Fresher (Tier-3)',
    newRole: 'Data Engineer',
    company: 'Amazon',
    salary: '₹18 LPA',
    hike: 'Top Offer',
    duration: '5 Months',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    course: 'Data Science & ML',
    quote: 'The production BigQuery pipelines and model deployments were 10x more practical than college.',
    tag: 'Tier-3 to Big Tech',
  },
  {
    name: 'Ananya Sen',
    prevRole: 'Graphic Designer',
    newRole: 'Product Designer',
    company: 'Flipkart',
    salary: '₹11 LPA',
    hike: '+140% Hike',
    duration: '3 Months',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    course: 'UI/UX Design Masterclass',
    quote: 'Shifted from static visuals to design systems, user journeys, and interactive Figma prototypes.',
    tag: 'Graphic to Product',
  },
]

export default function StudentAchievements() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="achievements" className="py-24 md:py-32 bg-slate-50/70 text-slate-800 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
            <SealCheck size={16} weight="fill" className="text-blue-600" />
            <span>Verified Outcomes • 2024–2026 Cohorts</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            Results Our Students{' '}
            <span className="bg-linear-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
              Actually Achieve
            </span>
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transparent, verified career transitions from zero tech background and junior roles to high-growth engineering teams.
          </p>
        </div>

        {/* Top Bento Metric Strip: 3 Distinct Calibrated Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Starting CTC */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-3 py-1 rounded-full">
                  <Sparkle size={13} weight="fill" /> +185% Avg Career Jump
                </span>
                <div className="w-10 h-10 rounded-2xl bg-blue-50/80 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
                  <TrendUp size={22} weight="bold" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    ₹12 LPA
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Median CTC
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-slate-800">
                  Average Starting Salary
                </h3>
                <p className="text-xs text-slate-500 font-['Inter'] mt-0.5">
                  Across all engineering, data & design graduates
                </p>
              </div>
            </div>

            {/* Salary trajectory benchmark bar */}
            <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-100 mt-2">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-400">Pre-CareerCatch: ₹3.8L</span>
                <span className="text-blue-700 font-bold">Post-Graduation: ₹12.0L</span>
              </div>
              <div className="h-2 w-full bg-slate-200/70 rounded-full overflow-hidden flex">
                <div className="w-[32%] bg-slate-400 rounded-l-full" />
                <div className="w-[68%] bg-linear-to-r from-blue-500 to-indigo-600 rounded-r-full" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Hiring Velocity (45 Days) */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full">
                  <Timer size={13} weight="fill" /> 3.2x Faster Hiring
                </span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50/80 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform">
                  <RocketLaunch size={22} weight="bold" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    45 Days
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Fast Track
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-slate-800">
                  Avg Days to First Interview
                </h3>
                <p className="text-xs text-slate-500 font-['Inter'] mt-0.5">
                  From final capstone evaluation to recruiter calls
                </p>
              </div>
            </div>

            {/* 3-Step Milestone Road */}
            <div className="grid grid-cols-3 gap-2 mt-2 text-center">
              <div className="bg-slate-50/90 rounded-2xl p-2.5 border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Day 15</span>
                <span className="text-xs font-semibold text-slate-700 block truncate">Portfolio Sync</span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-2.5 border border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Day 30</span>
                <span className="text-xs font-semibold text-slate-700 block truncate">Mock Drills</span>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-2.5 border border-emerald-200/70">
                <span className="text-[10px] text-emerald-600 font-bold block uppercase tracking-wider">Day 45</span>
                <span className="text-xs font-bold text-emerald-700 block truncate">1st Offer</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Hiring Network (200+ Partners) */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-3 py-1 rounded-full">
                  <Buildings size={13} weight="fill" /> Direct Referrals
                </span>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50/80 text-indigo-600 flex items-center justify-center border border-indigo-100 group-hover:scale-110 transition-transform">
                  <SealCheck size={22} weight="fill" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    200+
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Tech Partners
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-slate-800">
                  Hiring Partner Companies
                </h3>
                <p className="text-xs text-slate-500 font-['Inter'] mt-0.5">
                  Direct hiring mandates across MNCs and product unicorns
                </p>
              </div>
            </div>

            {/* Partner Badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['Razorpay', 'Amazon', 'Swiggy', 'Flipkart', 'Microsoft', 'Atlassian'].map((partner) => (
                <span
                  key={partner}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 transition-colors"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Strip: 4 Interactive Student Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_STORIES.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 relative group"
            >
              <div>
                {/* Header: Avatar with verified pill + Salary & Hike */}
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 border-2 border-white shadow-xs">
                      <CheckCircle size={12} weight="fill" />
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-['Plus_Jakarta_Sans'] text-lg font-black text-slate-900 tracking-tight block">
                      {student.salary}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
                      <TrendUp size={11} weight="bold" /> {student.hike}
                    </span>
                  </div>
                </div>

                {/* Name, Tag, Course */}
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-slate-900 tracking-tight">
                      {student.name}
                    </h4>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      {student.tag}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block">
                    {student.course}
                  </span>
                </div>

                {/* Career Trajectory Roadmap Box */}
                <div className="bg-slate-50/90 rounded-2xl p-3 border border-slate-100 mb-4">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    <span>From</span>
                    <span className="text-blue-600 font-bold">{student.duration}</span>
                    <span>To</span>
                  </div>
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-xs text-slate-500 font-medium truncate max-w-[42%]">
                      {student.prevRole}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <ArrowRight size={11} weight="bold" />
                    </div>
                    <span className="text-xs text-slate-900 font-bold truncate max-w-[42%] text-right">
                      {student.newRole}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-2 mb-4 font-['Inter']">
                  "{student.quote}"
                </p>
              </div>

              {/* Card Footer: Company & Verified Placed Badge */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 font-bold text-slate-800 bg-slate-100/80 px-2.5 py-1 rounded-xl border border-slate-200/60">
                  <Buildings size={14} className="text-blue-600" /> {student.company}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/70">
                  <SealCheck size={13} weight="fill" /> Placed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
