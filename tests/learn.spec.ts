import { test, expect } from "@playwright/test";

test("learn pw on website formy project - autocomplete page", async ({
  page,
}) => {
  await page.goto("https://formy-project.herokuapp.com/");

  await page.getByRole("link", { name: "Autocomplete" }).click();
  await page.waitForTimeout(3000);

  await expect(page).toHaveURL(
    "https://formy-project.herokuapp.com/autocomplete",
  );

  await page
    .getByRole("textbox", { name: "Address", exact: true })
    .fill("Mentaraman");
  await page
    .getByRole("textbox", { name: "Street address", exact: true })
    .fill("Mentaraman 2");
  await page
    .getByRole("textbox", { name: "Street address 2", exact: true })
    .fill("Mentaraman 3");
  await page.getByRole("textbox", { name: "City", exact: true }).fill("Malang");
  await page
    .getByRole("textbox", { name: "State", exact: true })
    .fill("Malang");
  await page
    .getByRole("textbox", { name: "Zip code", exact: true })
    .fill("6507");
  await page
    .getByRole("textbox", { name: "Country", exact: true })
    .fill("Indonesia");
});
