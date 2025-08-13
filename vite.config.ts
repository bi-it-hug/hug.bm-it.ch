import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            "/api": {
                target: "https://api.wartezeiten.app/v1",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    resolve: {
        alias: {
            "@utils": path.resolve(__dirname, "src/utils"),
            "@models": path.resolve(__dirname, "src/models"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
});
