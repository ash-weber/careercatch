import { motion } from 'motion/react'
import {
  GraduationCap,
  Laptop,
  UsersThree,
  Briefcase,
  ArrowRight,
  Star,
  ChartLineUp,
  CaretRight,
} from '@phosphor-icons/react'

export default function HeroBanner() {
  return (
    <section id="hero" className="py-4 sm:py-6 bg-white">
      <div className="container">
        {/* Contained Hero Card - Exactly matching the reference image */}
        <div
          className="relative rounded-3xl md:rounded-[32px] overflow-hidden border border-[#DBEAFE]/80 p-6 sm:p-10 lg:p-12 xl:p-14"
          style={{
            background: 'linear-gradient(135deg, #F0F6FF 0%, #E8F1FD 50%, #F5F9FF 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(21, 94, 239, 0.15) 0%, transparent 70%)' }}
          />

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
            <span className="w-6 h-2 bg-[#155EEF] rounded-full inline-block" />
            <span className="w-2 h-2 bg-slate-300 rounded-full inline-block" />
            <span className="w-2 h-2 bg-slate-300 rounded-full inline-block" />
          </div>
        </div>
      </div>
    </section>
  )
}
