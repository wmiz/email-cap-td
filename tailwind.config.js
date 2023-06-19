/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#1E90FF",
        darkBlue: "#204c8a",
      },
      fontFamily: {
        goog: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
