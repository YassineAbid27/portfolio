import { useScrollAnimation } from '../hooks/useScrollAnimation'

const certGroups = [
  {
    issuer: 'NVIDIA',
    style: 'text-green-700 border-green-300 bg-green-50 dark:text-green-400 dark:border-green-500/30 dark:bg-green-500/10',
    items: [
      { name: 'Generative AI with Diffusion Models', file: '/certificates/Generative AI with Diffusion Models.pdf' },
      { name: 'Fundamentals of Deep Learning', file: '/certificates/My Learning _ NVIDIA.pdf' },
      { name: 'Building Transformer-Based NLP Applications', file: '/certificates/Building Transformer-Based Natural Language Processing.pdf' },
      { name: 'Building Agent RAG with LLMs', file: null },
    ],
  },
  {
    issuer: 'DataCamp',
    style: 'text-blue-700 border-blue-300 bg-blue-50 dark:text-blue-400 dark:border-blue-500/30 dark:bg-blue-500/10',
    items: [
      { name: 'Unsupervised Learning in Python', file: '/certificates/certificate (Unsupervised Learning in Python).pdf' },
      { name: 'Supervised Learning with Scikit-learn', file: '/certificates/certificate.pdf' },
    ],
  },
  {
    issuer: 'Cisco',
    style: 'text-sky-700 border-sky-300 bg-sky-50 dark:text-sky-400 dark:border-sky-500/30 dark:bg-sky-500/10',
    items: [
      { name: 'CCNA — Introduction to Networks', file: '/certificates/CCNA-_Introduction_to_Networks_certificate_yassine-abid-polytechnicien-tn_0183762b-0fce-4cc0-b308-9a7bf0e19e40.pdf' },
      { name: 'CCNA — Switching, Routing & Wireless', file: '/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_yassine-abid-polytechnicien-tn_34054415-de0f-402d-bcba-1492031e8abc.pdf' },
    ],
  },
  {
    issuer: 'Certiport / Pearson VUE',
    style: 'text-orange-700 border-orange-300 bg-orange-50 dark:text-orange-400 dark:border-orange-500/30 dark:bg-orange-500/10',
    items: [
      { name: 'Python', file: '/certificates/Certificat_python_1740469592.pdf' },
    ],
  },
]

const awards = [
  { title: 'Best PSC Award', org: 'EUR-ACE', date: 'July 2024', icon: '★' },
  { title: '1st Place — VEX Robotics Tunisia', org: 'VEX Robotics', date: 'March 2020', icon: '◆' },
]

export default function Certifications() {
  const ref = useScrollAnimation()

  return (
    <section id="certifications" className="py-28 px-6">
      <div ref={ref} className="section-fade max-w-5xl mx-auto">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">05 — Certifications</p>
        <h2 className="text-4xl font-bold mb-3 text-slate-900 dark:text-slate-100">Certifications</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certGroups.map(({ issuer, style, items }) => (
            <div
              key={issuer}
              className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-5 ${style}`}>
                {issuer}
              </span>
              <ul className="space-y-3">
                {items.map(({ name, file }) => (
                  <li key={name} className="flex items-start gap-2.5 text-sm">
                    <span className="text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0 font-mono">✓</span>
                    {file ? (
                      <a
                        href={file}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover:underline underline-offset-2"
                      >
                        {name}
                      </a>
                    ) : (
                      <span className="text-slate-600 dark:text-slate-400">{name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">Awards &amp; Competitions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {awards.map(({ title, org, date, icon }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex items-start gap-4 hover:border-yellow-300 dark:hover:border-yellow-500/20 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <span className="text-yellow-500 text-xl mt-0.5 shrink-0">{icon}</span>
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-semibold">{title}</h4>
                <p className="text-slate-500 text-sm mt-0.5">{org} &nbsp;·&nbsp; {date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
