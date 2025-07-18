/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Optional: very small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#030412",
        midnight: "#06091f",
        navy: "#161a31",
        indigo: "#1f1e39",
        storm: "#282b4b",
        aqua: "#33c2cc",
        mint: "#57db96",
        royal: "#5c33cc",
        lavender: "#7a57db",
        fuchsia: "#ca2f8c",
        orange: "#cc6033",
        sand: "#d6995c",
        coral: "#ea4884",
      },
      fontFamily: {
        display: ["Funnel Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
