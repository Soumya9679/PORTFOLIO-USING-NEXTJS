'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Download } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const projects = [
  {
    title: 'PulsePy',
    description:
      'An AI-based Python coding platform with gamified learning and interactive coding challenges.',
    image: '/images/pulsepy.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://team-coffee-code.netlify.app/',
    type: 'link' as const,
  },
  {
    title: 'Ecolearn',
    description:
      'A gamified learning platform focused on environmental education and sustainability awareness.',
    image: '/images/Ecolearn.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://sih-team-mindoras.netlify.app/',
    type: 'link' as const,
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A sleek, interactive Tic Tac Toe game with smooth animations. Challenge your friends!',
    image: '/images/tic-tac-toe.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://tic-tac-toe-soumya-project.netlify.app/',
    type: 'link' as const,
  },
  {
    title: 'Coinzy Game',
    description:
      'A fast, fun, and addictive coin-grabbing PC game with exciting gameplay mechanics.',
    image: '/images/pc-game.png',
    tags: ['Game Dev', 'Desktop'],
    link: 'https://drive.google.com/file/d/1dKZ8j5R4rEuogB-7J6IQ5I7UnuVja2mD/view?usp=drivesdk',
    type: 'download' as const,
  },
  {
    title: 'Time Capsule Notes',
    description:
      'A digital time capsule where you write notes today and revisit them in the future.',
    image: '/images/time-capsule-notes.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://time-capsule-notes.netlify.app/',
    type: 'link' as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              badge="// Projects"
              title="My Projects"
              subtitle="Things I've built and worked on"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="group glass-card overflow-hidden hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/[0.05]"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    {project.type === 'download' ? (
                      <>
                        <Download className="w-4 h-4" />
                        Download
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </>
                    )}
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
