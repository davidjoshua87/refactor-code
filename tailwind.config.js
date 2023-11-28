/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-children")],
};
