/// <reference types="vitest" />

import { defineConfig, normalizePath } from "vite"
import path from "path"
import fs from "fs"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    root: path.resolve( "./" ),
    // publicDir: path.resolve( "../../public" ),
    build: {
        
        rollupOptions: {
            input: {
                embed: path.resolve( "./src/index.ts" ),
            },
            output: {
                entryFileNames: '[name].esm.js',
                assetFileNames: '[name].[ext]',
                esModule: true
            },
        plugins: [{
            name: "closeBundle",
            closeBundle() {
                fs.copyFileSync(
                    path.resolve( "./dist/embed.esm.js" ),
                    path.resolve( "../thermal-display/assets/embed.esm.js" )
                );
                fs.copyFileSync(
                    path.resolve( "./dist/embed.css" ),
                    path.resolve( "../thermal-display/assets/embed.css" )
                );

                console.log( "@labirthermal/webcomponents build:esm copied into @labir/wordpress" );
            }
        }]
        },
        outDir: path.resolve( "./dist" ),
        emptyOutDir: false,
        copyPublicDir: false,
        minify: true,
    
        // Export as library
        /*
        lib: {
            entry: path.resolve( "./src/index.ts" ),
            formats: [ "cjs", "es" ],
            fileName: (format) => `embed.${format}.js`,
            name: "labir_embed"
        }
        */
    },

    plugins: [
    ],
})