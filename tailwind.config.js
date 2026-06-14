/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#ffe066',
          400: '#f5c400',
          500: '#e0af00',
          600: '#c89c00',
        },
        dark: {
          50:  '#f5f5f5',
          100: '#333333',
          200: '#2a2a2a',
          300: '#222222',
          400: '#1e1e1e',
          500: '#1a1a1a',
          600: '#151515',
          700: '#111111',
          800: '#0e0e0e',
          900: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};
