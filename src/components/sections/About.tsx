'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Compass, Layers3, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { principles, profile } from '@/lib/portfolio-data';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-y">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading
              eyebrow="About"
              title="A developer who cares about usable, finished-feeling interfaces."
              subtitle="I enjoy shaping ideas into web experiences that are easy to understand, pleasant to use, and simple enough to keep improving."
            />

            <div className="space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              <p>
                I am {profile.name}, a {profile.role.toLowerCase()} focused on
                practical web products, learning platforms, and interactive
                tools. My work starts with structure: clear content, responsive
                layouts, and interface details that help users know what to do next.
              </p>
              <p>
                I am building depth across JavaScript, React, Next.js, and core
                programming fundamentals while continuing to ship projects that
                stretch my design and engineering judgment.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="surface-dark p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-semibold text-white/[0.62]">Profile</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  Frontend builder
                </h3>
              </div>
              <Compass className="h-8 w-8 text-[#8ddbd5]" />
            </div>

            <div className="grid gap-5 py-6 sm:grid-cols-2">
              <div>
                <MapPin className="mb-3 h-5 w-5 text-[#8ddbd5]" />
                <p className="text-sm text-white/[0.58]">Location</p>
                <p className="mt-1 font-semibold text-white">{profile.location}</p>
              </div>
              <div>
                <Layers3 className="mb-3 h-5 w-5 text-[#f1bf75]" />
                <p className="text-sm text-white/[0.58]">Focus</p>
                <p className="mt-1 font-semibold text-white">Web products</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-white/[0.62]">Working style</p>
              <ul className="mt-5 space-y-4">
                {principles.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/[0.78]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8ddbd5]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
