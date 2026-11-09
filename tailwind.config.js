/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#E9E6E3', // warm off-white / light greige
          dark: '#0E0E10',  // editorial deep charcoal/black
        },
        ink: {
          light: '#111111', // near black
          muted: '#62605C',
          dark: '#F3EFEA',  // light in dark mode
          darkMuted: '#9E9C98',
        },
        accent: {
          DEFAULT: '#3730A3', // Deep indigo / electric cobalt from badge
          light: '#4F46E5',
          dark: '#6366F1',
          crimson: '#D92338',
        },
        card: {
          light: '#F4F1ED',
          dark: '#17171A',
        },
        borderMuted: {
          light: '#D3CFCA',
          dark: '#2A2A2E',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        script: ['"Great Vibes"', '"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.25em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

