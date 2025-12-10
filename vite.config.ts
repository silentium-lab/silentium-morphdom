import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable DOM environment for testing
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts'
  }
});
