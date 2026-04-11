'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Zap } from 'lucide-react';
import Typewriter from '@/components/effects/Typewriter';

const socialLinks = [
  { icon: Mail, href: 'mailto:maitysoumya108@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/Maitysoumya12345', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/soumyadip-maity-996686353', label: 'LinkedIn' },
  { icon: Code2, href: 'https://leetcode.com/u/_soumya__dip_/', label: 'LeetCode' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero-specific ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-violet-container/[0.06] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-container/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-container/10 border border-violet-container/20 text-violet-primary text-sm font-medium">
              <Zap className="w-3.5 h-3.5" />
              Available for work
            </span>
          </motion.div>

          {/* Name – Display typography */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display tracking-tighter mb-4"
          >
            <span className="text-gradient-hero">
              Soumyadip Maity
            </span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div variants={itemVariants}>
            <Typewriter />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#958ea0] text-base md:text-lg max-w-xl mx-auto mt-6 mb-12 leading-relaxed"
          >
            Crafting cinematic digital experiences with modern technologies.
            Turning complex ideas into elegant, scalable realities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group btn-gradient inline-flex items-center gap-2.5"
            >
              View My Work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group relative w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#958ea0] transition-all duration-300 hover:text-[#e1e2ed] hover:border-violet-container/30 hover:bg-violet-container/10 hover:-translate-y-1 hover:shadow-glow-sm"
                title={label}
                aria-label={label}
              >
                <Icon className="w-[18px] h-[18px] relative z-10" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator – refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 rounded-full border border-white/10 flex justify-center pt-2.5 bg-white/[0.02]">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-gradient-to-b from-violet-container to-cyan-container"
          />
        </div>
        <span className="text-[10px] text-[#494454] tracking-[0.2em] uppercase font-mono">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
