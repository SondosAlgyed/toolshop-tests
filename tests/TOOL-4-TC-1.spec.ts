import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

const CATEGORY = 'Pliers';

test('Filtering by a single category shows only that category\'s products', { tag: '@regression' }, async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  // Step 1: note the products listed with no filters applied.
  await expect(homePage.productNames.first()).toBeVisible();
  const unfilteredNames = await homePage.productNames.allInnerTexts();

  // Step 2: select the category filter. The shop sends the filter as a QUERY request to /products.
  const filterResponse = page.waitForResponse(
    (response) => response.request().method() === 'QUERY' && response.url().endsWith('/products'),
  );
  await homePage.filter(CATEGORY).check();
  const body = await (await filterResponse).json();

  // Every product the shop returns for the filter belongs to the selected category.
  expect(body.data.length).toBeGreaterThan(0);
  for (const product of body.data) {
    expect(product.category.name).toBe(CATEGORY);
  }

  // The list shows exactly those products.
  const filteredNames: string[] = body.data.map((product: { name: string }) => product.name);
  await expect(homePage.productNames).toHaveText(filteredNames);

  // Products from other categories that were listed before are no longer shown.
  const removedNames = unfilteredNames.filter((name) => !filteredNames.includes(name));
  expect(removedNames.length).toBeGreaterThan(0);
  for (const name of removedNames) {
    await expect(homePage.productNames.filter({ hasText: name })).toHaveCount(0);
  }
});
