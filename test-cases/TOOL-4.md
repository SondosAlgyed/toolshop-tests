# TOOL-4: TOOL-4 Filter products by category and brand

## Acceptance criteria
- AC1: Selecting one category → only products from that category appear.
- AC2: Selecting two categories → products from both appear.
- AC3: Combining a category and a brand → only products matching both appear.
- AC4: Unchecking all filters → the full list returns.

## TC-1: Filtering by a single category shows only that category's products
- Covers: AC1
- Type: positive
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains products in at least two different categories (e.g. 'Laptops' and 'Phones').

Steps:
1. Note the products listed with no filters applied.
2. Select the category filter 'Laptops'.

Expected: Only products belonging to the category 'Laptops' appear in the list; products from other categories are no longer shown.

## TC-2: Filtering by two categories shows products from both
- Covers: AC2
- Type: positive
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains products in at least three different categories (e.g. 'Laptops', 'Phones', 'Tablets').

Steps:
1. Select the category filter 'Laptops'.
2. Additionally select the category filter 'Phones'.

Expected: Products from both 'Laptops' and 'Phones' appear in the list; products from categories that are not selected (e.g. 'Tablets') are not shown.

## TC-3: Combining a category and a brand shows only products matching both
- Covers: AC3
- Type: positive
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains products of brand 'BrandX' in the category 'Laptops', products of 'BrandX' in another category, and products of another brand in 'Laptops'.

Steps:
1. Select the category filter 'Laptops'.
2. Select the brand filter 'BrandX'.

Expected: Only products that are both in the category 'Laptops' and of the brand 'BrandX' appear; 'BrandX' products from other categories and other brands' laptops are not shown.

## TC-4: Unchecking all filters restores the full product list
- Covers: AC4
- Type: positive
- Preconditions: The product catalogue page is open and the full unfiltered list of products is known. The catalogue contains products in several categories and brands.

Steps:
1. Select the category filter 'Laptops' and the brand filter 'BrandX' and observe that the list is narrowed.
2. Uncheck the category filter 'Laptops'.
3. Uncheck the brand filter 'BrandX' so that no filters remain selected.

Expected: The full product list returns, matching the unfiltered catalogue observed before any filter was applied.

## TC-5: Category and brand combination with no matching products
- Covers: AC3
- Type: edge
- Preconditions: The product catalogue page is open with no filters applied. The catalogue contains a category 'Laptops' and a brand 'BrandY', but no product that is both in 'Laptops' and of brand 'BrandY'.

Steps:
1. Select the category filter 'Laptops'.
2. Select the brand filter 'BrandY'.

Expected: No products are shown, since only products matching both the category and the brand should appear. The exact wording/appearance of any empty-result message is not specified in the story.
