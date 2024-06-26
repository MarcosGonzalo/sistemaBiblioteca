/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontSize: {
        "grande": "150px"
      },

      boxShadow: {
        'mio': '0 0 20px 1px rgb(251, 191, 36)',
        '3xl': '0 35px 60px -15px rgba(251, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}

