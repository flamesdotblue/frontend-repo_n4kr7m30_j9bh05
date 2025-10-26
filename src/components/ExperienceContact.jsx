import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const timeline = [
  { year: '2025', title: 'Senior Frontend', desc: 'Led UI architecture for multi-tenant platform.' },
  { year: '2024', title: 'Fullstack Developer', desc: 'Shipped scalable APIs and design systems.' },
  { year: '2023', title: 'Frontend Engineer', desc: 'Focused on accessibility and performance.' }
];

export default function ExperienceContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const valid = useMemo(() => {
    const emailOk = /.+@.+\..+/.test(form.email);
    return form.name.trim().length > 1 && emailOk && form.message.trim().length > 5;
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 2500);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="experience" className="relative w-full bg-black py-24 text-white">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
            <div className="mt-10 space-y-8">
              {timeline.map((t, idx) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-6"
                >
                  <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-sky-400" />
                  <div className="text-sm text-white/60">{t.year}</div>
                  <div className="text-lg font-medium">{t.title}</div>
                  <div className="text-white/70">{t.desc}</div>
                </motion.div>
              ))}
              <div className="ml-1 h-full w-px bg-gradient-to-b from-sky-400/50 via-white/10 to-transparent" />
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build something great</h2>
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <FloatingInput
                label="Name"
                type="text"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              />
              <FloatingInput
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              />
              <FloatingTextArea
                label="Message"
                value={form.message}
                onChange={(v) => setForm((f) => ({ ...f, message: v }))}
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={!valid}
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/25 transition disabled:opacity-50"
                >
                  Send Message
                </button>
                {status === 'success' && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-emerald-400">
                    Thanks! I’ll get back to you soon.
                  </motion.span>
                )}
              </div>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="GitHub" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:hello@example.com" aria-label="Email" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"><Mail className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-8 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Your Name. All rights reserved.</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur transition hover:border-white/20 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" /> Back to top
          </button>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ label, value, onChange, type = 'text' }) {
  return (
    <label className="group relative block">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-transparent outline-none ring-0 transition focus:border-sky-400/40"
        placeholder={label}
        required
      />
      <span className="pointer-events-none absolute left-3 top-2.5 -translate-y-1/2 bg-black px-1 text-xs text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
}

function FloatingTextArea({ label, value, onChange }) {
  return (
    <label className="group relative block">
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-transparent outline-none ring-0 transition focus:border-sky-400/40"
        placeholder={label}
        required
      />
      <span className="pointer-events-none absolute left-3 top-2.5 -translate-y-1/2 bg-black px-1 text-xs text-white/60 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
}
