'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const skillCategories = [
  {
    title: 'Web Technologies',
    description: 'Building modern web experiences',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core programming foundations',
    skills: [
      { name: 'C', level: 85 },
      { name: 'Java', level: 40 },
      { name: 'Python', level: 30 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
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
                className="group glass-card p-6 md:p-8 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 shrink-0" />
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 ml-5">
                  {category.description}
                </p>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 1.2,
                            delay: 0.3,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                        />
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
