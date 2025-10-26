import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ExperienceContact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">Experience</h2>
            <div className="mt-6 space-y-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-sky-400" />
                  <h3 className="text-white/90 font-medium">Role {i} — Company</h3>
                  <p className="text-sm text-slate-400">202{4 - i} · Built performant UI, improved accessibility, and streamlined design systems.</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white/90">Contact</h2>
            <form
              className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Name</span>
                <input
                  className="rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Email</span>
                <input
                  type="email"
                  className="rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50"
                  placeholder="you@example.com"
                  name="email"
                  required
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Message</span>
                <textarea
                  rows={4}
                  className="rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-sky-500/50"
                  placeholder="How can I help?"
                  name="message"
                  required
                />
              </label>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-sky-500/90 hover:bg-sky-500 text-white px-4 py-2 transition-colors"
              >
                Send Message
              </button>
              <div className="text-sm text-slate-400">This demo form doesn’t send emails.</div>
            </form>

            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <a href="#" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
