import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDownCircle, Rocket } from 'lucide-react';

const words = [
  'Transforming ideas into scalable web experiences.',
  'Crafting fast, accessible, and delightful interfaces.',
  'Building future‑ready, production‑grade apps.'
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const current = useMemo(() => words[index], [index]);

  // Lightweight typewriter effect
  useEffect(() => {
    if (subIndex < current.length) {
      const t = setTimeout(() => setSubIndex((s) => s + 1), 30);
      return () => clearTimeout(t);
    }
    const hold = setTimeout(() => {
      setSubIndex(0);
      setIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => clearTimeout(hold);
  }, [subIndex, current.length]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 py-24 sm:px-8 lg:px-12 min-h-[100svh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-sky-400" />
          <span className="text-sm text-white/80">Available for select projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-br from-white via-white to-sky-300 bg-clip-text text-transparent">
            Your Name
          </span>
          <span className="block text-white/70">Web Developer & Designer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          {current.slice(0, subIndex)}
          <span className={`ml-0.5 inline-block w-px translate-y-0.5 bg-white ${blink ? 'opacity-100' : 'opacity-0'}`} style={{ height: '1.1em' }} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:border-white/25"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ArrowDownCircle className="h-7 w-7 text-white/70" />
      </motion.div>
    </section>
  );
}
