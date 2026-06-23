require('dotenv').config();
const { defineConfig } = require('@playwright/test');
const { baseUrl, basicHlg } = require('./utils/envConfig');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],
  use: {
    baseURL: baseUrl,
    extraHTTPHeaders: {
      Authorization: `Basic ${basicHlg}`,
      'Content-Type': 'application/json',
    },
  },
});
