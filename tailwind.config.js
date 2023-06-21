/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Audiowide: ['Audiowide', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
