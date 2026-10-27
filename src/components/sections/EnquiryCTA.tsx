"use client"

import { useState, type FormEvent } from 'react'
import {
  CheckCircle,
  CircleNotch,
  PaperPlaneRight,
  User,
  EnvelopeSimple,
  PhoneCall,
  Sparkle,
  ShieldCheck,
  GraduationCap,
  Clock,
  WhatsappLogo,
  Buildings,
  ArrowRight,
  FileText,
  Star,
} from '@phosphor-icons/react'

const TRACK_OPTIONS = [
  { id: 'fullstack', label: 'Full Stack Web', category: 'Web Dev' },
  { id: 'datascience', label: 'Data Science & AI', category: 'AI & Data' },
  { id: 'uiux', label: 'UI/UX Design', category: 'Design' },
  { id: 'cloud', label: 'Cloud Computing (AWS)', category: 'Cloud' },
  { id: 'reactnode', label: 'React & Node.js', category: 'Frontend' },
  { id: 'devops', label: 'DevOps & CI/CD', category: 'Infra' },
]

const BACKGROUND_OPTIONS = [
  'College Student / Fresher',
  'Working Professional (Switching to Tech)',
  'Upskilling Current Role',
  'Other',
]

export default function EnquiryCTA() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('Full Stack Web')
  const [learnerGoal, setLearnerGoal] = useState('College Student / Fresher')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.'
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address.'
    const cleanedPhone = phone.replace(/\D/g, '')
    if (!cleanedPhone || cleanedPhone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1100)
  }

  return (
    <section
      id="enquiry"
      className="py-20 md:py-28 bg-gradient-to-b from-[#F0F6FF]/70 via-white to-[#F0F6FF]/60 text-slate-800 border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Anchor targets so #contact and #enroll also point directly here */}
      <div id="contact" className="absolute -top-10" />
      <div id="enroll" className="absolute -top-10" />

      {/* Ambient background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 20%, rgba(21, 94, 239, 0.08), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255, 159, 28, 0.06), transparent 50%)`,
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Admissions &amp; 1:1 Career Counseling</span>
          </div>

          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            Start Your Tech Career Journey Today
          </h2>

          <p className="font-['Inter'] text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Speak directly with our senior mentors and career advisors. Get a personalized roadmap, course syllabus, and eligible scholarship evaluation in minutes.
          </p>
        </div>

        {/* 2-Column Conversion Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Value Proposition & Direct Contact Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Value Props Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkle size={20} weight="fill" className="text-amber-500" />
                <span>What You Get in Your Session</span>
              </h3>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <GraduationCap size={18} weight="fill" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">1:1 Career Roadmap</strong>
                    <span className="text-slate-500 text-xs leading-relaxed">
                      Personalized timeline mapped to your background and target engineering role.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <Clock size={18} weight="fill" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">15-Min Priority Callback</strong>
                    <span className="text-slate-500 text-xs leading-relaxed">
                      Connect with an active tech practitioner or dedicated academic advisor.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100">
                    <FileText size={18} weight="fill" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">2026 Syllabus &amp; Project Dossier</strong>
                    <span className="text-slate-500 text-xs leading-relaxed">
                      Full breakdown of capstone projects, salary data, and hiring partner list.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                    <Sparkle size={18} weight="fill" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Up to 40% Merit Scholarship</strong>
                    <span className="text-slate-500 text-xs leading-relaxed">
                      Check your eligibility for early enrollment fee waivers and 0% EMI plans.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Helpline & Office Hub Card */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-blue-700/15 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                    Direct Admissions Line
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active Now
                  </span>
                </div>

                <div>
                  <a
                    href="tel:18008902282"
                    className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-black text-white hover:text-blue-100 transition-colors flex items-center gap-2"
                  >
                    <PhoneCall size={24} weight="fill" className="text-amber-400" />
                    <span>1800-890-2282</span>
                  </a>
                  <p className="text-xs text-blue-100/80 mt-1">
                    Toll-free • Available Mon – Sat, 9:00 AM – 9:00 PM IST
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <WhatsappLogo size={16} weight="fill" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <div className="text-[11px] text-blue-100/90 flex items-center gap-1.5">
                    <Buildings size={14} weight="fill" />
                    <span>Hubs: Bengaluru &amp; Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof Snippet */}
            <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-4 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    src="/images/faculty/ravi-kumar.jpg"
                    alt="Learner"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/images/faculty/priya-sharma.jpg"
                    alt="Learner"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/images/faculty/arjun-mehta.jpg"
                    alt="Learner"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <span className="font-semibold text-slate-800">1,240+ Enrolled this Month</span>
              </div>

              <div className="flex items-center gap-1 text-amber-600 font-bold">
                <Star size={14} weight="fill" />
                <span>4.9 / 5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enrollment & Counseling Form */}
          <div className="lg:col-span-7">
            <div
              id="enrollment-form-card"
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-blue-900/5 p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500" />

              {submitted ? (
                <div className="py-8 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle size={40} weight="fill" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    Application Received!
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{fullName}</strong>! We have dispatched the <strong className="text-blue-700">{selectedTrack}</strong> curriculum dossier to your email.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left mb-6 text-xs text-slate-700 space-y-2">
                    <p className="font-bold text-slate-900">What happens next?</p>
                    <p className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                      <span>Detailed syllabus &amp; project briefs delivered to <strong>{email}</strong>.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                      <span>An academic advisor will call you on <strong>{phone}</strong> within 15 minutes.</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                      <span>Personalized scholarship evaluation and batch seat reservation.</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFullName('')
                      setEmail('')
                      setPhone('')
                      setMessage('')
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-5">
                    <div>
                      <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-slate-900">
                        Book Your Free 1:1 Counseling
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        No fees • Instant 2026 syllabus PDF • Direct mentor chat
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>6 Slots Open Today</span>
                    </span>
                  </div>

                  {/* Step 1: Program of Interest (Interactive Chips) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      1. Select Program of Interest <span className="text-blue-700">*</span>
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TRACK_OPTIONS.map((track) => {
                        const isSelected = selectedTrack === track.label
                        return (
                          <button
                            key={track.id}
                            type="button"
                            onClick={() => setSelectedTrack(track.label)}
                            className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-blue-50/80 border-blue-600 text-blue-900 shadow-xs'
                                : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                              {track.category}
                            </span>
                            <span className={`text-xs font-bold mt-1 line-clamp-1 ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                              {track.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 2: Personal Contact Information */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="form-full-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        2. Full Name <span className="text-blue-700">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User size={18} />
                        </div>
                        <input
                          id="form-full-name"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Vikramaditya Rathore"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address <span className="text-blue-700">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <EnvelopeSimple size={18} />
                          </div>
                          <input
                            id="form-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="vikram@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number <span className="text-blue-700">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-semibold text-xs">
                            +91
                          </div>
                          <input
                            id="form-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="98765 43210"
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Current Background */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      3. Current Background / Role
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BACKGROUND_OPTIONS.map((bg) => {
                        const isSelected = learnerGoal === bg
                        return (
                          <button
                            key={bg}
                            type="button"
                            onClick={() => setLearnerGoal(bg)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            {bg}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Step 4: Questions / Notes */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Questions or Career Goal (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Looking to switch to frontend, want to know about placement support and upcoming weekend batches..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-13 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 active:scale-[0.99] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-blue-700/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
                    >
                      {loading ? (
                        <>
                          <CircleNotch size={20} className="animate-spin" />
                          <span>Reserving Your Strategy Call...</span>
                        </>
                      ) : (
                        <>
                          <span>Start to Enroll • Claim Free Counseling</span>
                          <ArrowRight
                            size={18}
                            weight="bold"
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Guarantees & Privacy */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck size={16} weight="fill" className="text-emerald-600" />
                      <span>100% Free Consultation</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle size={16} weight="fill" className="text-blue-600" />
                      <span>No Spam Guarantee</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <PaperPlaneRight size={16} weight="fill" className="text-indigo-600" />
                      <span>Instant Syllabus PDF</span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
