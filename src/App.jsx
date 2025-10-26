import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import ExperienceContact from './components/ExperienceContact';
import { Menu, X } from 'lucide-react';

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
      setProgress(p);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}

export default function App() {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top progress bar */}
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-sky-500/20">
        <div
          className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/5">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white/90">Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <button className="md:hidden p-2 text-slate-300" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/5">
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-2 text-slate-300">
              <a className="py-1 hover:text-white" href="#about">About</a>
              <a className="py-1 hover:text-white" href="#projects">Projects</a>
              <a className="py-1 hover:text-white" href="#contact">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="pt-14">
        <Hero />
        <AboutSkills />
        <Projects />
        <ExperienceContact />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5">
        <div className="container mx-auto px-4 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} • Built with performance-first motion
        </div>
      </footer>
    </div>
  );
}
