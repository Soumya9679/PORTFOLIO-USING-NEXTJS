'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';
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
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-cyan-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
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
            className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mt-6 mb-10 leading-relaxed"
          >
            A passionate developer crafting clean &amp; creative digital
            experiences with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 hover:border-transparent hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1"
                title={label}
                aria-label={label}
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-cyan-400"
          />
        </div>
        <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
