import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['client/src/index.ts'],
    outDir: "client/dist",
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    // splitting: false,
});