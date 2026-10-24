import { test, expect, type Response } from '@playwright/test';
import { HomePage } from '../pages/home-page';

const CATEGORY = 'Pliers';
const BRAND = 'ForgeFlex Tools';

// The shop sends the filter as a QUERY request to /products.
const isProductsQuery = (response: Response) =>
  response.request().method() === 'QUERY' && response.url().endsWith('/products');

test('Combining a category and a brand shows only products matching both', { tag: '@regression' }, async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(homePage.productNames.first()).toBeVisible();

  // Step 1: select the category filter.
  const categoryResponse = page.waitForResponse(isProductsQuery);
  await homePage.filter(CATEGORY).check();
  const categoryBody = await (await categoryResponse).json();
  const categoryOnlyNames: string[] = categoryBody.data.map((product: { name: string }) => product.name);
  await expect(homePage.productNames).toHaveText(categoryOnlyNames);

  // Step 2: select the brand filter.
  const combinedResponse = page.waitForResponse(isProductsQuery);
  await homePage.filter(BRAND).check();
  const body = await (await combinedResponse).json();

  // Every product the shop returns is both in the category and of the brand.
  expect(body.data.length).toBeGreaterThan(0);
  for (const product of body.data) {
    expect(product.category.name).toBe(CATEGORY);
    expect(product.brand.name).toBe(BRAND);
  }

  // The list shows exactly those products.
  const combinedNames: string[] = body.data.map((product: { name: string }) => product.name);
  await expect(homePage.productNames).toHaveText(combinedNames);

  // Other brands' Pliers products that were listed with only the category selected are no longer shown.
  const removedNames = categoryOnlyNames.filter((name) => !combinedNames.includes(name));
  expect(removedNames.length).toBeGreaterThan(0);
  for (const name of removedNames) {
    await expect(homePage.productNames.filter({ hasText: name })).toHaveCount(0);
  }
});
