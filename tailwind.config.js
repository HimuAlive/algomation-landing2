/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4b3f94",
          50: "#f4f2ff",
          100: "#e0dbf7",
          200: "#c3b8ef",
          300: "#a18ee5",
          400: "#866ce0",
          500: "#6a5acd", // base slate blue
          600: "#5e4fb5",
          700: "#4b3f94",
          800: "#3b3276",
          900: "#2c2559",
        },
        accent: {
          DEFAULT: "#00BFFF", // Sky Blue
          light: "#5FDBFF",
          dark: "#009ACF"
        },
        background: "#FAFAFA",
        text: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        header: ['"Merriweather"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


