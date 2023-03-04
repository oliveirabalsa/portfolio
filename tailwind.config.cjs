/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00070d",
        secondary: "#777777",
        tertiary: "#611616",
        "black-100": "#16161a",
        "black-200": "#0f0e0e",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #580707",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
