/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {},
            fontFamily: {
                sans: [],
            },
            letterSpacing: {
                'tca-widest': '0.5em',
            },
            screens: {
                'calculator-app-mobile': '375px',
                'calculator-app-desktop': '1440px',
            },
        },
    },
    plugins: [],
}
