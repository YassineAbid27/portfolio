import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { label: 'Projects', value: '4+' },
  { label: 'Certifications', value: '7' },
  { label: 'Experiences', value: '3' },
  { label: 'Languages', value: '4' },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-28 px-6">
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">01 — About</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mb-12 rounded-full" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-2xl" />
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-500/40 dark:ring-cyan-400/40 z-10" />
              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{
                  backgroundImage: 'url(/profile.png)',
                  backgroundSize: '200%',
                  backgroundPosition: '38% 32%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I'm an AI &amp; Data Science engineering student at{' '}
              <span className="text-slate-900 dark:text-slate-200 font-medium">Ecole Polytechnique Sousse</span>,
              Tunisia, graduating in June 2026. I design and build end-to-end AI systems
              — from data pipelines to deployed APIs.
            </p>
            <p>
              My graduation project is a fully local{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">Trade Document Compliance RAG system</span>
              {' '}using Ollama, ChromaDB, and multilingual embeddings. No cloud, no API keys —
              built to run 100% offline on a bank's own servers.
            </p>
            <p>
              I'm particularly interested in LLM-powered applications, agentic systems,
              and NLP pipelines. I've gained hands-on professional experience and have
              a solid command of the full AI engineering stack.
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-sm font-mono">
              📍 Monastir, Tunisia &nbsp;·&nbsp; Open to relocation
            </p>
            <p className="text-sm font-mono">
              <span className="text-slate-400 dark:text-slate-500">Currently exploring: </span>
              <span className="text-cyan-600 dark:text-cyan-400">LangGraph agents</span>
              <span className="text-slate-300 dark:text-slate-700"> · </span>
              <span className="text-cyan-600 dark:text-cyan-400">LLM fine-tuning</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center hover:border-cyan-400/50 transition-all duration-300 shadow-sm dark:shadow-none"
                >
                  <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-0.5">{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
