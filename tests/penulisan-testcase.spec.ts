import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://formy-project.herokuapp.com/");
});
test.afterEach(async ({ page }) => {
  await page.waitForTimeout(3000);
});

test.describe("all links", { tag: "@all_links" }, () => {
  test.describe("valid links on the homepage", { tag: "@validLinks" }, () => {
    test("step 1", async ({ page }) => {
      // await page.goto("https://formy-project.herokuapp.com/");
      await page.getByRole("link", { name: "Autocomplete" }).click();
      // await page.waitForTimeout(3000);
    });

    test("step 2", async ({ page }) => {
      // await page.goto("https://formy-project.herokuapp.com/");
      await page.getByRole("link", { name: "Buttons" }).click();
      // await page.waitForTimeout(3000);
    });

    test("step 3", async ({ page }) => {
      // await page.goto("https://formy-project.herokuapp.com/");
      await page.getByRole("link", { name: "Checkbox" }).click();
      // await page.waitForTimeout(3000);
    });

    test("step 4", async ({ page }) => {
      // await page.goto("https://formy-project.herokuapp.com/");
      await page.getByRole("link", { name: "DatePicker" }).click();
      // await page.waitForTimeout(3000);
    });
  });
});
