"use client"

import {
  GraduationCap,
  Laptop,
  UsersThree,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
  Star,
  ChartLineUp,
  CaretRight,
  Code,
  ChartBar,
  Cloud,
  PenNib,
  DeviceMobile,
  Sparkle,
} from '@phosphor-icons/react'

const POPULAR_TRACKS = [
  {
    role: 'Full Stack Development',
    highlight: 'MERN · Next.js · TS',
    icon: Code,
    accent: '#155EEF',
    iconBg: '#EFF6FF',
    badge: 'High Demand',
    href: '#courses',
  },
  {
    role: 'Data Science & AI',
    highlight: 'Python · ML · GenAI',
    icon: ChartBar,
    accent: '#7C3AED',
    iconBg: '#F5F3FF',
    badge: 'Trending',
    href: '#courses',
  },
  {
    role: 'Cloud & DevOps',
    highlight: 'AWS · Docker · K8s',
    icon: Cloud,
    accent: '#059669',
    iconBg: '#ECFDF5',
    badge: 'Enterprise',
    href: '#courses',
  },
  {
    role: 'UI/UX Design',
    highlight: 'Figma · Design Systems',
    icon: PenNib,
    accent: '#DB2777',
    iconBg: '#FDF2F8',
    badge: 'Creative',
    href: '#courses',
  },
  {
    role: 'Mobile App Dev',
    highlight: 'Flutter · iOS · Android',
    icon: DeviceMobile,
    accent: '#EA580C',
    iconBg: '#FFF7ED',
    badge: 'Fast Track',
    href: '#courses',
  },
  {
    role: '1-on-1 Mentorship',
    highlight: 'Top Tech Leads',
    icon: UsersThree,
    accent: '#0284C7',
    iconBg: '#F0F9FF',
    badge: 'Personalized',
    href: '#mentors',
  },
]

export default function HeroBanner() {
  return (
    <section id="hero" className="pt-4 sm:pt-6 pb-12 sm:pb-16 bg-white relative">
      <div className="container relative">
        {/* Contained Hero Card (Light Ice Blue with Ambient Glow) */}
        <div
          className="relative rounded-3xl md:rounded-[36px] overflow-hidden border border-[#DBEAFE]/80 p-6 sm:p-10 lg:p-12 xl:p-14 pb-20 sm:pb-24 lg:pb-28"
          style={{
            background: 'linear-gradient(135deg, #F0F6FF 0%, #E8F1FD 50%, #F5F9FF 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(21, 94, 239, 0.15) 0%, transparent 70%)' }}
          />

          {/* Top Section: Headlines & Mentors */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Column: Admissions, Headline, Bullets, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Admissions Open Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9F1C] text-slate-950 font-bold text-xs uppercase tracking-wider mb-5 shadow-xs">
                <GraduationCap size={16} weight="fill" />
                <span>ADMISSIONS OPEN · BATCH 2026</span>
              </div>

              {/* Exact 3-color Headline: BUILD SKILLS. (Navy) / BUILD YOUR (Blue) / FUTURE. (Orange) */}
              <h1 className="font-['Plus_Jakarta_Sans'] font-black tracking-tight leading-[1.06] text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] mb-4">
                <span className="text-[#101B3C] block">BUILD SKILLS.</span>
                <span className="block mt-1">
                  <span className="text-[#155EEF]">BUILD YOUR </span>
                  <span className="text-[#FF9F1C]">FUTURE.</span>
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="font-['Inter'] text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
                Industry-led tech programs with live classes, hands-on projects and 1-on-1 mentorship from top engineers.
              </p>

              {/* Three Value-Proposition Bullets */}
              <div className="space-y-4 mb-8 w-full max-w-lg">
                {/* Item 1: Live Interactive Classes */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-blue-100/80 text-[#155EEF] flex items-center justify-center shrink-0">
                    <Laptop size={20} weight="fill" />
                  </div>
                  <div>
                    <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-[#101B3C] leading-snug">
                      Live Interactive Classes
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Learn by doing with real-world projects
                    </p>
                  </div>
                </div>

                {/* Item 2: Mentorship from Industry Experts */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#FF9F1C] flex items-center justify-center shrink-0">
                    <UsersThree size={20} weight="fill" />
                  </div>
                  <div>
                    <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-[#101B3C] leading-snug">
                      Mentorship from Industry Experts
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Get guidance from senior engineers
                    </p>
                  </div>
                </div>

                {/* Item 3: Placement Support */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
                    <Briefcase size={20} weight="fill" />
                  </div>
                  <div>
                    <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-[#101B3C] leading-snug">
                      Placement Support
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Dedicated placement cell with 200+ hiring partners
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#124BBF] text-white font-semibold text-sm sm:text-base transition-all shadow-sm active:scale-[0.98]"
                >
                  <span>Explore Programs</span>
                  <ArrowRight size={16} weight="bold" />
                </a>

                <a
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm sm:text-base transition-all shadow-2xs"
                >
                  <span>View Curriculum</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual with Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Decorative Accent Sparkle in top-right */}
              <div className="absolute -top-3 -right-2 text-[#FF9F1C] pointer-events-none hidden sm:block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                </svg>
              </div>

              <div className="relative w-full max-w-[520px] aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-slate-200/70 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                  alt="Students coding together on laptop in modern campus"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Top-Left Floating Rating Badge */}
                <div className="absolute top-4 left-4 p-2.5 px-3.5 rounded-xl bg-[#101B3C]/85 backdrop-blur-md text-white border border-white/15 shadow-lg">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold">
                    <Star size={14} weight="fill" className="text-amber-400" />
                    <span>4.9/5 Learner Rating</span>
                  </div>
                  <span className="text-[11px] text-slate-300 block mt-0.5">
                    10,000+ students trained
                  </span>
                </div>

                {/* Bottom-Right Floating Mentorship Card */}
                <div className="absolute bottom-4 right-4 p-3.5 px-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
                    <ChartLineUp size={20} weight="bold" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#101B3C] leading-snug block">
                      Mentorship that moves you forward
                    </span>
                    <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                      Learn. Build. Grow. Get Hired.
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 ml-1">
                    <CaretRight size={13} weight="bold" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="pt-8 sm:pt-10 flex items-center justify-center gap-2 relative z-10">
            <span className="w-8 h-1.5 bg-[#155EEF] rounded-full inline-block" />
            <span className="w-8 h-1.5 bg-slate-300/80 rounded-full inline-block" />
            <span className="w-8 h-1.5 bg-slate-300/80 rounded-full inline-block" />
            <span className="w-8 h-1.5 bg-slate-300/80 rounded-full inline-block" />
            <span className="w-8 h-1.5 bg-slate-300/80 rounded-full inline-block" />
          </div>
        </div>

        {/* CareerCatch Signature Popular Tracks Dock (Inspired by Vedantu, crafted for CareerCatch) */}
        <div className="-mt-14 sm:-mt-18 lg:-mt-22 relative z-20 px-2 sm:px-4 max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-[28px] border border-slate-200/80 p-5 sm:p-7 shadow-[0_20px_50px_-12px_rgba(21,94,239,0.10)]">
            {/* Header: Branded Pill + Subtext + Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#155EEF]/10 border border-[#155EEF]/20 text-[#155EEF] font-bold text-xs uppercase tracking-wider">
                  <Sparkle size={13} weight="fill" className="text-[#FF9F1C]" />
                  <span>Popular Career Tracks</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium hidden md:inline">
                  Industry-designed paths with live cohorts and verified placement records
                </span>
              </div>

              <a
                href="#courses"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#155EEF] hover:text-[#124BBF] group shrink-0"
              >
                <span>View all programs</span>
                <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* 6 High-Trust Career Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {POPULAR_TRACKS.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.role}
                    href={item.href}
                    className="group relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white hover:bg-[#F0F6FF]/40 border border-slate-200/80 hover:border-[#155EEF]/40 shadow-2xs hover:shadow-md hover:shadow-blue-500/8 transition-all duration-200 hover:-translate-y-1 text-decoration-none min-h-[135px] sm:min-h-[142px]"
                  >
                    {/* Top: Domain Icon + Micro Action Arrow */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-108 duration-200"
                        style={{ backgroundColor: item.iconBg, color: item.accent }}
                      >
                        <Icon size={22} weight="duotone" />
                      </div>

                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100 group-hover:bg-[#155EEF] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
                        <ArrowUpRight size={12} weight="bold" />
                      </div>
                    </div>

                    {/* Content: Role Title + Tech Stack Highlights */}
                    <div className="mt-3">
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-[13px] text-[#101B3C] group-hover:text-[#155EEF] transition-colors leading-snug line-clamp-2 mb-1">
                        {item.role}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight truncate">
                        {item.highlight}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
