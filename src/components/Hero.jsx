import { useState, useRef, useEffect } from 'react'

function CVDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-7 py-3 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/60 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-all duration-200 hover:scale-105"
      >
        Download CV
        <span className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-50 shadow-xl shadow-black/10 dark:shadow-black/40">
          <a
            href="/Yassine_Abid_CV_EN.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            🇬🇧 English
          </a>
          <a
            href="/Yassine_Abid_CV_FR.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-t border-slate-100 dark:border-slate-800"
          >
            🇫🇷 Français
          </a>
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#030712]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center px-6 max-w-4xl mx-auto">
        {/* Profile photo */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-2xl" />
          <div className="absolute inset-0 rounded-full ring-2 ring-cyan-500/40 dark:ring-cyan-400/40 z-10" />
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{
              backgroundImage: 'url(/profile.png)',
              backgroundSize: '220%',
              backgroundPosition: '38% 32%',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <p className="text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4 tracking-[0.3em] uppercase">
          Hi, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
          Yassine Abid
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-4 tracking-wide">
          AI &amp; Data Science Engineer
        </h2>

        <p className="text-slate-400 dark:text-slate-500 text-sm font-mono mb-10">
          Ecole Polytechnique Sousse &nbsp;·&nbsp; Graduating June 2026
        </p>

        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Building end-to-end intelligent systems — from fully local RAG pipelines
          to real-time computer vision. Passionate about LLMs, NLP, and turning
          data into impactful decisions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/yassine-abid-ai/"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-[#030712] font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/YassineAbid27"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/60 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-all duration-200 hover:scale-105"
          >
            GitHub
          </a>
          <CVDropdown />
          <a
            href="mailto:Yassine.abid@polytechnicien.tn"
            className="px-7 py-3 border border-slate-300 dark:border-slate-700 hover:border-indigo-500/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-20">
          <a
            href="#about"
            className="text-slate-300 dark:text-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-2xl inline-block animate-bounce"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  )
}
