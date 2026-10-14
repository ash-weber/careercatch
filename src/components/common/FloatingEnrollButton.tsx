import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  RocketLaunch,
  Sparkle,
  ArrowRight,
  X,
  GraduationCap,
  CheckCircle,
} from '@phosphor-icons/react'

export default function FloatingEnrollButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Show after scrolling past 250px or after 2.5 seconds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2500)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleScrollToEnroll = () => {
    const target = document.getElementById('enquiry') || document.getElementById('enroll')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Highlight the form card briefly
      const formCard = document.getElementById('enrollment-form-card')
      if (formCard) {
        formCard.classList.add('ring-4', 'ring-blue-500/40', 'scale-[1.01]')
        setTimeout(() => {
          formCard.classList.remove('ring-4', 'ring-blue-500/40', 'scale-[1.01]')
        }, 1800)
      }
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 select-none font-['Inter']"
      role="complementary"
      aria-label="Enrollment quick action"
    >
      <AnimatePresence mode="wait">
        {isMinimized ? (
          /* Minimized circular button with notification badge */
          <motion.button
            key="minimized"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMinimized(false)}
            className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white shadow-xl shadow-blue-600/30 border border-blue-400/30 cursor-pointer"
            title="Open Enrollment - 40% Scholarship Active"
            aria-label="Expand enrollment prompt"
          >
            <RocketLaunch size={26} weight="fill" className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-bold text-slate-900 items-center justify-center">
                %
              </span>
            </span>
          </motion.button>
        ) : (
          /* Catchy expanded floating pill banner */
          <motion.div
            key="expanded"
            initial={{ y: 30, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-blue-200/90 shadow-2xl shadow-blue-900/15 p-3 sm:p-3.5 max-w-[340px] sm:max-w-[380px] overflow-hidden"
          >
            {/* Top decorative gradient glow accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500" />

            {/* Header row with status & minimize button */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  Admissions Open
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80 flex items-center gap-1">
                  <Sparkle size={11} weight="fill" /> Up to 40% Off
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMinimized(true)
                  }}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Minimize"
                  aria-label="Minimize enrollment prompt"
                >
                  <X size={14} weight="bold" />
                </button>
              </div>
            </div>

            {/* Content & Action */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                <GraduationCap size={24} weight="fill" />
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug">
                  Start to Enroll Today 🚀
                </p>
                <p className="text-[11px] text-slate-500 truncate">
                  Free 1:1 Mentorship • 2026 Tech Cohort
                </p>
              </div>
            </div>

            {/* Clickable CTA button */}
            <button
              type="button"
              onClick={handleScrollToEnroll}
              className="mt-3 w-full py-2.5 px-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 active:scale-[0.99] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-blue-700/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Apply for Cohort &amp; Scholarship</span>
              <ArrowRight
                size={14}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>

            {/* Micro reassurance */}
            <div className="mt-1.5 flex items-center justify-center gap-3 text-[10px] text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle size={11} weight="fill" className="text-emerald-600" /> 100% Free Counseling
              </span>
              <span>•</span>
              <span>Instant Syllabus PDF</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
