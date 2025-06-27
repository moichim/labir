/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.js'],
    testTimeout: 30000,
    sequence: {
      shuffle: false, // Disable shuffling of test order
      repeatEach: 1, // Run each test only once
    }
  },
})