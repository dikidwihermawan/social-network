import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import React from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        React(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
});
