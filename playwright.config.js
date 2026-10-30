import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright',
  use: { baseURL: 'http://127.0.0.1:3000', headless: true },
  reporter: [['list'], ['html', { open: 'never' }]],
  webServer: {
    command: 'npm start',
    url: 'http://127.0.0.1:3000/health',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000
  }
});
