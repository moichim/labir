/// <reference types="vitest" />

import { defineConfig, normalizePath, Terser } from "vite"
import path from "path"
import fs from "fs"
import { viteStaticCopy } from 'vite-plugin-static-copy'
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
    root: path.resolve("./src"),
    publicDir: path.resolve("../../public"),
    build: {

        rollupOptions: {
            input: {
                embed: path.resolve("./src/index.ts"),
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
            plugins: [
                /** @todo This plugin does not seem to have any effect */
                /*
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
                }),
                */
                {
                    name: "closeBundle",
                    closeBundle() {
                        fs.copyFileSync(
                            path.resolve("./dist/embed.js"),
                            path.resolve("../thermal-display/assets/embed.js")
                        );

                        console.log("@labirthermal/webcomponents build copied into @labir/wordpress");

                        fs.copyFileSync(
                            path.resolve("./dist/embed.js"),
                            path.resolve("../server/www/lib/embed.js")
                        );

                        console.log("@labirthermal/webcomponents build copied into @labirthermal/server");
                    }
                }
            ],
            preserveEntrySignatures: 'strict',
        },
        terserOptions: {
            ecma: 2020,
            module: true,
            maxWorkers: 3,
        },
        outDir: path.resolve("./dist"),
        // emptyOutDir: true,
        copyPublicDir: false,
        minify: "terser",

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