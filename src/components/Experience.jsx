import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    company: 'SMI',
    role: 'Final Year Internship',
    period: 'Mar 2026 – Present',
    location: 'Tunisia',
    description:
      'Building a fully local RAG system for Letter of Credit compliance checking against UCP 600, ISBP 745, and Incoterms standards, using local LLMs with multilingual support. No cloud dependencies.',
    current: true,
  },
  {
    company: 'Proxym',
    role: 'Summer Internship',
    period: 'Aug 2025 – Sep 2025',
    location: 'Sousse, Tunisia',
    description:
      'Built a Spending Tracker application (Python, SQL) for personal expense tracking and financial analysis, delivering a full end-to-end product with data visualisation and reporting features.',
    current: false,
  },
  {
    company: 'Arsii',
    role: 'Summer Internship',
    period: 'Aug 2024 – Sep 2024',
    location: 'Sousse, Tunisia',
    description:
      'Developed a data science pipeline for the educational platform TeachEase (Python, Scikit-learn), including data preprocessing, model training, and integration with the product backend.',
    current: false,
  },
]

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="py-28 px-6 bg-slate-100/50 dark:bg-slate-900/20">
      <div ref={ref} className="section-fade max-w-3xl mx-auto">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">04 — Experience</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mb-12 rounded-full" />

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-[9px] top-2 w-3.5 h-3.5 rounded-full border-2 border-cyan-500 dark:border-cyan-400 bg-slate-50 dark:bg-[#030712]" />

                <div className={`bg-white dark:bg-slate-900/60 border rounded-xl p-6 transition-all duration-300 shadow-sm dark:shadow-none ${
                  exp.current
                    ? 'border-cyan-300 dark:border-cyan-500/40 hover:border-cyan-400 dark:hover:border-cyan-500/60'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg">{exp.company}</h3>
                        {exp.current && (
                          <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30 px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 tracking-widest uppercase">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-xs font-mono">{exp.period}</p>
                      <p className="text-slate-400 text-xs">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">Education</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h4 className="text-slate-900 dark:text-slate-100 font-semibold">Ecole Polytechnique Sousse</h4>
                <span className="text-slate-400 text-xs font-mono">2023 – 2026</span>
              </div>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm">Engineering Degree — Data Science &amp; AI</p>
              <p className="text-slate-400 text-xs mt-1">Deep Learning · NLP · AI Agents · Big Data · ML</p>
            </div>
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="flex flex-wrap justify-between gap-2 mb-1">
                <h4 className="text-slate-900 dark:text-slate-100 font-semibold">IPEIM Monastir</h4>
                <span className="text-slate-400 text-xs font-mono">2020 – 2023</span>
              </div>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm">Classes Préparatoires Technologiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
