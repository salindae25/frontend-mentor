/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "calculator-app-main": {
          light: "hsl(0, 0%, 90%)",
          DEFAULT: "hsl(222, 26%, 31%)",
          violet: " hsl(268, 75%, 9%)",
        },
        "calculator-app-secondary": {
          DEFAULT: "hsl(223, 31%, 20%)",
          light: "hsl(0, 5%, 81%)",
          violet: "hsl(268, 71%, 12%)",
        },
        "calculator-app-screen": {
          dark: "hsl(224, 36%, 15%)",
          light: "hsl(0, 0%, 93%)",
        },
        "calculator-app-blue-key": {
          DEFAULT: "hsl(225, 21%, 49%)",
          light: "hsl(0, 0%, 93%)",
        },
        "calculator-app-blue-key-shadow": {
          DEFAULT: "hsl(224, 28%, 35%)",
        },
        "calculator-app-red-key": {
          DEFAULT: "hsl(6, 63%, 50%)",
        },
        "calculator-app-red-key-shadow": {
          DEFAULT: "hsl(6, 70%, 34%)",
        },
        "calculator-app-orange-red-key": {
          DEFAULT: "hsl(30, 25%, 89%)",
        },
        "calculator-app-orange-key-shadow": {
          DEFAULT: "hsl(28, 16%, 65%)",
        },
        "calculator-app-blue-text": {
          DEFAULT: "hsl(30, 25%, 89%)",
        },
        "calculator-app-whit-text": {
          DEFAULT: "hsl(0, 0%, 100%)",
        },
      },
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
