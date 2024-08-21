/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      "white-dark": "#f8f6f6",
      black: "#000000",
      grey: "#818181",
      orange: "#FF7144",
      "orange-dark": "#CF4132 ",
      "orange-light": "#FFA07A",
      blue: "#0066FF ",
      "blue-dark": "#003E9A",
      red: "#D14C3E",
    },
    fontFamily: {},
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
