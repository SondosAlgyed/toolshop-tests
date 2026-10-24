import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly itemRows: Locator;
  readonly cartTotal: Locator;

  constructor(private readonly page: Page) {
    this.itemRows = page.locator('tbody tr');
    this.cartTotal = page.locator('[data-test="cart-total"]');
  }

  async goto() {
    await this.page.goto('/checkout');
  }

  itemRow(name: string): Locator {
    return this.itemRows.filter({ has: this.page.getByRole('cell', { name, exact: true }) });
  }

  linePrice(name: string): Locator {
    return this.itemRow(name).locator('[data-test="line-price"]');
  }

  // The remove button is an icon-only link without an accessible name or href, so it is found by its class.
  removeButton(name: string): Locator {
    return this.itemRow(name).locator('a.btn-danger');
  }
}
