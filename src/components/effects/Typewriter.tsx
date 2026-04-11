'use client';

import { useEffect, useRef } from 'react';

const roles = [
  'Full Stack Developer',
  'Creative Coder',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Typewriter() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        el.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      }
      timeout = setTimeout(type, isDeleting ? 40 : 80);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-10 md:h-12 flex items-center justify-center gap-1.5">
      <span className="text-[#958ea0] text-lg md:text-xl font-mono">{'>'}</span>
      <span
        ref={textRef}
        className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-[#cbc3d7]"
      />
      <span className="w-[3px] h-7 md:h-9 rounded-full bg-gradient-to-b from-violet-container to-cyan-container animate-pulse" />
    </div>
  );
}
