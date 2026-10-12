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
    color: '#2563EB',
  },
  {
    title: 'Data Science & AI',
    desc: 'Python, ML, Deep Learning',
    icon: ChartLine,
    color: '#7C3AED',
  },
  {
    title: 'UI/UX Product Design',
    desc: 'Figma, Design Systems, Research',
    icon: PenNib,
    color: '#D97706',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'AWS, Docker, Kubernetes',
    icon: Cloud,
    color: '#0284C7',
  },
  {
    title: 'Mobile Development',
    desc: 'Flutter, React Native, iOS',
    icon: DeviceMobile,
    color: '#059669',
  },
  {
    title: 'Cybersecurity',
    desc: 'Ethical Hacking, Network Defense',
    icon: ShieldCheck,
    color: '#DC2626',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on click outside
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
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200'
            : 'bg-white border-b border-slate-200/80'
        }`}
        style={{ height: '70px' }}
      >
        <div className="container h-full flex items-center justify-between gap-4">
          {/* Left: Brand Logo + Courses Button */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0">
            <Logo iconSize={36} />

            {/* Vedantu-style Pill Courses Button */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setCoursesOpen(!coursesOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border-2 font-semibold text-sm transition-all cursor-pointer ${
                  coursesOpen
                    ? 'border-blue-600 bg-blue-50/60 text-blue-700 shadow-xs'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50/40 hover:text-blue-700'
                }`}
                aria-expanded={coursesOpen}
                aria-haspopup="true"
              >
                <span>Courses</span>
                <CaretDown
                  size={15}
                  weight="bold"
                  className={`transition-transform duration-200 ${
                    coursesOpen ? 'rotate-180 text-blue-700' : 'text-blue-600'
                  }`}
                />
              </button>

              {/* Courses Mega Dropdown Menu */}
              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 top-[calc(100%+10px)] w-88 md:w-[460px] bg-white border border-slate-200 rounded-2xl shadow-xl p-5 z-50"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                        Explore Learning Tracks
                      </span>
                      <a
                        href="#courses"
                        onClick={() => setCoursesOpen(false)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        All Courses <ArrowRight size={13} />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {COURSE_TRACKS.map((track) => {
                        const Icon = track.icon
                        return (
                          <a
                            key={track.title}
                            href="#courses"
                            onClick={() => setCoursesOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-slate-200/70"
                              style={{ backgroundColor: `${track.color}15`, color: track.color }}
                            >
                              <Icon size={20} weight="duotone" />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug truncate">
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

                    <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">
                        Need help picking a track?
                      </span>
                      <a
                        href="#enquiry"
                        onClick={() => setCoursesOpen(false)}
                        className="font-bold text-blue-700 hover:text-blue-800"
                      >
                        Free Career Guidance &rarr;
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Center: Clean Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Expert Call + Sign In + Enroll Now (Desktop) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 shrink-0">
            {/* Talk to an expert widget */}
            <a
              href="tel:18008902282"
              className="flex items-center gap-2.5 group text-decoration-none mr-1"
              aria-label="Talk to an academic expert at 1800-890-2282"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-100/70 group-hover:border-blue-200 transition-colors shrink-0">
                <PhoneCall size={17} weight="bold" />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-medium text-slate-500 leading-none block mb-0.5 group-hover:text-slate-700 transition-colors">
                  Talk to an expert
                </span>
                <span className="text-sm font-bold text-slate-900 leading-none block tracking-tight">
                  1800-890-2282
                </span>
              </div>
            </a>

            {/* Sign In Button */}
            <a
              href="#enquiry"
              className="px-4 py-2 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-all shadow-xs"
            >
              Sign In
            </a>

            {/* Enroll Now Button */}
            <motion.a
              href="#enquiry"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm shadow-blue-600/20"
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile Right Controls: Phone Icon + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:18008902282"
              className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"
              aria-label="Call Expert"
            >
              <PhoneCall size={18} weight="bold" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] bg-white border-b border-slate-200 shadow-xl z-40 p-6 md:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            {/* Call Expert Banner on Mobile */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <PhoneCall size={20} weight="bold" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Have doubts? Call free
                  </span>
                  <a
                    href="tel:18008902282"
                    className="text-base font-bold text-slate-900 block"
                  >
                    1800-890-2282
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1 mb-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Popular Tracks Preview */}
            <div className="pt-4 border-t border-slate-100 mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-3 px-3">
                Popular Tracks
              </span>
              <div className="grid grid-cols-2 gap-2">
                {COURSE_TRACKS.slice(0, 4).map((track) => (
                  <a
                    key={track.title}
                    href="#courses"
                    onClick={() => setMobileOpen(false)}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-700 block truncate"
                  >
                    {track.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="#enquiry"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-center rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#enquiry"
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-center rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
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
