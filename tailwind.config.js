/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js}"],
  content: [],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#FFF",
      "blue-100": "#DADBF1",
      "blue-200": "#4C5FD5",
    },
    fontFamily: {
      "GT-America": ['"GT-America"', "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
