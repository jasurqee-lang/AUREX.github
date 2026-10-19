/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurex: {
          black: '#090A0B',
          surface: '#111214',
          'surface-2': '#171819',
          'surface-3': '#1E2023',
          white: '#F2F0EC',
          gray: '#8E9094',
          'gray-muted': '#55585E',
          red: '#A5262D',
          'red-bright': '#C72F37',
          'red-glow': 'rgba(165, 38, 45, 0.35)',
          border: 'rgba(242, 240, 236, 0.08)',
          'border-highlight': 'rgba(242, 240, 236, 0.18)',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.28em',
        'super-wide': '0.4em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'sweep': 'lightSweep 6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
        lightSweep: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '50%, 100%': { transform: 'translateX(250%) rotate(25deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
