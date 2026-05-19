'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Blocks, BrainCircuit, MonitorSmartphone, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { capabilities, techGroups } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const icons = [MonitorSmartphone, Blocks, BrainCircuit, Sparkles];

const accentClasses = {
  teal: 'bg-[#dff3ef] text-[#0a5f59]',
  blue: 'bg-[#e4ebff] text-[#2f5fd7]',
  gold: 'bg-[#fff0d8] text-[#9a620e]',
  ink: 'bg-[#e8ece9] text-[#111513]',
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-y border-y border-[var(--border)] bg-white/[0.55]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for modern web experiences."
          subtitle="The focus is not just knowing tools, but using them to create clear layouts, reliable interactions, and polished project pages."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = icons[index] ?? MonitorSmartphone;

            return (
              <motion.article
                key={capability.title}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                className="surface-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div
                  className={cn(
                    'mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg',
                    accentClasses[capability.accent as keyof typeof accentClasses]
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {capability.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="surface-dark mt-8 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-white/[0.58]">Toolbox</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                Technologies I use to ship.
              </h3>
            </div>

            <div className="grid gap-6">
              {techGroups.map((group) => (
                <div
                  key={group.title}
                  className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="mb-3 text-sm font-semibold text-white/[0.62]">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1 text-xs font-semibold text-white/[0.82]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
