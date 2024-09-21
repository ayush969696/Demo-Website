/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: ['responsive', 'hover', 'focus'],
    },
    fontFamily: {
      "Montserrat": "Montserrat",
      "Inter": "Inter"
    }
  },
  plugins: [],
};
