import { useState } from 'react'
import { ArrowRight, Code, ChartLine, PenNib, Cloud, Brain } from '@phosphor-icons/react'

interface Domain {
  id: string
  title: string
  icon: typeof Code
  skills: string[]
  roles: string[]
  description: string
}

const DOMAINS: Domain[] = [
  {
    id: 'software',
    title: 'Software Development',
    icon: Code,
    description: 'Build full-scale enterprise systems with modern web standards and microservices.',
    skills: ['React 19', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'System Design', 'Redis', 'Docker'],
    roles: ['Frontend Engineer', 'Backend Dev', 'Full Stack SDE', 'API Architect'],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: ChartLine,
    description: 'Transform raw data lakes into actionable business decisions and automated forecasting.',
    skills: ['Python', 'SQL / BigQuery', 'Pandas', 'Apache Spark', 'Power BI', 'ETL Pipelines', 'Snowflake'],
    roles: ['Data Analyst', 'BI Developer', 'Data Engineer', 'Analytics Specialist'],
  },
  {
    id: 'design',
    title: 'Product Design',
    icon: PenNib,
    description: 'Design intuitive, accessible digital experiences backed by cognitive science and user research.',
    skills: ['Figma Pro', 'Design Systems', 'UX Research', 'Wireframing', 'Prototyping', 'WCAG Accessibility'],
    roles: ['UI Designer', 'UX Researcher', 'Product Designer', 'Interaction Lead'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Automate build, deployment, and resilient infrastructure at multi-region cloud scale.',
    skills: ['AWS Solutions', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD Pipelines', 'Linux Kernel', 'Grafana'],
    roles: ['Cloud Architect', 'DevOps Engineer', 'SRE Specialist', 'Infrastructure Lead'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Train neural nets, deploy LLMs, and build intelligent generative AI applications.',
    skills: ['PyTorch', 'TensorFlow', 'LLMs & RAG', 'LangChain', 'Computer Vision', 'Hugging Face', 'Vector DBs'],
    roles: ['ML Engineer', 'AI Research Dev', 'Prompt Architect', 'NLP Engineer'],
  },
]

export default function IndustrySkills() {
  const [activeId, setActiveId] = useState<string>('software')

  return (
    <section id="skills" className="py-20 md:py-28 bg-white text-slate-800 border-b border-slate-200/80 relative">
      <div className="container">
        <div className="mb-14">
          <p className="text-eyebrow mb-2">Curated Competencies</p>
          <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Skills Employers Actually Want
          </h2>
          <p className="font-['Inter_Tight'] text-lg text-slate-600 max-w-2xl">
            Our curricula map directly to live engineering vacancy requirements across tech hubs.
          </p>
        </div>

        {/* Desktop Horizontal Flex Accordion / Slices */}
        <div className="hidden lg:flex gap-4 h-110 w-full">
          {DOMAINS.map((domain) => {
            const isActive = activeId === domain.id
            const Icon = domain.icon

            return (
              <div
                key={domain.id}
                onMouseEnter={() => setActiveId(domain.id)}
                className={`relative rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between p-7 ${
                  isActive
                    ? 'flex-[3.5] bg-linear-to-br from-blue-50/80 via-white to-slate-50 border-2 border-blue-600 shadow-xl shadow-blue-600/10'
                    : 'flex-1 bg-slate-50/90 hover:bg-slate-100/90 border border-slate-200'
                }`}
              >
                {/* Header / Top */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? 'bg-blue-700 text-white shadow-md shadow-blue-600/20' : 'bg-white text-slate-600 border border-slate-200 shadow-2xs'
                    }`}
                  >
                    <Icon size={26} weight="duotone" />
                  </div>
                  {isActive && (
                    <span className="text-xs uppercase font-semibold text-blue-700 tracking-wider px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200">
                      High Hiring Demand
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`font-['Outfit'] font-bold transition-all ${
                      isActive
                        ? 'text-2xl text-slate-900 mb-3'
                        : 'text-lg text-slate-700 [writing-mode:vertical-rl] rotate-180 tracking-wide mt-auto py-4'
                    }`}
                  >
                    {domain.title}
                  </h3>

                  {isActive && (
                    <div className="space-y-4">
                      <p className="font-['Inter_Tight'] text-sm text-slate-600">
                        {domain.description}
                      </p>

                      <div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                          Core Competencies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {domain.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-blue-800 border border-blue-200 shadow-2xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 flex items-center justify-between border-t border-slate-200">
                        <div className="text-xs text-slate-500">
                          Roles: <span className="text-slate-900 font-semibold">{domain.roles.slice(0, 2).join(', ')}</span>
                        </div>
                        <a
                          href="#courses"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
                        >
                          Explore Programs <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile / Tablet Accordion */}
        <div className="lg:hidden space-y-4">
          {DOMAINS.map((domain) => {
            const isOpen = activeId === domain.id
            const Icon = domain.icon

            return (
              <div
                key={domain.id}
                onClick={() => setActiveId(isOpen ? '' : domain.id)}
                className={`rounded-2xl border transition-all ${
                  isOpen ? 'bg-white border-2 border-blue-600 shadow-md' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="p-5 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isOpen ? 'bg-blue-700 text-white' : 'bg-white border border-slate-200 text-slate-600'
                    }`}>
                      <Icon size={22} weight="duotone" />
                    </div>
                    <span className="font-['Outfit'] font-bold text-slate-900 text-base">
                      {domain.title}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-90 text-blue-700' : ''
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-4">
                    <p className="font-['Inter_Tight'] text-sm text-slate-600">
                      {domain.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#courses"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 pt-2"
                    >
                      View syllabus <ArrowRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
