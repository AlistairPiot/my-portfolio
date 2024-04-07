/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            mainBg: "#121212",
            secondaryBg: "#275ecb",
            cardBg: "#2b3983",
            cardSecondaryBg: "#383838",
            mainColor: "#d6dcd7",
            secondaryColor: "#99989f",
        },
        extend: {},
    },
    plugins: [],
};
