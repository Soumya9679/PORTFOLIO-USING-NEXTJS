'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const skillCategories = [
  {
    title: 'Web Technologies',
    description: 'Building modern web experiences',
    emoji: '🌐',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core programming foundations',
    emoji: '⚡',
    skills: [
      { name: 'C', level: 85 },
      { name: 'Java', level: 40 },
      { name: 'Python', level: 30 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 md:py-36 px-6">
      {/* Section ambient glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-container/[0.03] blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              badge="// Skills"
              title="My Skills"
              subtitle="Technologies and languages I work with"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group glass-card p-8 md:p-10 hover:shadow-glow-sm transition-all duration-500"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{category.emoji}</span>
                  <h3 className="text-lg font-bold font-display text-[#e1e2ed]">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[#958ea0] text-sm mb-8 ml-9">
                  {category.description}
                </p>

                {/* Skills with animated bars */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[#cbc3d7] text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[#494454] text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar track */}
                      <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden relative">
                        {/* Gradient fill with glow */}
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{
                            background: 'linear-gradient(90deg, #b76dff 0%, #00cbe6 100%)',
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 1.2,
                            delay: 0.3,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                        >
                          {/* Shimmer effect */}
                          <div
                            className="absolute inset-0 rounded-full opacity-30"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                              backgroundSize: '200% 100%',
                              animation: 'shimmer 3s linear infinite',
                            }}
                          />
                          {/* Glow dot at the end */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-container shadow-[0_0_12px_rgba(0,203,230,0.5)]" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
