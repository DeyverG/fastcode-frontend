module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'loading': 'rgba(255,255,255, 0.7)',
        'search': 'linear-gradient(to right, #2563EB,  #DB2777)'

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
