/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        primaryHover: "rgb(var(--color-primary-hover) / <alpha-value>)",
        "primary-text": "rgb(var(--color-primary-text) / <alpha-value>)",
        sidebar: "rgb(var(--color-sidebar-bg) / <alpha-value>)",
        "sidebar-hover": "rgb(var(--color-sidebar-hover) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
