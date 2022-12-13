/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
   globals: true,
   environment: 'jsdom',
   setupFiles: './test-setup/setup.ts',
   testTimeout: 60000,
   include: ['**/*.{test,spec}.{js,mjs, ts']
  },
})
