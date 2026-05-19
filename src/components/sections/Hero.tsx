'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { heroStats, profile, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#07100f] text-white"
    >
      <Image
        src="/images/profilePic.jpg"
        alt="Soumyadip Maity"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[61%_39%] opacity-[0.82] sm:object-[66%_40%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,15,0.96)_0%,rgba(7,16,15,0.84)_42%,rgba(7,16,15,0.36)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(7,16,15,0),var(--bg-base))]" />

      <div className="section-shell relative flex min-h-[88svh] items-end pb-14 pt-28 md:pb-[4.5rem] md:pt-32">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full min-w-0 max-w-4xl"
        >
          <span className="eyebrow eyebrow-inverse">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location} based - available for web projects
          </span>

          <h1 className="mt-6 max-w-[22rem] font-display text-4xl font-semibold leading-tight sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-[22rem] text-lg font-semibold leading-8 text-white/[0.88] sm:max-w-2xl md:text-2xl">
            {profile.role} crafting polished web experiences.
          </p>

          <p className="mt-5 max-w-[22rem] text-base leading-8 text-white/70 sm:max-w-2xl md:text-lg">
            I turn learning ideas and product concepts into responsive web
            experiences with clean interfaces and clear user journeys.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-light">
              View selected work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={profile.resumeHref} download className="button-light bg-white/[0.12] text-white backdrop-blur hover:bg-white/[0.18]">
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, label, kind }) => {
              const Icon = iconMap[kind];

              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.18] bg-white/[0.08] text-white/[0.74] backdrop-blur transition hover:border-white/[0.42] hover:text-white"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 overflow-hidden rounded-lg border border-white/[0.14] bg-white/10 backdrop-blur sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-white/[0.12] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-display text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-white/[0.62]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
