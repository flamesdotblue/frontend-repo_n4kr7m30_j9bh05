import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Minimal Dashboard',
    desc: 'Clean analytics dashboard with responsive charts and cards.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Landing Experience',
    desc: 'High-performance landing page with subtle motion and a11y.',
    tech: ['Vite', 'TypeScript', 'SEO'],
    link: '#',
  },
  {
    title: 'UI Components',
    desc: 'A set of composable UI building blocks for fast prototyping.',
    tech: ['Tailwind', 'Radix', 'Design Systems'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">Projects</h2>
          <a href="#" className="text-sm text-slate-300 hover:text-white">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.15),transparent_45%)]" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-white/90 font-medium">{p.title}</h3>
                    <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full px-2 py-1 bg-white/5 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
