'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navItems, profile } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const hasHomeSection = Boolean(document.getElementById('home'));
      setScrolled(window.scrollY > 24 || !hasHomeSection);

      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].href.slice(1);
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      setIsOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    },
    []
  );

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b transition duration-300',
        scrolled
          ? 'border-[var(--border)] bg-[rgba(245,247,244,0.88)] shadow-[0_10px_35px_rgba(17,21,19,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between md:h-20">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className={cn(
            'relative z-50 font-display text-base font-bold transition',
            scrolled ? 'text-[var(--text-primary)]' : 'text-white'
          )}
          aria-label="Go to home"
        >
          Soumyadip Maity
        </a>

        <ul
          className={cn(
            'hidden items-center gap-1 rounded-lg border px-1.5 py-1 md:flex',
            scrolled
              ? 'border-[var(--border)] bg-white/70'
              : 'border-white/[0.15] bg-black/20 backdrop-blur-xl'
          )}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={cn(
                    'relative inline-flex rounded-md px-3 py-2 text-sm font-semibold transition',
                    scrolled
                      ? 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      : 'text-white/[0.72] hover:text-white',
                    isActive &&
                      (scrolled
                        ? 'text-[var(--text-primary)]'
                        : 'text-white')
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className={cn(
                        'absolute inset-0 rounded-md',
                        scrolled ? 'bg-[var(--surface-muted)]' : 'bg-white/[0.12]'
                      )}
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={profile.resumeHref}
          download
          className={cn(
            'hidden rounded-lg border px-4 py-2 text-sm font-semibold transition md:inline-flex md:items-center md:gap-2',
            scrolled
              ? 'border-[var(--text-primary)] bg-[var(--surface-strong)] text-white hover:bg-[var(--accent-strong)]'
              : 'border-white/30 bg-white text-[var(--text-primary)] hover:bg-white/[0.9]'
          )}
        >
          <Download className="h-4 w-4" />
          Resume
        </a>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className={cn(
            'relative z-50 rounded-lg border p-2.5 transition md:hidden',
            scrolled
              ? 'border-[var(--border)] bg-white text-[var(--text-primary)]'
              : 'border-white/20 bg-black/20 text-white backdrop-blur-xl'
          )}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--surface-strong)] text-white md:hidden"
          >
            <nav className="flex h-full flex-col items-start justify-center gap-5 px-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.04 + index * 0.04, duration: 0.24 }}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="font-display text-4xl font-semibold"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href={profile.resumeHref}
                download
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.24 }}
                className="button-light mt-5"
              >
                <Download className="h-4 w-4" />
                Download resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
