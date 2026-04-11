'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll state and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section (iterate bottom-up)
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-nebula-surface/40 backdrop-blur-2xl shadow-ambient'
          : 'bg-transparent'
      )}
    >
      {/* Refractive bottom edge - ghost border */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-container/20 to-transparent" />
      )}

      <nav className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="relative z-50 group"
          aria-label="Home"
        >
          <span className="text-2xl font-bold font-display text-gradient-hero">
            SM
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-container to-cyan-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 bg-nebula-surface/30 backdrop-blur-xl rounded-full px-2 py-1.5 border border-white/[0.04]" role="navigation">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative',
                  activeSection === item.href.slice(1)
                    ? 'text-[#e1e2ed]'
                    : 'text-[#958ea0] hover:text-[#cbc3d7]'
                )}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex items-center gap-2 btn-gradient !py-2.5 !px-5 !text-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 md:hidden p-2.5 rounded-xl text-[#e1e2ed] hover:bg-white/[0.05] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-nebula-base/98 backdrop-blur-2xl z-40 md:hidden"
          >
            {/* Decorative orbs */}
            <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-violet-container/10 blur-[100px]" />
            <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full bg-cyan-container/8 blur-[80px]" />

            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'text-3xl font-bold font-display tracking-tight transition-colors duration-200',
                    activeSection === item.href.slice(1)
                      ? 'text-gradient-primary'
                      : 'text-[#958ea0] hover:text-[#e1e2ed]'
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-6 btn-gradient inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Let&apos;s Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
