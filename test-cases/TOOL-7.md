# TOOL-7: TOOL-7 Filter products

## Acceptance criteria
- AC1: Filters should narrow down the list correctly.

## TC-1: Applying a single filter narrows the product list correctly
- Covers: AC1
- Type: positive
- Preconditions: Customer is on the product list page. The unfiltered list shows products with varying values for at least one filterable attribute (e.g. several products match a given filter value and several do not).

Steps:
1. Note the products shown in the unfiltered product list.
2. Select one filter value that matches some, but not all, of the listed products.
3. Apply the filter.
4. Compare the resulting list against the products noted in step 1.

Expected: The list is narrowed: only products matching the selected filter value are shown, and all products matching that value are still present. No non-matching product remains in the list.

## TC-2: Applying two filters narrows the list to products matching both
- Covers: AC1
- Type: positive
- Preconditions: Customer is on the product list page. At least two filters are available, and at least one product matches both chosen filter values while other products match only one of them.

Steps:
1. Note the products shown in the unfiltered product list.
2. Select a value for the first filter and apply it.
3. Select a value for the second filter and apply it.
4. Compare the resulting list against the products noted in step 1.

Expected: The list is narrowed further after the second filter: only products matching both selected filter values are shown; products matching only one of the two values are not listed.

## TC-3: Removing an applied filter returns the previously excluded products to the list
- Covers: AC1
- Type: positive
- Preconditions: Customer is on the product list page with a filter already applied that excludes some products from the full list.

Steps:
1. Note the products shown with the filter applied.
2. Note which products from the full list are currently excluded.
3. Remove / deselect the applied filter.
4. Compare the resulting list against the full unfiltered list.

Expected: The list is no longer narrowed by that filter: the previously excluded products are shown again, and the list matches the unfiltered product list.

## TC-4: Applying a filter that no product matches
- Covers: AC1
- Type: edge
- Preconditions: Customer is on the product list page. A filter value exists for which no product in the list qualifies.

Steps:
1. Note the products shown in the unfiltered product list.
2. Select the filter value that no product matches.
3. Apply the filter.
4. Observe the resulting list.

Expected: No products are listed, since none match the selected filter value (products that do not match must not be shown). The exact wording/handling of the empty result display is not specified in the story.
