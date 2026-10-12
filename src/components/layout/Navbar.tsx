import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  List,
  X,
  CaretDown,
  PhoneCall,
  Code,
  ChartLine,
  PenNib,
  Cloud,
  DeviceMobile,
  ShieldCheck,
  ArrowRight,
} from '@phosphor-icons/react'
import Logo from '../common/Logo'

const NAV_LINKS = [
  { label: 'Popular Tracks', href: '#courses' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Placements', href: '#achievements' },
  { label: 'Why Us', href: '#why-learn' },
  { label: 'FAQ', href: '#faq' },
]

const COURSE_TRACKS = [
  {
    title: 'Full Stack Development',
    desc: 'MERN, Next.js, System Design',
    icon: Code,
    color: '#155EEF',
  },
  {
    title: 'Data Science & AI',
    desc: 'Python, ML, Deep Learning',
    icon: ChartLine,
    color: '#7C3AED',
  },
  {
    title: 'UI/UX Design',
    desc: 'Figma, Design Systems, Research',
    icon: PenNib,
    color: '#FF9F1C',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'AWS, Docker, Kubernetes',
    icon: Cloud,
    color: '#059669',
  },
  {
    title: 'Mobile App Development',
    desc: 'Flutter, React Native, iOS',
    icon: DeviceMobile,
    color: '#EA580C',
  },
  {
    title: '1-on-1 Mentorship',
    desc: 'Mock Interviews & Code Reviews',
    icon: ShieldCheck,
    color: '#0284C7',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
          scrolled ? 'shadow-xs border-b border-slate-200/80' : 'border-b border-slate-100'
        }`}
        style={{ height: '68px' }}
      >
        <div className="container h-full flex items-center justify-between gap-4">
          {/* Left: Brand Logo + Courses Button */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            <Logo />

            {/* Courses Outline Pill Button */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCoursesOpen(!coursesOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  coursesOpen
                    ? 'border-[#155EEF] bg-blue-50/50 text-[#155EEF]'
                    : 'border-slate-300 hover:border-slate-400 text-slate-700 bg-white'
                }`}
                aria-expanded={coursesOpen}
              >
                <span>Courses</span>
                <CaretDown
                  size={14}
                  weight="bold"
                  className={`transition-transform duration-200 ${
                    coursesOpen ? 'rotate-180 text-[#155EEF]' : 'text-slate-500'
                  }`}
                />
              </button>

              {/* Courses Dropdown */}
              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-[calc(100%+8px)] w-84 md:w-[420px] bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {COURSE_TRACKS.map((track) => {
                        const Icon = track.icon
                        return (
                          <a
                            key={track.title}
                            href="#courses"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${track.color}15`, color: track.color }}
                            >
                              <Icon size={18} weight="duotone" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-xs font-bold text-[#101B3C] group-hover:text-[#155EEF] transition-colors leading-tight truncate">
                                {track.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 leading-tight mt-0.5 truncate">
                                {track.desc}
                              </p>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-slate-600 hover:text-[#155EEF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-3.5 lg:gap-4 shrink-0">
            {/* Talk to our expert */}
            <a
              href="tel:18008902282"
              className="flex items-center gap-2 group text-decoration-none mr-1"
              aria-label="Talk to our expert at 1800-890-2282"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#155EEF] flex items-center justify-center border border-blue-100 group-hover:bg-blue-100 transition-colors shrink-0">
                <PhoneCall size={15} weight="bold" />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-medium text-slate-500 leading-none block mb-0.5">
                  Talk to our expert
                </span>
                <span className="text-[13px] font-bold text-[#101B3C] leading-none block tracking-tight">
                  1800-890-2282
                </span>
              </div>
            </a>

            {/* Sign In Button */}
            <a
              href="#enquiry"
              className="px-3.5 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              Sign In
            </a>

            {/* Enroll Now Button */}
            <a
              href="#enquiry"
              className="px-4 py-1.5 rounded-lg bg-[#155EEF] hover:bg-[#124BBF] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs inline-flex items-center gap-1.5 active:scale-[0.98]"
            >
              <span>Enroll Now</span>
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[68px] bg-white border-b border-slate-200 shadow-xl z-40 p-5 md:hidden"
          >
            <div className="space-y-1 mb-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#155EEF] rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <a
                href="#enquiry"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-center rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs"
              >
                Sign In
              </a>
              <a
                href="#enquiry"
                onClick={() => setMobileOpen(false)}
                className="py-2 text-center rounded-lg bg-[#155EEF] text-white font-semibold text-xs"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
