/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#8C624E',
          DEFAULT: '#3C2A21',
          dark: '#1E140F',
          darkest: '#120A07',
        },
        gold: {
          light: '#E6C35C',
          DEFAULT: '#D4AF37',
          dark: '#B08E26',
        },
        cream: {
          light: '#FDFBF7',
          DEFAULT: '#F5EBE0',
          dark: '#D5C3B3',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'steam': 'steam 4s ease-in-out infinite',
        'bean-drift-1': 'beanDrift1 12s linear infinite',
        'bean-drift-2': 'beanDrift2 16s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1) scaleY(1)', opacity: '0' },
          '15%': { opacity: '0.5' },
          '50%': { transform: 'translateY(-20px) scaleX(1.2) scaleY(0.8)', opacity: '0.3' },
          '100%': { transform: 'translateY(-40px) scaleX(1.5) scaleY(0.5)', opacity: '0' },
        },
        beanDrift1: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.4' },
          '90%': { opacity: '0.4' },
          '100%': { transform: 'translate(40px, -60px) rotate(180deg)', opacity: '0' },
        },
        beanDrift2: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translate(-50px, -80px) rotate(-120deg)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}
