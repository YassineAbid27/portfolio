import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    category: 'Machine Learning & Deep Learning',
    accent: 'cyan',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    category: 'NLP & Generative AI',
    accent: 'indigo',
    skills: ['Langchain', 'LangGraph', 'Hugging Face', 'NLP', 'RAG', 'LLMs'],
  },
  {
    category: 'Data & Business Intelligence',
    accent: 'violet',
    skills: ['Power BI', 'SQL', 'Matplotlib', 'Seaborn', 'ETL', 'Data Warehouse'],
  },
  {
    category: 'Dev & Tools',
    accent: 'blue',
    skills: ['Git', 'Docker', 'FastAPI', 'Flask', 'ChromaDB', 'Ollama'],
  },
]

const pillStyles = {
  cyan:   'border-cyan-300 text-cyan-700 bg-cyan-50 hover:bg-cyan-100 dark:border-cyan-500/30 dark:text-cyan-300 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20',
  indigo: 'border-indigo-300 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 dark:border-indigo-500/30 dark:text-indigo-300 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20',
  violet: 'border-violet-300 text-violet-700 bg-violet-50 hover:bg-violet-100 dark:border-violet-500/30 dark:text-violet-300 dark:bg-violet-500/10 dark:hover:bg-violet-500/20',
  blue:   'border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100 dark:border-blue-500/30 dark:text-blue-300 dark:bg-blue-500/10 dark:hover:bg-blue-500/20',
}

const headerStyles = {
  cyan:   'text-cyan-600 dark:text-cyan-400',
  indigo: 'text-indigo-600 dark:text-indigo-400',
  violet: 'text-violet-600 dark:text-violet-400',
  blue:   'text-blue-600 dark:text-blue-400',
}

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="py-28 px-6 bg-slate-100/50 dark:bg-slate-900/20">
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">02 — Skills</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">Technical Skills</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map(({ category, accent, skills }) => (
            <div
              key={category}
              className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <h3 className={`text-xs font-mono uppercase tracking-widest mb-4 ${headerStyles[accent]}`}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-default ${pillStyles[accent]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
