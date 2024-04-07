/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            bgMain: "#121212",
            bgSecondary: "#275ecb",
            bgCard: "#2b3983",
            bgCardSecondary: "#383838",
            colorMain: "#d6dcd7",
            colorSecondary: "#99989f",
        },
        extend: {},
    },
    plugins: [],
};
