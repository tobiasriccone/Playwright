import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  reporter: [
      ["allure-playwright", { detail: false, resultsDir: "reportes/allure-results" }], // Fuente: https://www.npmjs.com/package/allure-playwright
      ['./utils/reporter-listener.ts']
  ],
  outputDir: './reportes/test-results',
  use: {
    headless: true,
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});