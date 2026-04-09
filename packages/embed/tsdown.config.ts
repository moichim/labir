import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'lib',
  dts: {
    tsconfig: './tsconfig.lib.json',
  },
  clean: true,
  target: false,
  sourcemap: true,
  deps: {
    neverBundle: [
      'toolcool-range-slider',
    ],
  },
});
