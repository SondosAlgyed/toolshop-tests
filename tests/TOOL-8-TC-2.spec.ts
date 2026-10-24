import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { CartPage } from '../pages/cart-page';

const REMOVED_ITEM = 'Combination Pliers';
const REMAINING_ITEM = 'Bolt Cutters';

const toCents = (price: string) => Math.round(parseFloat(price.replace(/[^0-9.]/g, '')) * 100);

async function addToCart(page: Page, homePage: HomePage, productName: string) {
  await homePage.goto();
  await page.getByRole('heading', { name: productName }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByText('Product added to shopping cart.')).toBeVisible();
}

test('Removing an item removes it from the list and updates the total', { tag: '@regression' }, async ({ page }) => {
  // Precondition: a cart with one of each item.
  const homePage = new HomePage(page);
  await addToCart(page, homePage, REMOVED_ITEM);
  await addToCart(page, homePage, REMAINING_ITEM);

  // Step 1: open the shopping cart page.
  const cartPage = new CartPage(page);
  await cartPage.goto();

  // Step 2: record the items listed and the cart total.
  await expect(cartPage.itemRows).toHaveCount(2);
  await expect(cartPage.itemRow(REMOVED_ITEM)).toBeVisible();
  await expect(cartPage.itemRow(REMAINING_ITEM)).toBeVisible();
  const totalBefore = toCents(await cartPage.cartTotal.innerText());
  const removedLineTotal = toCents(await cartPage.linePrice(REMOVED_ITEM).innerText());
  const remainingLineTotal = toCents(await cartPage.linePrice(REMAINING_ITEM).innerText());
  expect(totalBefore).toBe(removedLineTotal + remainingLineTotal);

  // Step 3: remove one of the items.
  await cartPage.removeButton(REMOVED_ITEM).click();

  // Step 4: the removed item is gone, the other is still listed, and the total excludes the removed item.
  await expect(cartPage.itemRow(REMOVED_ITEM)).toHaveCount(0);
  await expect(cartPage.itemRows).toHaveCount(1);
  await expect(cartPage.itemRow(REMAINING_ITEM)).toBeVisible();
  const expectedTotal = (totalBefore - removedLineTotal) / 100;
  await expect(cartPage.cartTotal).toHaveText(`$${expectedTotal.toFixed(2)}`);
});
