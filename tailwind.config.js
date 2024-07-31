/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        100: "0.375rem",
        200: "1rem",
        300: "1.25rem",
        400: "1.875rem",
        500: "3rem",
      },
    },
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
