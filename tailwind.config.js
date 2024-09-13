/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./templates/*.{htm,js}"],
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        playwrite: ['"Playwrite CU"', 'serif'],
      },
      boxShadow: {
        '4xl': '0 6.73px 6.73px rgba(0, 0, 0, 0.26)', // Custom shadow with specified values
        '3xl': '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
        '3.5xl': '5.412px 4.736px 13.531px 0px rgba(0, 0, 0, 0.25)',
        '3.75xl' : '8px 7px 20px 0px rgba(0, 0, 0, 0.25)',
      },

    },
  },
  plugins: [],
}

