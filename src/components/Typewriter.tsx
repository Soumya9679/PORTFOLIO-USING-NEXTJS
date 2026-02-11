'use client';

import { useEffect, useRef } from 'react';

const texts = [
  'Full Stack Developer',
  'Creative Coder',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Typewriter() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        el!.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        el!.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          charIndex = 0;
        }
      }
      timeout = setTimeout(type, isDeleting ? 50 : 100);
    }

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <h2 className="hero-title">
      <span ref={spanRef}></span>
      <span className="cursor">|</span>
    </h2>
  );
}
