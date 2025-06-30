/// <reference types="vitest" />

import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
    root: path.resolve( __dirname, "client" ),
    build: {
        outDir: path.resolve( __dirname, "client","dist" ),
        lib: {
            entry: path.resolve( __dirname, "client", "src", "index.ts" ),
            name: "@labir/server",
            formats: ["es"],
            fileName: ( format ) => `server.${format}.js`,
        }
    },
    test: {
        root: path.resolve( __dirname, "client", "tests" ),
        setupFiles: [
            path.resolve( __dirname, 'tests','vitest.setup.js')
        ],
        coverage: {
            provider: "v8"
        },
        slowTestThreshold: 0,
    }
})