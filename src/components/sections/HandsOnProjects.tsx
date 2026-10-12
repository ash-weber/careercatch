import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, GithubLogo, Sparkle } from '@phosphor-icons/react'
import { PROJECTS } from '../../lib/constants'

export default function HandsOnProjects() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-widest uppercase mb-3">
              <Sparkle size={14} weight="fill" />
              <span>Real Work</span>
            </div>
            <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Projects That Go in Your Portfolio
            </h2>
          </div>
          <p className="font-['Inter_Tight'] text-sm md:text-base text-slate-600 max-w-md">
            Skip generic to-do apps. Build complex, real-world distributed architectures and client-ready products that prove your skills.
          </p>
        </div>

        {/* Diagonal staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            // Give even indices a slight diagonal vertical shift on desktop
            const offsetClass = idx % 2 === 1 ? 'lg:translate-y-6' : ''

            return (
              <motion.div
                key={project.name}
                initial={prefersReduced ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 overflow-hidden flex flex-col justify-between ${offsetClass}`}
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="font-['Outfit'] text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {project.name}
                    </h3>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer links */}
                <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-slate-100">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors"
                  >
                    <GithubLogo size={16} /> Source Code
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    View Demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
