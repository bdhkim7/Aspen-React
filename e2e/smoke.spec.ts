import { expect, test } from "@playwright/test";

test.describe("core pages", () => {
  test("homepage loads with brand and product lineup", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Aspen Imaging/i);
    await expect(
      page.getByRole("heading", { name: /Aspen Imaging is redefining/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Our Product Line Up" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Europa90/i }).first()).toBeVisible();
    await expect(page.getByRole("button", { name: "Send Inquiry" })).toBeVisible();
  });

  test("about us page loads", async ({ page }) => {
    await page.goto("/about-us");

    await expect(page).toHaveTitle(/About/i);
    await expect(page.getByRole("link", { name: "Contact Us" }).first()).toBeVisible();
  });

  test("contact us page shows inquiry form", async ({ page }) => {
    await page.goto("/contact-us");

    await expect(page).toHaveTitle(/Contact/i);
    await expect(page.getByRole("heading", { name: /Contact us/i })).toBeVisible();
    await expect(page.getByPlaceholder("Name *")).toBeVisible();
    await expect(page.getByPlaceholder("Email *")).toBeVisible();
    await expect(page.getByRole("button", { name: "Send Inquiry" })).toBeVisible();
  });

  test("faqs page loads", async ({ page }) => {
    await page.goto("/faqs");

    await expect(page).toHaveTitle(/FAQ/i);
  });

  test("europa90 product page loads", async ({ page }) => {
    await page.goto("/products/europa-90");

    await expect(page).toHaveTitle(/Europa90/i);
    await expect(
      page.getByRole("heading", { name: /Europa90/i }).first(),
    ).toBeVisible();
  });

  test("commitment folds into about us, and thank-you loads", async ({ page }) => {
    await page.goto("/commitment");
    await expect(page).toHaveURL(/\/about-us#quality$/);
    await expect(page.getByRole("heading", { name: /Our Mission/i })).toBeVisible();

    await page.goto("/thank-you");
    await expect(page).toHaveTitle(/Thank|Aspen/i);
  });
});

test.describe("legacy html redirects", () => {
  const redirects: { from: string; to: string | RegExp }[] = [
    { from: "/aboutus.html", to: /\/about-us\/?$/ },
    { from: "/contact-us.html", to: /\/contact-us\/?$/ },
    { from: "/faqs.html", to: /\/faqs\/?$/ },
    { from: "/europa90.html", to: /\/products\/europa-90\/?$/ },
  ];

  for (const { from, to } of redirects) {
    test(`${from} redirects to ${to}`, async ({ page }) => {
      const response = await page.goto(from);
      expect(response?.ok()).toBeTruthy();
      await expect(page).toHaveURL(to);
    });
  }
});

test.describe("shared chrome", () => {
  test("footer company links are present", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "About us" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact Us" }).first()).toBeVisible();
    await expect(
      page.getByRole("link", { name: "sales@aspenimaging.com" }).first(),
    ).toBeVisible();
  });
});
