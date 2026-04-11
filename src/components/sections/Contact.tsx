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
  },
  {
    icon: Github,
    href: 'https://github.com/Maitysoumya12345',
    label: 'GitHub',
    username: '@Maitysoumya12345',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/soumyadip-maity-996686353',
    label: 'LinkedIn',
    username: 'Soumyadip Maity',
  },
  {
    icon: Code2,
    href: 'https://leetcode.com/u/_soumya__dip_/',
    label: 'LeetCode',
    username: '@_soumya__dip_',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
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
    'w-full px-4 py-3 bg-white/[0.04] border rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all duration-200';

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
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
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-6">
                Find me online
              </h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, href, label, username }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={
                      href.startsWith('mailto')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium">{label}</p>
                      <p className="text-slate-500 text-xs truncate">
                        {username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-6">
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
                      errors.name ? 'border-red-500/50' : 'border-white/[0.08]'
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">
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
                        ? 'border-red-500/50'
                        : 'border-white/[0.08]'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
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
                        ? 'border-red-500/50'
                        : 'border-white/[0.08]'
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300',
                    'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white',
                    'hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
                    'flex items-center justify-center gap-2'
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    Message sent successfully!
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
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
