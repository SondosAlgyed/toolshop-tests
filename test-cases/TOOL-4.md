# TOOL-4: TOOL-4 Filter products by category and brand

## Acceptance criteria
- AC1: Selecting one category → only products from that category appear.
- AC2: Selecting two categories → products from both appear.
- AC3: Combining a category and a brand → only products matching both appear.
- AC4: Unchecking all filters → the full list returns.

## TC-1: Filtering by a single category shows only that category's products
- Covers: AC1
- Type: positive
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains products in at least two different categories (e.g. 'Pliers' and 'Hammer').

Steps:
1. Note the products listed with no filters applied.
2. Select the category filter 'Pliers'.

Expected: Only products belonging to the category 'Pliers' appear in the list; products from other categories are no longer shown.

## TC-2: Filtering by two categories shows products from both
- Covers: AC2
- Type: positive
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains products in at least three different categories (e.g. 'Pliers', 'Hammer', 'Wrench').

Steps:
1. Select the category filter 'Pliers'.
2. Additionally select the category filter 'Hammer'.

Expected: Products from both 'Pliers' and 'Hammer' appear in the list; products from categories that are not selected (e.g. 'Wrench') are not shown.

## TC-3: Combining a category and a brand shows only products matching both
- Covers: AC3
- Type: positive
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains products of brand 'ForgeFlex Tools' in the category 'Pliers', products of 'ForgeFlex Tools' in another category, and products of another brand in 'Pliers'.

Steps:
1. Select the category filter 'Pliers'.
2. Select the brand filter 'ForgeFlex Tools'.

Expected: Only products that are both in the category 'Pliers' and of the brand 'ForgeFlex Tools' appear; 'ForgeFlex Tools' products from other categories and other brands' Pliers products are not shown.

## TC-4: Unchecking all filters restores the full product list
- Covers: AC4
- Type: positive
- Preconditions: The product catalogue page is open and the full unfiltered list of products is known. The catalogue contains products in several categories and brands.

Steps:
1. Select the category filter 'Pliers' and the brand filter 'ForgeFlex Tools' and observe that the list is narrowed.
2. Uncheck the category filter 'Pliers'.
3. Uncheck the brand filter 'ForgeFlex Tools' so that no filters remain selected.

Expected: The full product list returns, matching the unfiltered catalogue observed before any filter was applied.

## TC-5: Category and brand combination with no matching products
- Covers: AC3
- Type: edge
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains a category 'Wrench' and a brand 'MightyCraft Hardware', but no product that is both in 'Wrench' and of brand 'MightyCraft Hardware'.

Steps:
1. Select the category filter 'Wrench'.
2. Select the brand filter 'MightyCraft Hardware'.

Expected: No products are shown, since only products matching both the category and the brand should appear. The exact wording/appearance of any empty-result message is not specified in the story.
