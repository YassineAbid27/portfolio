import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-50/90 dark:bg-[#030712]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl tracking-tight font-mono">YA</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 text-xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-50/95 dark:bg-[#030712]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 pb-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors border-b border-slate-200 dark:border-slate-800/50 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
