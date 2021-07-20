const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      backgroundImage: theme => ({
        'bg-img-main': "url('/src/img/bg_1.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
