import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: "lib",
  dts: true,
  clean: true,
  target: false,
  sourcemap: true,
});
