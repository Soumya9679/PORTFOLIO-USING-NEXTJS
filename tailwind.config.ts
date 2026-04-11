import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'float-slow': 'float-1 25s ease-in-out infinite',
        'float-slower': 'float-2 30s ease-in-out infinite',
        'float-slowest': 'float-3 20s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -50px)' },
          '66%': { transform: 'translate(-20px, 30px)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-40px, 20px)' },
          '66%': { transform: 'translate(30px, -40px)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(20px, 40px)' },
          '66%': { transform: 'translate(-30px, -20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
