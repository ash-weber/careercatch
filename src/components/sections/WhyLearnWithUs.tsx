import { motion, useReducedMotion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'

const ROWS = [
  {
    imageLeft: true,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    imageAlt: 'Live mentoring session on video call',
    headline: 'Live Mentoring, Not Recorded Lectures',
    body: 'Every cohort runs with weekly live sessions where you can ask questions, get real-time feedback on your code, and learn alongside peers facing the same problems.',
    points: ['Weekly 1:1 sessions', 'Real-time doubt clearing', 'Industry Q&A panels'],
  },
  {
    imageLeft: false,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'Career support and resume review',
    headline: 'Career Support Until You\'re Hired',
    body: 'We don\'t disappear after you finish the course. Our career team reviews your resume, runs mock interviews, and connects you directly with recruiters at hiring partners.',
    points: ['Resume & portfolio review', 'Mock technical interviews', 'Direct recruiter connections'],
  },
]

export default function WhyLearnWithUs() {
  const prefersReduced = useReducedMotion()
  const reveal = (delay: number) => prefersReduced ? {} : {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }

  return (
    <section id="why-learn" className="section-pad" style={{ background: 'var(--bg-base)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <motion.p {...reveal(0)} className="text-eyebrow" style={{ marginBottom: '0.75rem' }}>
            Why Learn With Us
          </motion.p>
          <motion.h2 {...reveal(0.1)} className="text-display-l" style={{ color: 'var(--text-primary)' }}>
            Built for Outcomes, Not Certificates
          </motion.h2>
        </div>

        {/* Two alternating rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {ROWS.map((row, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}>
              {/* Image */}
              <motion.div
                {...reveal(0.1)}
                style={{ order: row.imageLeft ? 0 : 1, borderRadius: 20, overflow: 'hidden', aspectRatio: '16/10' }}>
                <img src={row.image} alt={row.imageAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Content */}
              <div style={{ order: row.imageLeft ? 1 : 0 }}>
                <motion.h3 {...reveal(0.15)} className="text-heading"
                  style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  {row.headline}
                </motion.h3>
                <motion.p {...reveal(0.2)}
                  style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {row.body}
                </motion.p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {row.points.map((pt, i) => (
                    <motion.li key={pt} {...reveal(0.25 + i * 0.07)}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={20} color="var(--accent-primary)" weight="fill" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{pt}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
