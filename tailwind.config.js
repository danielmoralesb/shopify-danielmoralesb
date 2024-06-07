/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid",
    "./node_modules/flowbite/src/**/*.js",
  ],
  theme: {
    screens: {
      xs: "90%",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
        lg: "0",
        xl: "0",
      },
    },
    colors: {
      primary: "#323550",
      "primary-alt": "#22253A",
      "primary-light": "#4A4E69",
      secondary: "#191B28",
      tertiary: "#DAB279",
      "tertiary-alt": "#967751",
      quaternary: "#02040C",
      light: "#FFFFFF",
      medium: "#7C8A9A",
    },
    fontFamily: {
      abril: ["Abril Fatface", "serif"],
      lato: ["Lato", "serif"],
      allura: ["Allura", "cursive"],
    },
    fontSize: {
      xs: "0.6rem",
      sm: "0.75rem",
      base: "1rem",
      "base-lg": "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": "6rem",
    },
    extend: {
      backgroundImage: {
        "icon-bars": "url('/assets/icon-bars.svg')",
        "icon-cross": "url('/assets/icon-cross.svg')",
      },
    },
  },
};
