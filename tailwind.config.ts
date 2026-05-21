import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds & surfaces — no opacity modifier needed; plain var() works
        'w-bg':       'var(--w-bg)',
        'w-surface':  'var(--w-surface)',
        'w-surface-2':'var(--w-surface-2)',
        'w-accent':   'var(--w-accent)',
        'w-text':     'var(--w-text)',
        'w-muted':    'var(--w-muted)',
        'w-border':   'var(--w-border)',
        'w-border-f': 'var(--w-border-focus)',

        // Brand colors — use RGB channel vars so opacity modifiers like /40 work
        'w-primary':   'rgb(var(--w-primary-rgb) / <alpha-value>)',
        'w-secondary': 'rgb(var(--w-secondary-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-manrope)',       'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'elev-1':      '0 1px 2px rgba(0,0,0,.32)',
        'elev-2':      '0 6px 16px rgba(0,0,0,.36)',
        'elev-3':      '0 16px 40px rgba(0,0,0,.48)',
        'card-hover':  '0 12px 28px rgba(0,0,0,.40), 0 0 0 1px rgba(167,139,250,.35)',
        'glow-p':      '0 0 32px rgba(167,139,250,.45)',
        'glow-s':      '0 0 32px rgba(34,211,238,.45)',
        'glow-a':      '0 0 32px rgba(255,221,68,.35)',
        'node-active': '0 0 0 6px rgba(167,139,250,.20), 0 0 24px rgba(167,139,250,.30)',
      },
      animation: {
        'pulse-ring':     'pulseRing 2s ease-out infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 10s ease infinite',
        'float':          'float 5s ease-in-out infinite',
      },
      keyframes: {
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0'   },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%'   },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)'   },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
