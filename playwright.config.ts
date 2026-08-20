import { defineConfig, devices } from "@playwright/test";

/** Amplify/CI builds the app and tests localhost; local default hits the preview. */
const baseURL =
  process.env.PLAYWRIGHT_BASE_URL ??
  (process.env.CI
    ? "http://127.0.0.1:3001"
    : "https://main.dcvj52whh0gv8.amplifyapp.com");

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  timeout: 45_000,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
