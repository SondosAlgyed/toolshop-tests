import { test, expect } from '@playwright/test';

test('customer can log in with valid credentials', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('/auth/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('customer@practicesoftwaretesting.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/account');
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});

test('login fails with a wrong password', { tag: '@regression' }, async ({ page }) => {
  await page.goto('/auth/login');

  await page.getByRole('textbox', { name: 'Email address' }).fill('customer@practicesoftwaretesting.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrong-password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid email or password')).toBeVisible();
  await expect(page).toHaveURL('/auth/login');
});
