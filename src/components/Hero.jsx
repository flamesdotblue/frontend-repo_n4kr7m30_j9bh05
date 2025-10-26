import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDownCircle, Rocket } from 'lucide-react';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(m.matches);
    onChange();
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

const GradientBadge = () => (
  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 text-sky-300 ring-1 ring-white/10">
    <Rocket size={14} className="text-sky-400" />
    Building delightful web experiences
  </div>
);

export default function Hero() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { margin: '-20% 0px -20% 0px', amount: 0.2 });
  const [isMdUp, setIsMdUp] = useState(true);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const onResize = () => setIsMdUp(window.matchMedia('(min-width: 768px)').matches);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Only render Spline when in view, on medium+ screens, and user doesn't prefer reduced motion
  const shouldRenderSpline = inView && isMdUp && !prefersReduced;

  const heading = useMemo(
    () => (
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white/90"
      >
        Modern Web Developer
      </motion.h1>
    ),
    []
  );

  return (
    <section ref={containerRef} id="home" className="relative min-h-[90vh] md:min-h-screen isolate overflow-hidden">
      {/* 3D scene area */}
      <div className="absolute inset-0">
        {shouldRenderSpline ? (
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950" />}>
            <Spline
              scene="https://prod.spline.design/6lYqW7Uj3xojfS5l/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.12),transparent_30%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,1))]" />
        )}
        {/* soft overlays must not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <GradientBadge />
          </motion.div>

          {heading}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-6 text-base md:text-lg text-slate-300 max-w-2xl"
          >
            I craft fast, accessible, and visually refined interfaces with React, Tailwind, and modern tooling. Smooth where it matters, minimal where it counts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-sky-500/90 hover:bg-sky-500 text-white px-4 py-2 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-4 py-2 transition-colors"
            >
              Learn More
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="group mt-12 inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ArrowDownCircle className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            Scroll to explore
          </motion.a>
        </div>
      </div>
    </section>
  );
}
