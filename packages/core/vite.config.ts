/// <reference types="vitest" />

import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
    root: "./devserver/www",
    publicDir: path.resolve( "../../public" ),
    test: {
        root: "./src",
        globals: true,
        environment: "jsdom",
        setupFiles: [
            "./devserver/node/setup.ts",
            "./vitest.setup.ts",
        ],
        deps: {
            inline: [ "vitest-canvas-mock" ]
        },
        coverage: {
            provider: "v8"
        },
        slowTestThreshold: 0,
    }
})