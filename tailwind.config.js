/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Audiowide: ['Audiowide', 'cursive'],
        Montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        formShadow: '0px 0px 5px 1px #080808;'
      },
      colors: {
        'gray-801': '#283035'
      },
      screens: {
        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
        xsm: { max: '470px' }
        // => @media (max-width: 470px) { ... }
      }
    }
  },
  plugins: []
}
