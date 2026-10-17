import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('customer can log in with valid credentials', { tag: '@smoke' }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

  await expect(page).toHaveURL('/account');
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});

test('login fails with a wrong password', { tag: '@regression' }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('customer@practicesoftwaretesting.com', 'wrong-password');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(page).toHaveURL('/auth/login');
});
