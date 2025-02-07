import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./", // Essentiel pour GitHub Pages
    build: {
        outDir: "dist",
        assetsDir: "assets",
    },
});
