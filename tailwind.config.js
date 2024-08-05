/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "GT-America": ["GT America Trial", "sans-serif"],
      },
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "blue-100": "#DADBF1",
      "blue-200": "#4C5FD5",
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
