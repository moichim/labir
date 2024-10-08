/// <reference types="vitest" />

import { defineConfig, normalizePath } from "vite"
import path from "path"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    root: path.resolve( "./src" ),
    publicDir: path.resolve( "../../public" ),
    build: {
        rollupOptions: {
            input: {
                embed: path.resolve( "./src/index.ts" ),
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
        outDir: path.resolve( "./dist" ),
        emptyOutDir: true,
        copyPublicDir: false,
        minify: true
    },

    plugins: [
        
        // react({ 
            // jsxImportSource: '@emotion/react' 
        // }),
        

        viteStaticCopy({
            targets: [
                {
                    src: normalizePath( path.resolve( "../../public/index.html" ) ),
                    dest: normalizePath( path.resolve( "dist" ) )
                },
                {
                    src: normalizePath( path.resolve( "../../public/sample.lrc" ) ),
                    dest: normalizePath( path.resolve( "dist" ) )
                }
            ]
        })
    ],

    test: {
        root: "./src",
        globals: true,
        environment: "jsdom",
        setupFiles: [
            "./node/setup.ts",
            "./vitest.setup.ts"
        ],
        deps: {
            inline: [ "vitest-canvas-mock" ]
        },
        coverage: {
            provider: "v8"
        }
    }
})