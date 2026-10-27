"use client"

import { useState } from 'react'
import { Plus, Minus } from '@phosphor-icons/react'
import { FAQS } from '@/lib/constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const leftColumn = FAQS.slice(0, 5)
  const rightColumn = FAQS.slice(5, 10)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const renderFaqItem = (faq: { q: string; a: string }, actualIdx: number) => {
    const isOpen = openIndex === actualIdx

    return (
      <div
        key={actualIdx}
        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? 'bg-white border-2 border-blue-600 shadow-md'
            : 'bg-white border border-slate-200 hover:border-slate-300 shadow-2xs'
        }`}
      >
        <button
          type="button"
          onClick={() => toggle(actualIdx)}
          className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="font-['Plus_Jakarta_Sans'] font-bold text-slate-900 text-base md:text-lg">
            {faq.q}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              isOpen ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
          </div>
        </button>

        {isOpen && (
          <div className="px-6 pb-6 pt-2 text-sm md:text-base text-slate-600 font-['Inter'] leading-relaxed border-t border-slate-100">
            {faq.a}
          </div>
        )}
      </div>
    )
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-800 border-b border-slate-200/80 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-eyebrow mb-2">Clarity &amp; Answers</p>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 leading-relaxed">
            Got questions? We have answers. Find everything you need to know about enrollments, curriculum, and outcomes.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {leftColumn.map((faq, i) => renderFaqItem(faq, i))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((faq, i) => renderFaqItem(faq, i + 5))}
          </div>
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl mx-auto">
          <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900 mb-2">
            Still have questions before enrolling?
          </h4>
          <p className="text-xs text-slate-600 mb-4">
            Speak directly with an academic advisor. No sales pressure, just honest roadmap guidance.
          </p>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900"
          >
            Request a Free 15-Minute Counseling Call &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
