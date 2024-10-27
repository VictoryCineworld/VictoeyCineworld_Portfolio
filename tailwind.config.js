/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(284deg, #yourColor1, #yourColor2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}