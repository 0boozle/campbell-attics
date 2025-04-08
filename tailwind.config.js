/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          copper: '#E87C4A', // Enhanced contrast copper color
          'copper-light': '#F19B72',
          'copper-dark': '#D15E2C',
          dark: '#0F172A',
          'dark-light': '#1E293B',
          navy: '#1E293B',
          'cool-gray': '#E5E7EB',
          'sage': '#EDF3F0',
          'text': '#E5E7EB'  // Changed from previous gray to a lighter, more contrasting color
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.8rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-large': ['1.1rem', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        '3d': '8px 8px 16px rgba(0,0,0,0.3), inset 1px 1px 1px rgba(255,255,255,0.3)',
        '3d-hover': '12px 12px 24px rgba(0,0,0,0.4), inset 1px 1px 2px rgba(255,255,255,0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse 30s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transform: {
        '102': 'scale(1.02)',
      },
      scale: {
        '102': '1.02',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #0F172A, #1E293B)',
      }
    },
  },
  safelist: [
    'scale-102',
    'hover:scale-102'
  ],
  plugins: [],
};