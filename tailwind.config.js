/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['"League Spartan"'],
      },
      screens: {
        "calculator-app-mobile": "375px",
        "calculator-app-desktop": "1440px",
      },
    },
  },
  plugins: [],
};
