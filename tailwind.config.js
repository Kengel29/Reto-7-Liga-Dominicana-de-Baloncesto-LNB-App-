/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'none' } },
        scaleUp: { from: { opacity: 0, transform: 'scale(.95)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: { fadeIn: 'fadeIn .4s ease-out', scaleUp: 'scaleUp .25s ease-out' },
    },
  },
  plugins: [],
}
