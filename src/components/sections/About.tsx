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
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 md:py-36 px-6">
      {/* Section ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-container/[0.03] blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
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

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Profile Image – with refractive glow */}
            <motion.div variants={itemVariants} className="relative mx-auto md:mx-0">
              {/* Multi-layer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-container/20 via-violet-deep/10 to-cyan-container/15 rounded-3xl blur-3xl animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-container/30 to-cyan-container/20 rounded-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-float">
                <Image
                  src="/images/profilePic.jpg"
                  alt="Soumyadip Maity - Full Stack Developer"
                  width={400}
                  height={480}
                  className="object-cover w-full max-w-[400px] relative z-10"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-nebula-base/60 via-transparent to-transparent z-20" />
              </div>

              {/* Floating glass decorative element */}
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-2xl glass-card-glow rotate-12 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <p className="text-[#cbc3d7] text-base md:text-lg leading-relaxed mb-6">
                Hi there! I&apos;m{' '}
                <span className="text-gradient-primary font-bold">Soumyadip Maity</span>,
                a passionate developer who loves turning ideas into reality through
                code. My focus is on creating modern, interactive, and accessible
                applications that make a difference.
              </p>
              <p className="text-[#958ea0] text-base md:text-lg leading-relaxed mb-10">
                I enjoy solving complex problems and continuously learning new
                technologies to stay at the forefront of web development. Every
                project is an opportunity to push boundaries and create something
                meaningful.
              </p>

              {/* Highlight Tags – Glass chips */}
              <div className="flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="highlight-chip"
                  >
                    <Icon className="w-4 h-4 text-violet-container" />
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
