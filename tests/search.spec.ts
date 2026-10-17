import { test, expect } from '@playwright/test';

test('search shows only matching products', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Search' }).fill('Pliers');
  const searchResponse = page.waitForResponse('**/products/search**');
  await page.getByRole('button', { name: 'Search' }).click();
  await searchResponse;

  await expect(page.getByText('Searched for: Pliers')).toBeVisible();
  const productNames = page.locator('[data-test="product-name"]');
  await expect(productNames.first()).toBeVisible();
  for (const name of await productNames.allInnerTexts()) {
    expect(name).toContain('Pliers');
  }
});
