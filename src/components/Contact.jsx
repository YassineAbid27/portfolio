import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const ref = useScrollAnimation()

  return (
    <section id="contact" className="py-28 px-6 bg-slate-100/50 dark:bg-slate-900/20">
      <div ref={ref} className="section-fade max-w-2xl mx-auto text-center">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">06 — Contact</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">Get In Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mb-10 rounded-full mx-auto" />

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 text-lg">
          I'm actively looking for AI engineering opportunities starting June 2026.
          Whether it's a full-time role or just a conversation —
          I'd love to hear from you.
        </p>

        <a
          href="mailto:Yassine.abid@polytechnicien.tn"
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 mb-12 font-mono text-sm"
        >
          Yassine.abid@polytechnicien.tn
        </a>

        <div className="flex items-center justify-center gap-8 text-sm">
          <a
            href="https://linkedin.com/in/yassine-abid"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            LinkedIn ↗
          </a>
          <span className="text-slate-300 dark:text-slate-800">|</span>
          <a
            href="https://github.com/YassineAbid27"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors font-medium"
          >
            GitHub ↗
          </a>
        </div>

        <p className="text-slate-300 dark:text-slate-700 text-xs font-mono mt-20">
          Designed &amp; built by Yassine Abid · 2026
        </p>
      </div>
    </section>
  )
}
