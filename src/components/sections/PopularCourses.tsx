import { motion, useReducedMotion } from 'motion/react'
import { Star, ArrowRight, Clock, ChartBar } from '@phosphor-icons/react'
import { COURSES } from '@/lib/constants'

export default function PopularCourses() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="courses" className="section-pad" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <motion.p className="text-eyebrow"
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginBottom: '0.625rem' }}>
              Most Enrolled
            </motion.p>
            <motion.h2 className="text-display-l"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              style={{ color: 'var(--text-primary)' }}>
              Popular Courses
            </motion.h2>
          </div>
          <motion.a href="#"
            initial={prefersReduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.625rem 1.25rem', borderRadius: 'var(--radius-btn)',
              border: '1px solid var(--border)', color: 'var(--text-secondary)',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
              fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-primary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-primary)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}>
            View All Courses <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {COURSES.map((course, i) => (
            <motion.div key={course.id}
              className="card-base"
              initial={prefersReduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -4 }}
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Thumbnail */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={course.thumbnail} alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                <span style={{
                  position: 'absolute', top: 12, left: 12,
                  padding: '0.25rem 0.75rem', borderRadius: 100,
                  background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A',
                  fontSize: '0.75rem', fontWeight: 700,
                }}>
                  {course.category}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 className="text-subheading" style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {course.title}
                </h3>

                {/* Instructor */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  <img src={course.instructorAvatar} alt={course.instructor}
                    style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{course.instructor}</span>
                </div>

                {/* Rating + meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Star size={14} weight="fill" color="var(--accent-secondary)" />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>{course.rating}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({course.reviews})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <Clock size={13} />
                    {course.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <ChartBar size={13} />
                    {course.level}
                  </div>
                </div>

                {/* Price + CTA */}
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span className="font-display" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      ₹{course.price.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginLeft: '0.5rem' }}>
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <a href="#enquiry" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                    color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600,
                    textDecoration: 'none',
                  }}>
                    Enroll Now <ArrowRight size={14} weight="bold" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
