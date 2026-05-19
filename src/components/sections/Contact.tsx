'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  XCircle,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile, socialLinks } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

const inputBaseClass =
  'w-full rounded-lg border bg-white px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition focus:border-transparent focus:outline-none focus:ring-2';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      await fetch(
        'https://script.google.com/macros/s/AKfycbwYxbMEKkY1AzfMSFc7_PjWhOF0ouyQCVuWmyQNqM0IVijTyu56YPxPouzpcYQ56k8f/exec',
        { method: 'POST', body: formData, mode: 'no-cors' }
      );

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="section-y border-t border-[var(--border)] bg-[var(--surface-muted)]"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about your next web idea."
              subtitle="Send a message, download the resume, or reach out through any social channel. I keep communication direct and project-focused."
            />

            <div className="surface-dark p-6 md:p-8">
              <p className="text-sm font-semibold text-white/[0.58]">Direct email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block break-words font-display text-2xl font-semibold text-white transition hover:text-[#8ddbd5]"
              >
                {profile.email}
              </a>

              <div className="mt-8 space-y-3">
                {socialLinks.map(({ href, label, username, kind }) => {
                  const Icon = iconMap[kind];

                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="flex items-center gap-4 rounded-lg border border-white/10 px-4 py-3 text-white/[0.78] transition hover:border-white/[0.24] hover:bg-white/[0.06] hover:text-white"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.08]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">{label}</span>
                        <span className="block truncate text-xs text-white/[0.52]">
                          {username}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
            className="surface-card p-6 md:p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
              Send a message
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              Share the goal, timeline, and any useful context. The form will send
              your note directly to me.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[var(--text-primary)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register('name')}
                  placeholder="Your name"
                  autoComplete="name"
                  className={cn(
                    inputBaseClass,
                    errors.name
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-[var(--border)] focus:ring-[rgba(15,118,110,0.22)]'
                  )}
                />
                {errors.name && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[var(--text-primary)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={cn(
                    inputBaseClass,
                    errors.email
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-[var(--border)] focus:ring-[rgba(15,118,110,0.22)]'
                  )}
                />
                {errors.email && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[var(--text-primary)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell me what you want to build..."
                  rows={6}
                  className={cn(
                    inputBaseClass,
                    'resize-none',
                    errors.message
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-[var(--border)] focus:ring-[rgba(15,118,110,0.22)]'
                  )}
                />
                {errors.message && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-red-600">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Message sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <XCircle className="h-4 w-4 shrink-0" />
                  Failed to send. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
