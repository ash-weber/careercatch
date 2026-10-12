import { motion, useReducedMotion } from 'motion/react'
import {
  VideoCamera,
  Question,
  TerminalWindow,
  Certificate,
  UsersThree,
  CodeBlock,
  ArrowRight,
} from '@phosphor-icons/react'

export default function CourseHighlights() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="highlights" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80 relative">
      <div className="container">
        <div className="mb-14">
          <p className="text-eyebrow mb-2">Curriculum Standards</p>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            What&apos;s Inside Every Course
          </h2>
          <p className="font-['Inter_Tight'] text-lg text-slate-600 max-w-2xl">
            Everything you need to go from absolute beginner to industry-ready engineer, backed by deep support.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large Cell 1: Curriculum Preview */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 rounded-2xl border border-slate-200/90 bg-white p-8 md:p-10 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 border border-blue-200/60">
                <CodeBlock size={26} weight="duotone" />
              </div>
              <span className="text-xs uppercase tracking-widest text-blue-700 font-semibold mb-2 block">
                Production-Grade Syllabus
              </span>
              <h3 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Curriculum Designed by Senior FAANG &amp; Unicorn Leads
              </h3>
              <p className="font-['Inter_Tight'] text-sm md:text-base text-slate-600 max-w-xl mb-6">
                Zero outdated tutorials or toy demos. Learn architectural patterns, automated testing, system design, and battle-tested codebases.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70">
                <span className="text-xl font-bold text-slate-900 font-['Outfit'] block">40+</span>
                <span className="text-xs text-slate-500 font-medium">Hands-on Modules</span>
              </div>
              <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70">
                <span className="text-xl font-bold text-slate-900 font-['Outfit'] block">120+</span>
                <span className="text-xs text-slate-500 font-medium">Coding Exercises</span>
              </div>
              <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/70">
                <span className="text-xl font-bold text-amber-700 font-['Outfit'] block">100%</span>
                <span className="text-xs text-slate-500 font-medium">Practical Repos</span>
              </div>
            </div>
          </motion.div>

          {/* Small Cell 1: Live Classes */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200/90 bg-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 border border-blue-200/60">
                <VideoCamera size={26} weight="duotone" />
              </div>
              <span className="font-['Outfit'] text-3xl font-bold text-slate-900 block mb-1">
                3x / Week
              </span>
              <h4 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2">
                Live Interactive Sessions
              </h4>
              <p className="font-['Inter_Tight'] text-sm text-slate-600">
                Real-time code along sessions with immediate feedback and screen-sharing help.
              </p>
            </div>
            <div className="pt-4 text-xs text-blue-700 font-semibold flex items-center gap-1 mt-4">
              90-day cloud recordings included <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Small Cell 2: Doubt Support */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-purple-200/70 bg-linear-to-br from-purple-50/40 via-white to-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center mb-6 border border-purple-200/80">
                <Question size={26} weight="duotone" />
              </div>
              <span className="font-['Outfit'] text-3xl font-bold text-slate-900 block mb-1">
                &lt; 15 Mins
              </span>
              <h4 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2">
                Fast Doubt Clearing
              </h4>
              <p className="font-['Inter_Tight'] text-sm text-slate-600">
                Dedicated Teaching Assistants online 10 AM to 10 PM to unblock your coding errors.
              </p>
            </div>
            <div className="pt-4 text-xs text-purple-700 font-semibold flex items-center gap-1 mt-4">
              Private Discord + 1-on-1 audio rooms <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Small Cell 3: Projects */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-emerald-200/70 bg-linear-to-br from-emerald-50/40 via-white to-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-6 border border-emerald-200/80">
                <TerminalWindow size={26} weight="duotone" />
              </div>
              <span className="font-['Outfit'] text-3xl font-bold text-slate-900 block mb-1">
                6+ Capstones
              </span>
              <h4 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2">
                Production Deployments
              </h4>
              <p className="font-['Inter_Tight'] text-sm text-slate-600">
                Deploy to Vercel, AWS, and Docker containers. Real domain URLs to impress recruiters.
              </p>
            </div>
            <div className="pt-4 text-xs text-emerald-700 font-semibold flex items-center gap-1 mt-4">
              GitHub commit verifications <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Small Cell 4: Verified Certificates */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-50/50 via-white to-white p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 border border-amber-200">
                <Certificate size={26} weight="duotone" />
              </div>
              <span className="font-['Outfit'] text-3xl font-bold text-amber-800 block mb-1">
                Verified ID
              </span>
              <h4 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2">
                Industry Certification
              </h4>
              <p className="font-['Inter_Tight'] text-sm text-slate-600">
                Shareable on LinkedIn with tamper-proof credential IDs and mentor endorsements.
              </p>
            </div>
            <div className="pt-4 text-xs text-amber-700 font-semibold flex items-center gap-1 mt-4">
              Recognized by 200+ partners <ArrowRight size={14} />
            </div>
          </motion.div>

          {/* Large Cell 2: Mentor Access */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 rounded-2xl border border-blue-200/80 bg-linear-to-r from-blue-50/60 via-white to-blue-50/30 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          >
            <div className="flex items-start md:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white shrink-0 flex items-center justify-center shadow-md shadow-blue-700/20">
                <UsersThree size={32} weight="duotone" />
              </div>
              <div>
                <h4 className="font-['Outfit'] text-xl md:text-2xl font-bold text-slate-900 mb-1">
                  1-on-1 Code Reviews &amp; Resume Audits
                </h4>
                <p className="font-['Inter_Tight'] text-sm text-slate-600 max-w-xl">
                  Get line-by-line PR feedback directly on GitHub from tech leads working at top product companies.
                </p>
              </div>
            </div>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm transition-all shadow-md shadow-blue-700/20 whitespace-nowrap"
            >
              Enroll Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
