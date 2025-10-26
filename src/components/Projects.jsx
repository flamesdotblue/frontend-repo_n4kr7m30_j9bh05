import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming analytics with live charts and role-based access.',
    img: 'https://images.unsplash.com/photo-1551281044-8d8c9e7fd1c9?q=80&w=1400&auto=format&fit=crop',
    stack: ['React', 'WebSockets', 'Tailwind']
  },
  {
    title: 'Ecommerce Platform',
    desc: 'Composable storefront with optimized checkout and search.',
    img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1400&auto=format&fit=crop',
    stack: ['Next.js', 'Stripe', 'Vercel']
  },
  {
    title: 'Design System',
    desc: 'Accessible component library with tokens and theming.',
    img: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1400&auto=format&fit=crop',
    stack: ['Storybook', 'TypeScript', 'Radix']
  },
  {
    title: 'AI Assistant',
    desc: 'Context-aware assistant integrated into enterprise workflow.',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop',
    stack: ['Python', 'FastAPI', 'OpenAI']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Projects</h2>
          <div className="h-px flex-1 translate-y-[-6px] bg-gradient-to-r from-white/20 to-transparent ml-6" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <ExternalLink className="mt-1 h-5 w-5 text-white/60 transition-colors group-hover:text-white" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
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
