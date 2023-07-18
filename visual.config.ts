import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: 'tests/visual',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'only-on-failure',
  },
  reporter: [
    //["list"],
    ["dot"], // -> console
    ["json", { outputFile: "test-result.json",outputFolder: 'Test-Report' }],//  -> JSON
    ['junit', { outputFile: 'results.xml',outputFolder: 'Test-Report' }],
    ['html', {
        open: "never",
        outputFolder: 'Test-Report'
    }] // -> HTML
],
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
}

export default config
