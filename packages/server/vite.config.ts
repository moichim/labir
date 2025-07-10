/// <reference types="vitest" />

import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
    root: path.resolve(__dirname, "client"),
    resolve: {
        alias: {
            "@labir/core": path.resolve(__dirname, "../core/src/index.ts"),
        },
    },
    build: {
        outDir: path.resolve(__dirname, "client", "dist"),
        lib: {
            entry: path.resolve(__dirname, "client", "src", "index.ts"),
            name: "@labir/server",
            formats: ["es", "cjs"],
            fileName: (format) => `server.${format}.js`,
        }
    },

})