/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.js'],
    testTimeout: 30000,
    environment: 'jsdom', // Use jsdom for browser-like environment
    sequence: {
      shuffle: false, // Disable shuffling of test order
      repeatEach: 1, // Run each test only once
      concurrent: false, // Run all tests strictly one after another (not in parallel)
      maxParallel: 1, // Ensure only one test runs at a time
      maxWorkers: 1, // Limit to one worker to avoid parallel execution issues
    },
    exclude: [
      'node_modules',
      'dist',
      'build',
      'tests',
    ],
  },
})