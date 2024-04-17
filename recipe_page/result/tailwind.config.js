/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Outfit": ['"Outfit"', "sans-serif"],
        "Young-Serif": ['"Young Serif"', "sans-serif"],
      },
      colors: {
        "Nutmeg": "#854632",
        "Dark-Raspberry": "#7b284f",
        "Rose-White": "#fff5fa",
        "Eggshell": "#f3e6d8",
        "Light-Grey": "#e4ded8",
        "Wenge-Brown": "#5f574e",
        "Dark-Charcoal": "#302d2c ",
      },
    },
  },
  plugins: [],
};
