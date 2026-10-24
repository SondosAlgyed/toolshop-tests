import { type Page, type Locator } from '@playwright/test';

export class HomePage {
  readonly productNames: Locator;

  constructor(private readonly page: Page) {
    this.productNames = page.locator('[data-test="product-name"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  filter(name: string): Locator {
    return this.page.getByRole('checkbox', { name, exact: true });
  }
}
