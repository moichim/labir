/// <reference types="vitest" />

import { defineConfig, normalizePath } from "vite"
import path from "path"
import { viteStaticCopy } from 'vite-plugin-static-copy'

import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    root: path.resolve( "./src" ),
    publicDir: path.resolve( "../../public" ),
    build: {
        
        rollupOptions: {
            input: {
                embed: path.resolve( "./src/index.ts" ),
                //index: path.resolve( "./public/index.html" )
            },
            output: {
                entryFileNames: '[name].js',
                // format: "iife",
                inlineDynamicImports: true,
            },
        },
        outDir: path.resolve( "./dist" ),
        emptyOutDir: true,
        copyPublicDir: false,
        minify: true,
    },

    plugins: [

        wasm(),
        topLevelAwait(),
        
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
})