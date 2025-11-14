/// <reference types="vitest" />

import { defineConfig, normalizePath } from "vite"
import path from "path"
import fs from "fs"
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
        // emptyOutDir: true,
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