/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgColor: "var(--color-bg) ",
      div: "var(--color-div) ",
      blue: "rgb(var(--color-blue) )",
      black: "rgb(var(--color-black))",


    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
}