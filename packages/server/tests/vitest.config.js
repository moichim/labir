/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.js'],
    testTimeout: 30000,
  },
})