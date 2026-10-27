"use client"

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  Code,
  ChartLine,
  PenNib,
  Cloud,
  Brain,
  ArrowRight,
  Sparkle,
  CheckCircle,
  Briefcase,
  TrendUp,
  Cpu,
} from '@phosphor-icons/react'

interface Domain {
  id: string
  title: string
  badge: string
  accentColor: string
  iconBg: string
  iconBorder: string
  icon: typeof Code
  description: string
  salaryRange: string
  openings: string
  capstone: string
  skills: string[]
  roles: string[]
}

const DOMAINS: Domain[] = [
  {
    id: 'software',
    title: 'Software Development',
    badge: 'Highest Hiring Volume',
    accentColor: '#1D4ED8',
    iconBg: '#EFF6FF',
    iconBorder: '#BFDBFE',
    icon: Code,
    description:
      'Build production-grade distributed systems, scalable microservices, and modern web applications that handle real enterprise traffic.',
    salaryRange: '₹12 - 24 LPA',
    openings: '1,400+ Active Roles',
    capstone:
      'Distributed Multi-Tenant SaaS with Redis Caching, Kafka Queues & Docker Deployments',
    skills: [
      'React 19',
      'Next.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'System Design',
      'Redis',
      'Docker',
    ],
    roles: ['Full Stack SDE', 'Backend Engineer', 'Frontend Specialist', 'API Architect'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    badge: 'Fastest Growing Field',
    accentColor: '#7C3AED',
    iconBg: '#F5F3FF',
    iconBorder: '#DDD6FE',
    icon: Brain,
    description:
      'Train deep neural networks, fine-tune open-source LLMs, and architect end-to-end Retrieval Augmented Generation (RAG) applications.',
    salaryRange: '₹14 - 28 LPA',
    openings: '850+ Active Roles',
    capstone:
      'Enterprise RAG Agent with Vector Search, Local LLM Inference & Autonomous Tool Calling',
    skills: [
      'PyTorch',
      'TensorFlow',
      'LLMs & RAG',
      'LangChain',
      'Computer Vision',
      'Hugging Face',
      'Vector DBs',
      'Python',
    ],
    roles: ['ML Engineer', 'AI Research Dev', 'Generative AI Specialist', 'NLP Engineer'],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    badge: 'Critical Enterprise Need',
    accentColor: '#0284C7',
    iconBg: '#F0F9FF',
    iconBorder: '#BAE6FD',
    icon: ChartLine,
    description:
      'Engineer high-throughput data lakes, automate ETL pipelines, and translate terabytes of raw logs into high-impact strategic business forecasting.',
    salaryRange: '₹10 - 20 LPA',
    openings: '980+ Active Roles',
    capstone:
      'Real-Time Streaming Analytics Pipeline with Apache Spark, BigQuery & Looker Dashboards',
    skills: [
      'Python',
      'SQL / BigQuery',
      'Pandas',
      'Apache Spark',
      'Power BI',
      'ETL Pipelines',
      'Snowflake',
      'dbt',
    ],
    roles: ['Data Engineer', 'Analytics Specialist', 'BI Developer', 'Data Strategist'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    badge: 'Zero-Downtime Infrastructure',
    accentColor: '#059669',
    iconBg: '#ECFDF5',
    iconBorder: '#A7F3D0',
    icon: Cloud,
    description:
      'Automate containerized build pipelines, configure multi-region cloud security, and maintain 99.99% system availability with Infrastructure as Code.',
    salaryRange: '₹12 - 26 LPA',
    openings: '760+ Active Roles',
    capstone:
      'Multi-Region Kubernetes Cluster with Terraform IaC, Prometheus Monitoring & ArgoCD GitOps',
    skills: [
      'AWS Solutions',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD Pipelines',
      'Linux Kernel',
      'Grafana',
      'ArgoCD',
    ],
    roles: [
      'DevOps Engineer',
      'Cloud Architect',
      'Site Reliability Engineer (SRE)',
      'Platform Engineer',
    ],
  },
  {
    id: 'design',
    title: 'Product & UI/UX Design',
    badge: 'Human-Centered Systems',
    accentColor: '#D97706',
    iconBg: '#FFFBEB',
    iconBorder: '#FDE68A',
    icon: PenNib,
    description:
      'Craft intuitive, accessible digital experiences backed by cognitive psychology, iterative user testing, and scalable design token systems.',
    salaryRange: '₹9 - 18 LPA',
    openings: '620+ Active Roles',
    capstone:
      'Complete Design System in Figma with Multi-Platform Tokens, Micro-Interactions & Usability Testing Report',
    skills: [
      'Figma Pro',
      'Design Systems',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'WCAG Accessibility',
      'Micro-interactions',
      'Usability Testing',
    ],
    roles: [
      'Product Designer',
      'UI/UX Specialist',
      'Design Systems Lead',
      'Interaction Architect',
    ],
  },
]

export default function IndustrySkills() {
  const [activeId, setActiveId] = useState<string>('software')
  const prefersReduced = useReducedMotion()

  const currentDomain = DOMAINS.find((d) => d.id === activeId) || DOMAINS[0]
  const IconComponent = currentDomain.icon

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-white text-slate-800 border-b border-slate-200/80 relative"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkle size={13} weight="fill" className="text-blue-600" />
            <span>Curated Competencies</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Skills Employers Actually Want
          </h2>
          <p className="font-['Inter'] text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Our curricula map directly to live engineering vacancy requirements across top tech
            hubs. Explore each discipline below.
          </p>
        </div>

        {/* Horizontal Segmented Tabs Navigation */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 w-max min-w-full sm:min-w-0">
            {DOMAINS.map((domain) => {
              const isActive = domain.id === activeId
              const TabIcon = domain.icon

              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveId(domain.id)}
                  onMouseEnter={() => setActiveId(domain.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap relative ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/90'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <TabIcon
                    size={18}
                    weight="duotone"
                    style={{ color: isActive ? domain.accentColor : '#64748B' }}
                  />
                  <span>{domain.title}</span>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: domain.accentColor }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Double-Bezel Showcase Stage */}
        <div className="rounded-[28px] p-2 sm:p-2.5 bg-slate-200/70 border border-slate-300/80 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06)]">
          <div className="rounded-[22px] bg-white border border-slate-200/80 p-6 sm:p-10 md:p-12 shadow-sm min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDomain.id}
                initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column: Domain Details & Overview */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Header Strip with Domain Icon and Badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-2xs"
                        style={{
                          backgroundColor: currentDomain.iconBg,
                          borderColor: currentDomain.iconBorder,
                        }}
                      >
                        <IconComponent
                          size={26}
                          color={currentDomain.accentColor}
                          weight="duotone"
                        />
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs"
                        style={{
                          backgroundColor: currentDomain.iconBg,
                          borderColor: currentDomain.iconBorder,
                          color: currentDomain.accentColor,
                        }}
                      >
                        {currentDomain.badge}
                      </span>
                    </div>

                    <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                      {currentDomain.title}
                    </h3>
                    <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {currentDomain.description}
                    </p>

                    {/* Compensation & Openings Metric Strip */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                          Average Starting Package
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                          <TrendUp size={16} className="text-emerald-600" />
                          {currentDomain.salaryRange}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                          Current Openings
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                          <Briefcase size={16} className="text-blue-600" />
                          {currentDomain.openings}
                        </span>
                      </div>
                    </div>

                    {/* Roles Target Checklist */}
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Target Engineering Roles
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentDomain.roles.map((role) => (
                          <span
                            key={role}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                          >
                            <CheckCircle size={13} weight="fill" className="text-emerald-600" />
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <a
                      href="#courses"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-all shadow-md shadow-blue-700/20 active:scale-[0.98]"
                    >
                      <span>Explore {currentDomain.title} Tracks</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Stack Bento & Capstone Preview */}
                <div className="lg:col-span-6 flex flex-col gap-5">
                  {/* Technology Competencies Grid */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                        <Cpu size={15} weight="bold" className="text-slate-500" />
                        Production Tech Stack
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {currentDomain.skills.length} Core Tools
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {currentDomain.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-center font-['Plus_Jakarta_Sans'] font-bold text-xs text-slate-800 hover:border-blue-400 hover:text-blue-700 transition-colors"
                        >
                          <span className="truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capstone Deliverable Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-15 pointer-events-none"
                      style={{ backgroundColor: currentDomain.accentColor }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Industry Capstone Project
                        </span>
                        <span
                          className="text-[11px] font-bold px-2 py-0.5 rounded-md border"
                          style={{
                            backgroundColor: currentDomain.iconBg,
                            borderColor: currentDomain.iconBorder,
                            color: currentDomain.accentColor,
                          }}
                        >
                          Portfolio Ready
                        </span>
                      </div>
                      <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-slate-900 leading-snug mb-2">
                        {currentDomain.capstone}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-['Inter']">
                        Tested with automated continuous integration (CI) tests, benchmarked
                        against production latency metrics, and deployed live to a public URL.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
