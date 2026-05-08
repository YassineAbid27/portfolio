import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    id: 1,
    label: 'Graduation Project — PFE',
    title: 'Trade Document Compliance RAG',
    description:
      'Fully local RAG system for trade document compliance checking. Compares Letter of Credit documents against UCP 600, ISBP 745, and Incoterms standards using local LLMs and multilingual embeddings. 100% offline — no cloud, no API keys.',
    tags: ['Ollama', 'ChromaDB', 'FastAPI', 'Docker', 'LangChain', 'Multilingual NLP'],
    github: null,
    featured: true,
  },
  {
    id: 2,
    label: 'NLP & Computer Vision',
    title: 'Sign Language Translator',
    description:
      'Real-time ASL gesture recognition system. Captures hand landmarks via MediaPipe, classifies them with an LSTM network, and translates sign glosses to natural English sentences using FLAN-T5 with text-to-speech output.',
    tags: ['TensorFlow', 'MediaPipe', 'LSTM', 'FLAN-T5', 'Flask', 'OpenCV'],
    github: 'https://github.com/YassineAbid27/Projet_NLP_AND_COMPUTER_VISION',
    featured: false,
  },
  {
    id: 3,
    label: 'Machine Learning',
    title: 'Smart Meter Analysis',
    description:
      'Energy consumption analysis and prediction system for smart meters. Built predictive ML models to detect usage patterns and anomalies, with full data visualisation and reporting pipeline.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: null,
    featured: false,
  },
  {
    id: 4,
    label: 'Business Intelligence',
    title: 'Complete BI Solution',
    description:
      'End-to-end business intelligence solution with a dimensional data warehouse, automated ETL pipeline, and interactive Power BI dashboards for business KPI monitoring and decision-making.',
    tags: ['Power BI', 'SQL', 'ETL', 'Data Warehouse', 'Dimensional Modeling'],
    github: null,
    featured: false,
  },
]

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className="py-28 px-6">
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">03 — Projects</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">Selected Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative flex flex-col bg-white dark:bg-slate-900/60 border rounded-xl p-7 transition-all duration-300 hover:scale-[1.02] shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-xl ${
                project.featured
                  ? 'border-cyan-300 dark:border-cyan-500/40 hover:border-cyan-400 dark:hover:border-cyan-500/70'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {project.featured && (
                <span className="absolute top-5 right-5 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30 px-2 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 tracking-widest uppercase">
                  Featured
                </span>
              )}

              <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mb-2 tracking-wide">{project.label}</p>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 pr-20">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-md font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-sm font-medium transition-colors flex items-center gap-1.5"
                >
                  View on GitHub <span className="text-xs">↗</span>
                </a>
              ) : (
                <span className="text-slate-400 dark:text-slate-600 text-xs font-mono">Private / Available on request</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
