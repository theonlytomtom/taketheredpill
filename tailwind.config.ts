import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D0021B',
        'brand-red-dim': '#8B0012',
        'blue-pill': '#1A6FD4',
        'bg-1': '#0d0d12',
        'bg-2': '#13131a',
        'bg-3': '#18181f',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '2px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
        full: '9999px',
      },
      letterSpacing: {
        widest: '0.22em',
        wider: '0.14em',
        wide: '0.1em',
      },
    },
  },
  plugins: [],
} satisfies Config
