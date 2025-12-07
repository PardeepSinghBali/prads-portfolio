/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techBg: "#050810",
        creativeBg: "#130b0b",
        primaryBlue: "#4FC3F7",
        accentGold: "#FFAE42",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        serifDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};