/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "_soft-orange": "#e9ab53",
        "_soft-red": "#f15e50",
        "_off-white": "#fffdfa",
        "_graywish-blue": "#c5c6ce",
        "_darkgraywish-blue": "#5d5f79",
        "_very-dark-blue": "#00001a",
      },
    },
  },
  plugins: [],
};
