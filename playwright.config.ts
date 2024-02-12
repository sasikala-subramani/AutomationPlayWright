import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 300000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"], ["junit", {outputFile: "test-result.xml"}]],
  testMatch: ["sanitycheck.test.ts"],
  use: {
    headless: true,
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on",
    screenshot: "only-on-failure",
    trace: "on",
    bypassCSP: true,
    launchOptions: {
      args: ['--disable-web-security']
    },
  },
};

export default config;