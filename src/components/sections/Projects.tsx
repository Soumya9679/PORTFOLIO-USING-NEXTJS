'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Download, ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const projects = [
  {
    title: 'PulsePy',
    description:
      'An AI-based Python coding platform with gamified learning and interactive coding challenges.',
    image: '/images/pulsepy.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://pulsepy.tech',
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
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative py-24 md:py-36 px-6">
      {/* Section ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-deep/[0.03] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-container/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
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
                className="group glass-card overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-glow-md"
              >
                {/* Project Image with gradient overlay */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nebula-base via-nebula-base/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      {project.type === 'download' ? (
                        <Download className="w-5 h-5 text-white" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 pt-5">
                  <h3 className="text-lg font-bold font-display text-[#e1e2ed] mb-2 group-hover:text-violet-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#958ea0] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Tags – glass chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-chip"
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
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-primary hover:text-cyan-container transition-colors group/link"
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
