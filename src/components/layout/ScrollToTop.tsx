'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl',
        'bg-nebula-surface-high/80 backdrop-blur-xl',
        'border border-white/[0.06]',
        'flex items-center justify-center text-[#cbc3d7]',
        'shadow-float',
        'transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-sm hover:text-violet-primary hover:border-violet-container/30',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
