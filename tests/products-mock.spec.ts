import { test, expect } from '@playwright/test';

test('home page shows a message when there are no products', { tag: '@regression' }, async ({ page }) => {
  // Answer the products request ourselves with an empty list; it never reaches the server.
  await page.route('**/products', (route) => route.fulfill({ status: 200, json: { data: [] } }));

  await page.goto('/');

  await expect(page.getByText('There are no products found.')).toBeVisible();
});
