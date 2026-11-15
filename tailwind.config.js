/** @type {import('tailwindcss').Config} */
const dir = __dirname.replace(/\\/g, "/");

module.exports = {
  content: [
    `${dir}/*.html`,
    `${dir}/*.js`
  ],
  theme: {
    extend: {
      colors: {
        "surface-dim": "#F8FAFC",
        "surface": "#FFFFFF",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FFF5F5",
        "surface-container": "#F1F5F9",
        "surface-container-high": "#E2E8F0",
        "primary": "#E11D2E",
        "primary-container": "#E11D2E",
        "primary-dark": "#BE1221",
        "primary-soft": "#FFF1F2",
        "primary-bright": "#E11D2E",
        "primary-light": "#FB7185",
        "on-primary-container": "#FFFFFF",
        "secondary": "#EA580C",
        "tertiary": "#059669",
        "accent-red": "#E11D2E",
        "on-surface": "#0F172A",
        "on-surface-variant": "#475569",
        "outline": "#94A3B8"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"]
      },
      screens: {
        xs: "420px"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
