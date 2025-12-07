// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        techBg: "#050810",       // deep navy-black
        creativeBg: "#130b0b",   // cinematic warm black
        primaryBlue: "#4FC3F7",  // neon blue
        accentGold: "#FFAE42",   // golden orange
      },
    },
  },
  plugins: [],
};