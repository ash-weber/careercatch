import { motion, useReducedMotion } from 'motion/react'
import { Star, Quotes } from '@phosphor-icons/react'
import { TESTIMONIALS } from '../../lib/constants'

export default function Testimonials() {
  const prefersReduced = useReducedMotion()

  const featured = TESTIMONIALS.filter((t) => t.featured)
  const standard = TESTIMONIALS.filter((t) => !t.featured)

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 relative">
      <div className="container">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-eyebrow mb-2">Student Voices</p>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 leading-relaxed">
            Genuine feedback from students who transformed their career trajectories with us.
          </p>
        </div>

        {/* 2 Featured Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featured.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 p-8 md:p-10 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-4 right-6 text-blue-500/10 select-none pointer-events-none">
                <Quotes size={96} weight="fill" />
              </div>

              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-1 text-amber-500 mb-5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={18} weight="fill" />
                  ))}
                </div>
                <p className="font-['Inter'] text-lg md:text-xl text-slate-800 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-base">
                    {item.name}
                  </h4>
                  <p className="font-['Inter'] text-xs text-slate-500">
                    {item.role} @ <span className="text-blue-700 font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standard.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} weight="fill" />
                  ))}
                </div>
                <p className="font-['Inter'] text-sm text-slate-600 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div className="min-w-0">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-slate-900 text-sm truncate">
                    {item.name}
                  </h4>
                  <p className="font-['Inter'] text-[11px] text-slate-500 truncate">
                    {item.role} &middot; <strong className="text-slate-700 font-medium">{item.company}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
