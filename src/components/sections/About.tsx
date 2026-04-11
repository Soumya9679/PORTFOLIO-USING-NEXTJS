'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Laptop, Heart, GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const highlights = [
  { icon: Laptop, label: 'Web Development' },
  { icon: Heart, label: 'Creative Coding' },
  { icon: GraduationCap, label: 'Continuous Learning' },
  { icon: MapPin, label: 'Based in India' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              badge="// About"
              title="About Me"
              subtitle="Get to know me a little better"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative mx-auto md:mx-0">
              {/* Glow effect behind image */}
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
                <Image
                  src="/images/profilePic.jpg"
                  alt="Soumyadip Maity - Full Stack Developer"
                  width={400}
                  height={480}
                  className="object-cover w-full max-w-[400px]"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                Hi there! I&apos;m{' '}
                <span className="text-white font-semibold">Soumyadip Maity</span>,
                a passionate developer who loves turning ideas into reality through
                code. My focus is on creating modern, interactive, and accessible
                applications that make a difference.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                I enjoy solving complex problems and continuously learning new
                technologies to stay at the forefront of web development. Every
                project is an opportunity to push boundaries and create something
                meaningful.
              </p>

              {/* Highlight Tags */}
              <div className="flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-indigo-400" />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
