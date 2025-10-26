import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Server, Terminal } from 'lucide-react';

const skills = [
  { icon: <Code className="h-5 w-5" />, label: 'React' },
  { icon: <Layers className="h-5 w-5" />, label: 'Tailwind' },
  { icon: <Terminal className="h-5 w-5" />, label: 'TypeScript' },
  { icon: <Server className="h-5 w-5" />, label: 'Node.js' },
];

export default function AboutSkills() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-start gap-10 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I design and build responsive, accessible interfaces with a focus on performance and clarity. My approach blends minimal aesthetics with thoughtful micro-interactions that never get in the way.
            </p>
            <p className="mt-3 text-slate-400">
              Tooling I enjoy: React + Vite, Tailwind CSS, Framer Motion, and modern APIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm p-5 md:p-6"
          >
            <h3 className="text-white/90 font-medium">Core Skills</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((s) => (
                <div key={s.label} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-slate-200">
                  <span className="text-sky-300">{s.icon}</span>
                  <span className="text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
