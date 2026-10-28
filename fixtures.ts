import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login-page';

type MyFixtures = {
  loginPage: LoginPage;
};

// Tests import test and expect from here instead of @playwright/test
// to get the fixtures below.
export const test = base.extend<MyFixtures>({
  // A LoginPage already opened on the login page.
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
