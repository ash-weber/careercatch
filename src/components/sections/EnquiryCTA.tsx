import { useState, type FormEvent } from 'react'
import { CheckCircle, CircleNotch, PaperPlaneRight } from '@phosphor-icons/react'

export default function EnquiryCTA() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState('Full Stack Web Development')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.'
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address.'
    if (!phone.trim() || phone.length < 10) errs.phone = 'Please provide a valid 10-digit phone number.'
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
    }, 1200)
  }

  return (
    <section
      id="enquiry"
      className="py-24 md:py-32 bg-linear-to-b from-slate-50 via-blue-50/30 to-slate-50 text-slate-800 border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Radial Blue Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(37, 99, 235, 0.08), transparent 70%)',
        }}
      />

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-eyebrow mb-2">Enrollment &amp; Counseling</p>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Start Your Career Journey Today
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Join 10,000+ ambitious learners building in-demand tech skills. Request a detailed syllabus and scholarship evaluation.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 rounded-[20px] bg-white border border-emerald-300 text-center max-w-lg mx-auto shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle size={36} weight="fill" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-slate-900 mb-2">
              Enquiry Received!
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. One of our academic counselors will reach out to you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setFullName('')
                setEmail('')
                setPhone('')
                setMessage('')
              }}
              className="px-6 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-[20px] bg-white border border-slate-200 text-left max-w-lg mx-auto shadow-xl shadow-blue-600/5 space-y-5"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
              >
                Full Name <span className="text-blue-700">*</span>
              </label>
              <input
                id="full-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Vikramaditya Rathore"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email & Phone grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
                >
                  Email Address <span className="text-blue-700">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vikram@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs"
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
                >
                  Phone Number <span className="text-blue-700">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs"
                />
                {errors.phone && (
                  <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Course Dropdown */}
            <div>
              <label
                htmlFor="course-select"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
              >
                Course Interested In
              </label>
              <select
                id="course-select"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs cursor-pointer"
              >
                <option value="Full Stack Web Development">Full Stack Web Development</option>
                <option value="Data Science & Machine Learning">Data Science &amp; Machine Learning</option>
                <option value="UI/UX Design Masterclass">UI/UX Design Masterclass</option>
                <option value="Cloud Computing with AWS">Cloud Computing with AWS</option>
                <option value="React & Node.js Advanced">React &amp; Node.js Advanced</option>
                <option value="DevOps & CI/CD Pipeline">DevOps &amp; CI/CD Pipeline</option>
              </select>
            </div>

            {/* Message / Background */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2"
              >
                Current Background / Goals (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your educational background or what role you are targeting..."
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white text-sm transition-all shadow-2xs resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-blue-700 hover:bg-blue-800 active:scale-[0.99] text-white font-semibold text-sm transition-all shadow-md shadow-blue-700/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <>
                  <CircleNotch size={18} className="animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Enquiry</span>
                  <PaperPlaneRight size={18} weight="fill" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-slate-500 pt-1">
              By submitting, you agree to receive program notifications. We respect your privacy &amp; never spam.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
