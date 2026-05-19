'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="section-y">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects with a clear idea, interface, and live result."
            subtitle="A curated set of learning platforms, games, and utility projects that show how I approach product thinking and frontend implementation."
          />
          <a href="#contact" className="button-secondary mb-12 self-start md:self-auto">
            Discuss a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            const isDownload = project.action === 'Download';
            const ActionIcon = isDownload ? Download : ExternalLink;

            return (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: 'easeOut' }}
                className={cn(
                  'surface-card group overflow-hidden transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]',
                  isFeatured && 'lg:col-span-2 lg:grid lg:grid-cols-[1.18fr_0.82fr]'
                )}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'relative block overflow-hidden bg-[var(--surface-muted)]',
                    isFeatured ? 'aspect-[16/9] lg:aspect-auto' : 'aspect-[16/10]'
                  )}
                  aria-label={`${project.action} ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
                    sizes={
                      isFeatured
                        ? '(max-width: 1024px) 100vw, 680px'
                        : '(max-width: 768px) 100vw, 560px'
                    }
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(17,21,19,0),rgba(17,21,19,0.55))]" />
                </a>

                <div className={cn('flex flex-col p-6 md:p-7', isFeatured && 'lg:p-9')}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-[var(--accent-strong)]">
                      {project.category}
                    </p>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] transition hover:border-[var(--text-primary)]"
                      aria-label={`${project.action} ${project.title}`}
                    >
                      <ActionIcon className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 border-l-2 border-[var(--accent)] pl-4 text-sm leading-6 text-[var(--text-secondary)]">
                    {project.highlight}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-7"
                  >
                    {project.action}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
