/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#000",
        darkBlue: "#00b6aa",
        blackgrey: "#333",
      },
      fontFamily: {
        goog: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
