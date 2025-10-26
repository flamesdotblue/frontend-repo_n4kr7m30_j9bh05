import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import ExperienceContact from './components/ExperienceContact';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-sky-500 to-blue-600" />

      {/* Sticky header */}
      <header className={`fixed left-0 right-0 top-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-white/90">YOUR.NAME</a>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {/* Mobile sheet */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
            <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-black p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wide text-white/90">MENU</span>
                <button onClick={() => setOpen(false)}><X className="h-6 w-6" /></button>
              </div>
              <div className="mt-8 flex flex-col gap-5 text-white/80">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#experience', label: 'Experience' },
                  { href: '#contact', label: 'Contact' }
                ].map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base">{l.label}</a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        <Hero />
        <AboutSkills />
        <Projects />
        <ExperienceContact />
      </main>
    </div>
  );
}
