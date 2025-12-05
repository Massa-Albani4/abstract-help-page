/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "GT-America": ["GT America Trial", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
        sm: "432px",
      },
      gridTemplateColumns: {
        footer: "repeat(5, 14rem)",
        4: "repeat(4, 11rem)",
      },
    },
    colors: {
      black: "#191A1B",
      "black-200": "#000000",
      white: "#FFFFFF",
      gray: "#FFFFFF70",
      "blue-100": "#DADBF1",
      "blue-200": "#4C5FD5",
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
