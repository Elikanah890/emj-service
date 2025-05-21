/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d5ff',
          300: '#a4baff',
          400: '#7b94ff',
          500: '#5b6bff',
          600: '#3e4ff0',
          700: '#2a33d1',
          800: '#1a2ca4',
          900: '#0e1b70',
          950: '#091554',
        },
        secondary: {
          gold: '#d4af37',
          darkGold: '#b8860b',
          navy: '#0c2340',
          darkNavy: '#051128',
        },
        decoration: {
          primary: '#f97316', // Orange
          light: '#fff7ed',
        },
        vehicle: {
          registered: '#f59e0b', // Amber
          unregistered: '#2563eb', // Blue
          license: '#16a34a', // Green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};