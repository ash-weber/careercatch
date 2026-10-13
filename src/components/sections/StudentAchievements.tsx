import { motion, useReducedMotion } from 'motion/react'
import { Trophy, TrendUp, Buildings } from '@phosphor-icons/react'
import { ACHIEVEMENTS } from '../../lib/constants'

const STUDENT_STORIES = [
  {
    name: 'Aarav Patel',
    prevRole: 'Non-tech Graduate (B.Com)',
    newRole: 'Associate SDE',
    company: 'Razorpay',
    salary: '₹14 LPA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    course: 'Full Stack Web Dev',
  },
  {
    name: 'Shreya Kulkarni',
    prevRole: 'Junior QA Tester',
    newRole: 'Backend Engineer',
    company: 'Swiggy',
    salary: '₹16 LPA',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    course: 'React & Node.js Advanced',
  },
  {
    name: 'Nikhil Sharma',
    prevRole: 'Fresher (Tier-3 College)',
    newRole: 'Data Engineer',
    company: 'Amazon',
    salary: '₹18 LPA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    course: 'Data Science & ML',
  },
  {
    name: 'Ananya Sen',
    prevRole: 'Graphic Designer',
    newRole: 'Product Designer',
    company: 'Flipkart',
    salary: '₹11 LPA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    course: 'UI/UX Design Masterclass',
  },
]

export default function StudentAchievements() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 relative">
      <div className="container">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-eyebrow mb-2">Proven Outcomes</p>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Results Our Students Achieve
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 leading-relaxed">
            Real career transformations from everyday ambition into high-impact engineering careers.
          </p>
        </div>

        {/* Top Strip: 3 Oversized Metric Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-8 md:p-10 bg-linear-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-xl shadow-blue-900/15 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <span className="font-['Plus_Jakarta_Sans'] text-5xl md:text-6xl font-black tracking-tight block mb-2 text-white">
                {item.value}
              </span>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white/95">
                  {item.label}
                </h3>
                <span className="text-xs text-blue-200/90 font-['Inter']">
                  {item.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip: 4 Student Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_STORIES.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-blue-600/5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                  />
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                    <Trophy size={14} weight="fill" />
                    {student.salary}
                  </span>
                </div>

                <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900 mb-1 tracking-tight">
                  {student.name}
                </h4>
                <span className="text-xs text-blue-700 font-semibold block mb-4">
                  {student.course}
                </span>

                <div className="space-y-2 py-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="w-12 text-slate-400 font-medium">From:</span>
                    <span className="text-slate-500 line-through truncate">{student.prevRole}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-slate-900">
                    <span className="w-12 text-blue-700 font-semibold">To:</span>
                    <span className="text-emerald-700 font-bold truncate">{student.newRole}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
                  <Buildings size={14} className="text-blue-700" /> {student.company}
                </span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <TrendUp size={14} /> Placed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
