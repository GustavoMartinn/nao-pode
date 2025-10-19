/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-bg': '#F9FAFB',
        'game-card': '#FFFFFF',
        'game-text': '#111827',
        'game-danger': '#EF4444',
        'game-primary': '#2563EB',
        'game-accent': '#FACC15',
        'game-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
