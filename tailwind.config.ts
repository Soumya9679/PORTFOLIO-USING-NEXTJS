import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        'nebula': {
          base: '#06080F',
          surface: '#11131b',
          'surface-low': '#191b23',
          'surface-mid': '#1d1f27',
          'surface-high': '#272a32',
          'surface-highest': '#32343d',
          'surface-bright': '#373941',
        },
        'violet': {
          primary: '#ddb7ff',
          container: '#b76dff',
          deep: '#8B5CF6',
          raw: '#A855F7',
        },
        'cyan': {
          primary: '#5de6ff',
          container: '#00cbe6',
          deep: '#22D3EE',
        },
        'amber': {
          primary: '#ffb869',
          container: '#ca801e',
        },
      },
      animation: {
        'gradient': 'gradient-shift 6s ease infinite',
        'float-slow': 'float-1 25s ease-in-out infinite',
        'float-slower': 'float-2 30s ease-in-out infinite',
        'float-slowest': 'float-3 20s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 30px) scale(0.95)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 20px) scale(1.03)' },
          '66%': { transform: 'translate(30px, -40px) scale(0.97)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(20px, 40px)' },
          '66%': { transform: 'translate(-30px, -20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.02)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-glow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(168, 85, 247, 0.15)',
        'glow-md': '0 0 40px -10px rgba(168, 85, 247, 0.2)',
        'glow-lg': '0 0 60px -12px rgba(168, 85, 247, 0.25)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.2)',
        'ambient': '0 20px 40px rgba(0, 0, 0, 0.4)',
        'float': '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)',
      },
    },
  },
  plugins: [],
};

export default config;
