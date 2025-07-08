import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
        'packages/server',
        'packages/core',
        'packages/*'
    ],
  },
})