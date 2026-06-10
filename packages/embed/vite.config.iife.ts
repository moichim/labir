/// <reference types="vitest" />

import fs from "fs"
import path from "path"
import { defineConfig } from "vite"
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
    root: path.resolve("./"),
    build: {

        outDir: path.resolve("./dist/iife"),
        emptyOutDir: true,
        copyPublicDir: false,
        minify: "terser",

        terserOptions: {
            maxWorkers: 3,
        },

        rollupOptions: {

            input: {
                embed: path.resolve("./src/index.iife.ts"),
            },

            output: {
                format: 'iife',
                entryFileNames: '[name].iife.js',
                assetFileNames: '[name].iife.[ext]',
            },
            
            plugins: [

                /** After IIFE build, copy files to the packages that depend on it. */
                {
                    name: "closeBundle",
                    closeBundle() {

                        /** Job 1: Copy IIFE into WP package */

                        fs.copyFileSync(
                            path.resolve("./dist/iife/embed.iife.js"),
                            path.resolve("../thermal-display/assets/embed.iife.js")
                        );

                        console.log("IIFE build: @labirthermal/webcomponents build copied into @labir/wordpress");

                        /** Job 2: Copy IIFE into Server package */

                        fs.copyFileSync(
                            path.resolve("./dist/iife/embed.iife.js"),
                            path.resolve("../server/www/lib/embed.iife.js")
                        );

                        console.log("IIFE build: @labirthermal/webcomponents build copied into @labirthermal/server");

                    }
                }

            ],

            preserveEntrySignatures: 'strict',

        },

    },

    plugins: [

        /** @todo This plugin does not seem to have any effect */
        htmlMinifier({

            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeEmptyAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true,
            }

        })

    ],
})