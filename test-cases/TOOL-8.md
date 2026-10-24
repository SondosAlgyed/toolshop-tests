# TOOL-8: TOOL-8 Manage the shopping cart

## Acceptance criteria
- AC1: Increasing the quantity of an item updates that line's total and the cart total.
- AC2: Removing an item removes it from the list and updates the total.
- AC3: Removing the last item shows an empty cart message.
- AC4: Cart contents persist after a page refresh.

## TC-1: Increasing an item's quantity updates the line total and the cart total
- Covers: AC1
- Type: positive
- Preconditions: A cart containing 'Combination Pliers' (quantity 1). Note the current quantity, the line total and the cart total.

Steps:
1. Open the shopping cart page.
2. Record the item's quantity, its line total and the cart total.
3. Increase the quantity of the item (for example from 1 to 2).
4. Observe the item's line total and the cart total.

Expected: The item's line total is updated to reflect the increased quantity, and the cart total is updated accordingly.

## TC-2: Removing an item removes it from the list and updates the total
- Covers: AC2
- Type: positive
- Preconditions: A cart containing 'Combination Pliers' and 'Bolt Cutters' (quantity 1 each).

Steps:
1. Open the shopping cart page.
2. Record the items listed and the cart total.
3. Remove one of the items from the cart.
4. Observe the item list and the cart total.

Expected: The removed item no longer appears in the cart list, the remaining item(s) are still listed, and the cart total is updated to exclude the removed item.

## TC-3: Removing the last item shows an empty cart message
- Covers: AC2, AC3
- Type: edge
- Preconditions: A cart containing exactly one item: 'Combination Pliers'.

Steps:
1. Open the shopping cart page.
2. Remove the only item in the cart.
3. Observe the cart page.

Expected: The item is removed from the list and an empty cart message is shown (exact message text not specified in the story).

## TC-4: Cart contents persist after a page refresh
- Covers: AC4
- Type: positive
- Preconditions: A cart containing 'Combination Pliers' and 'Bolt Cutters' (quantity 1 each).

Steps:
1. Open the shopping cart page.
2. Record the items, their quantities, their line totals and the cart total.
3. Refresh the page in the browser.
4. Compare the cart contents with what was recorded.

Expected: The same items with the same quantities, line totals and cart total are still shown after the refresh.

## TC-5: Cart changes persist after a page refresh
- Covers: AC1, AC2, AC4
- Type: edge
- Preconditions: A cart containing 'Combination Pliers' and 'Bolt Cutters' (quantity 1 each).

Steps:
1. Open the shopping cart page.
2. Increase the quantity of one item.
3. Remove a different item from the cart.
4. Record the remaining items, quantities, line totals and the cart total.
5. Refresh the page in the browser.
6. Compare the cart contents with what was recorded.

Expected: After the refresh the cart still shows the increased quantity with its updated line total, the removed item is still absent, and the cart total matches the value recorded before the refresh.
