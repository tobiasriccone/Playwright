import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  timeout: 10000,
  reporter: [
      ["allure-playwright", { detail: false, resultsDir: "reportes/allure-results" }], // Fuente: https://www.npmjs.com/package/allure-playwright y
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
      name: 'web',
      testDir: 'tests/web',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'web-mobile',
      testDir: 'tests/web',
      use: { ...devices['iPhone 11'] },
    },
    {
      name: 'api',
      testDir: 'tests/api',
      use: {},
    },
  ],
});