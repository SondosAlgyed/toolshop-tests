# TOOL-8: TOOL-8 Manage the shopping cart

## Acceptance criteria
- AC1: Increasing the quantity of an item updates that line's total and the cart total.
- AC2: Removing an item removes it from the list and updates the total.
- AC3: Removing the last item shows an empty cart message.
- AC4: Cart contents persist after a page refresh.

## TC-1: Increasing the quantity of a single cart item updates the line total and the cart total
- Covers: AC1
- Type: positive
- Preconditions: A customer is logged in (or browsing as the story allows) and the cart contains exactly one item with quantity 1. The item's line total and the cart total are noted before the change.

Steps:
1. Open the shopping cart page.
2. Note the item's quantity, its line total and the cart total.
3. Increase the quantity of the item (for example from 1 to 2).
4. Observe the item's line total and the cart total.

Expected: The item's line total is updated to reflect the increased quantity, and the cart total is updated accordingly.

## TC-2: Increasing the quantity of one item in a multi-item cart updates only that line's total and the cart total
- Covers: AC1
- Type: edge
- Preconditions: The cart contains three different items, each with quantity 1. The line totals and the cart total are noted before the change.

Steps:
1. Open the shopping cart page.
2. Note the line total of each of the three items and the cart total.
3. Increase the quantity of the second item only.
4. Observe the line totals of all three items and the cart total.

Expected: The second item's line total is updated for the increased quantity, the other two line totals are unchanged, and the cart total is updated.

## TC-3: Removing one item from a cart that holds several items
- Covers: AC2
- Type: positive
- Preconditions: The cart contains three different items. The cart total is noted before the removal.

Steps:
1. Open the shopping cart page.
2. Note the items listed and the cart total.
3. Remove one of the items from the cart.
4. Observe the item list and the cart total.

Expected: The removed item no longer appears in the cart list, the other two items remain, and the cart total is updated.

## TC-4: Removing the last item shows the empty cart message
- Covers: AC2, AC3
- Type: edge
- Preconditions: The cart contains exactly one item.

Steps:
1. Open the shopping cart page.
2. Remove the only item in the cart.
3. Observe the cart page.

Expected: The item is removed from the list and an empty cart message is shown (exact wording not specified in the story). The total is updated (the resulting value is not specified in the story).

## TC-5: Cart contents persist after a page refresh
- Covers: AC4
- Type: positive
- Preconditions: The cart contains at least two items with known quantities and totals.

Steps:
1. Open the shopping cart page.
2. Note the items, their quantities, line totals and the cart total.
3. Refresh the page in the browser.
4. Observe the cart page after it reloads.

Expected: The same items, with the same quantities and totals, are still shown in the cart after the refresh.

## TC-6: Cart changes made before a refresh are still present after the refresh
- Covers: AC1, AC2, AC4
- Type: edge
- Preconditions: The cart contains three different items, each with quantity 1.

Steps:
1. Open the shopping cart page.
2. Increase the quantity of one item.
3. Remove a different item from the cart.
4. Note the remaining items, their quantities and the cart total.
5. Refresh the page in the browser.
6. Observe the cart page after it reloads.

Expected: After the refresh the cart shows the increased quantity for the changed item, the removed item is still absent, and the cart total matches the value noted before the refresh.
