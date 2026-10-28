import { test, expect } from '../fixtures';

test('customer can log in with valid credentials', { tag: '@smoke' }, async ({ page, loginPage }) => {
  await loginPage.login('customer3@practicesoftwaretesting.com', 'pass123');

  await expect(page).toHaveURL('/account');
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});

// Uses its own account: failed logins can lock an account, and that must never
// break the smoke test above.
test('login fails with a wrong password', { tag: '@regression' }, async ({ page, loginPage }) => {
  await loginPage.login('customer2@practicesoftwaretesting.com', 'wrong-password');

  // "Invalid email or password" or "Account locked": either way the user is not let in.
  await expect(loginPage.errorMessage).toHaveText(/Invalid email or password|Account locked/);
  await expect(page).toHaveURL('/auth/login');
});
