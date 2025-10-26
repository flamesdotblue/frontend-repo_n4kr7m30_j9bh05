import { motion } from 'framer-motion';
import { Code, Server, Cloud, Boxes, Database, Layers, Cpu, Terminal } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: Code },
  { name: 'CSS3 / Tailwind', icon: Layers },
  { name: 'JavaScript / TypeScript', icon: Terminal },
  { name: 'React', icon: Boxes },
  { name: 'Node.js', icon: Server },
  { name: 'APIs', icon: Cpu },
  { name: 'AWS', icon: Cloud },
  { name: 'Databases', icon: Database }
];

export default function AboutSkills() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-4 max-w-xl text-white/70">
            I’m a web developer focused on crafting immersive, high-performance experiences.
            I blend clean aesthetics with robust engineering to deliver products that scale gracefully.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:border-white/20"
              >
                <s.icon className="h-6 w-6 text-sky-400" />
                <div className="mt-3 text-sm text-white/80">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-2 shadow-2xl shadow-sky-500/10">
            <div className="h-full w-full overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.4),rgba(0,0,0,0.4))]">
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop"
                alt="Portrait"
                loading="lazy"
                className="h-full w-full object-cover mix-blend-lighten"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
