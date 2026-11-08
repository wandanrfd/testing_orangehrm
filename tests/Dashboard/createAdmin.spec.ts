import { test, expect } from "@playwright/test";

test.use({
  storageState: "playwright\\.auth\\user.json",
});

test("test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
  );
  await page.getByRole("button", { name: " Add" }).dblclick();
  await page.getByText("-- Select --").first().dblclick();
  await page.getByText("-- Select --").first().dblclick();
  await page.getByText("-- Select --").first().dblclick();
  await page.getByText("-- Select --").first().dblclick();
  await page.getByText("-- Select --").first().click();
  // await page.getByText("-- Select --").click();
  // await page.getByRole("textbox").nth(3).click();
  await page.getByRole("textbox").nth(3).fill("admin12345");
  await page.getByRole("textbox", { name: "Type for hints..." }).click();
  await page
    .getByRole("textbox", { name: "Type for hints..." })
    .fill("Joseph Evans");
  await page.getByRole("textbox").nth(2).click();
  await page.getByRole("textbox").nth(2).fill("johndoe200");
  await page.getByRole("textbox").nth(4).click();
  await page.getByRole("textbox").nth(4).fill("admin12345");
  await page.getByRole("button", { name: "Save" }).click();
});
