import { test, expect } from '@playwright/test';

test('guest can add a product to the cart', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('/');

  await page.getByRole('heading', { name: 'Combination Pliers' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByText('Product added to shopping cart.')).toBeVisible();

  await page.getByRole('link', { name: 'cart' }).click();
  await expect(page.getByRole('cell', { name: 'Combination Pliers', exact: true })).toBeVisible();
  await expect(page.getByRole('spinbutton', { name: 'Quantity for Combination Pliers' })).toHaveValue('1');
});
