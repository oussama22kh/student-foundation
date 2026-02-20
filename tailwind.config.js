/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Kufi Arabic', 'system-ui', 'sans-serif'],
      },
      colors: {
        algeria: {
          blue: '#1A3263',
          teal: '#547792',
          gold: '#FAB95B',
          cream: '#E8E2DB',
          green: '#0D5E2E',
          red: '#C93A40',
          white: '#FFFFFF',
          dark: '#1A1A1A',
        },
        academic: {
          blue: '#1A3263',
          lightblue: '#547792',
          gray: '#E8E2DB',
          darkgray: '#4B5563',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 0 0 1px rgba(26, 50, 99, 0.08), 0 3px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 0 0 1px rgba(250, 185, 91, 0.2), 0 10px 25px -3px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
