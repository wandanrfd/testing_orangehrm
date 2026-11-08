import { test, expect } from "@playwright/test";

test("orangehrm for login to dashboard", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByRole("textbox", { name: "Username" }).dblclick();
  await page.getByRole("textbox", { name: "Username" }).click({
    clickCount: 3,
  });
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).dblclick();
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Dashboard" }).dblclick();

  //validasi
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
  const dashboardTitle = page.getByRole("heading", { name: "Dashboard" });
  await expect(dashboardTitle).toBeVisible();
});
