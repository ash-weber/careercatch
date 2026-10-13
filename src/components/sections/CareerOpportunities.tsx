import { motion, useReducedMotion } from 'motion/react'
import { Briefcase, ArrowRight, CheckCircle, Sparkle } from '@phosphor-icons/react'
import { HIRING_PARTNERS } from '../../lib/constants'

const ROLES = [
  { title: 'Full Stack Developer', avgLpa: '₹8 - 18 LPA', openings: '1,400+ Openings' },
  { title: 'Data Scientist & AI Eng', avgLpa: '₹10 - 24 LPA', openings: '980+ Openings' },
  { title: 'UI/UX & Product Designer', avgLpa: '₹7 - 16 LPA', openings: '620+ Openings' },
]

export default function CareerOpportunities() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="careers" className="py-20 md:py-28 bg-white text-slate-800 border-b border-slate-200/80 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Panel: Job Board Style */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-4">
              <Sparkle size={14} weight="fill" />
              <span>Career Outcomes</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Where CareerCatch Alumni Work
            </h2>
            <p className="font-['Inter'] text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              From high-growth hyper-scaling startups to global Fortune 500 tech leaders, our hiring network actively recruits directly from our graduating cohorts.
            </p>

            {/* Hiring Partners Logos Grid */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-4">
                Active Hiring Partners
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center">
                {HIRING_PARTNERS.map((slug) => (
                  <div
                    key={slug}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-slate-200 hover:border-blue-400 transition-colors shadow-2xs"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${slug}/0F172A`}
                      alt={slug}
                      className="h-6 w-auto max-w-20 object-contain opacity-85 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    <span className="text-[10px] text-slate-600 font-medium capitalize mt-2">
                      {slug}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {ROLES.map((role) => (
                <div
                  key={role.title}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-sm block mb-1">
                    {role.title}
                  </span>
                  <span className="text-xs font-bold text-amber-700 block">
                    {role.avgLpa}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {role.openings}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all shadow-md shadow-blue-700/20"
              >
                Apply for Placement Drive <ArrowRight size={16} />
              </a>
              <span className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <CheckCircle size={16} className="text-emerald-600" /> 100% placement support assistance
              </span>
            </div>
          </div>

          {/* Right Panel: Editorial Visual */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[20px] overflow-hidden border border-slate-200 aspect-4/5 bg-slate-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                alt="Students collaborating in modern tech office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[14px] bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Briefcase size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-sm">
                      CareerCatch Placement Cell
                    </h4>
                    <p className="font-['Inter'] text-xs text-slate-600">
                      Weekly mock HR drills &amp; automated ATS screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
