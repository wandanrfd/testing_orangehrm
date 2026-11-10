import { test, expect } from "@playwright/test";

test("orangehrm for login to dashboard", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  // Validasi masuk ke halaman Dashboard
  await page.getByRole("link", { name: "Dashboard" }).click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );

  const dashboardtitle = page.getByRole("heading", { name: "Dashboard" });
  await expect(dashboardtitle).toBeVisible();
});
