'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Send,
  Github,
  Linkedin,
  Mail,
  Code2,
  Loader2,
  CheckCircle,
  XCircle,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:maitysoumya108@gmail.com',
    label: 'Email',
    username: 'maitysoumya108@gmail.com',
    color: 'from-rose-500/20 to-orange-500/20',
    iconColor: 'text-rose-400',
  },
  {
    icon: Github,
    href: 'https://github.com/Maitysoumya12345',
    label: 'GitHub',
    username: '@Maitysoumya12345',
    color: 'from-violet-container/20 to-violet-deep/20',
    iconColor: 'text-violet-primary',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/soumyadip-maity-996686353',
    label: 'LinkedIn',
    username: 'Soumyadip Maity',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Code2,
    href: 'https://leetcode.com/u/_soumya__dip_/',
    label: 'LeetCode',
    username: '@_soumya__dip_',
    color: 'from-amber-primary/20 to-orange-500/20',
    iconColor: 'text-amber-primary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
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

  const inputBaseClass =
    'w-full px-5 py-3.5 bg-nebula-surface-low/80 border rounded-xl text-[#e1e2ed] text-sm placeholder:text-[#494454] focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 backdrop-blur-sm';

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6">
      {/* Section ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-container/[0.03] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-container/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              badge="// Contact"
              title="Let&apos;s Connect"
              subtitle="Have a question or want to work together? Reach out!"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Links Card */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 md:p-10"
            >
              <h3 className="text-xl font-bold font-display text-[#e1e2ed] mb-8">
                Find me online
              </h3>
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, href, label, username, color, iconColor }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className={cn(
                      'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-sm',
                      color
                    )}>
                      <Icon className={cn('w-5 h-5', iconColor)} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[#e1e2ed] text-sm font-semibold">{label}</p>
                      <p className="text-[#958ea0] text-xs truncate">
                        {username}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#494454] group-hover:text-[#958ea0] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 md:p-10"
            >
              <h3 className="text-xl font-bold font-display text-[#e1e2ed] mb-8">
                Send a message
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <input
                    {...register('name')}
                    placeholder="Your Name"
                    autoComplete="name"
                    className={cn(
                      inputBaseClass,
                      errors.name
                        ? 'border-red-500/50 focus:ring-red-500/30'
                        : 'border-white/[0.06] focus:ring-violet-container/40'
                    )}
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                      <XCircle className="w-3 h-3" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    className={cn(
                      inputBaseClass,
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500/30'
                        : 'border-white/[0.06] focus:ring-violet-container/40'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                      <XCircle className="w-3 h-3" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Your Message"
                    rows={5}
                    className={cn(
                      inputBaseClass,
                      'resize-none',
                      errors.message
                        ? 'border-red-500/50 focus:ring-red-500/30'
                        : 'border-white/[0.06] focus:ring-violet-container/40'
                    )}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
                      <XCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full btn-gradient !rounded-xl',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-none',
                    'flex items-center justify-center gap-2.5'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <XCircle className="w-4 h-4 shrink-0" />
                    Failed to send. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
