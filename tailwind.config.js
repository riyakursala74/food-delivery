/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //just add this below and your all other tailwind colors willwork
        ...colors,
      },
    },
  },
  plugins: [],
};
