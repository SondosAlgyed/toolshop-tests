# TOOL-5: TOOL-5  Product sorting

## Acceptance criteria
- AC1: Sorting should work properly.

## TC-1: Products are sorted correctly when a sort option is applied
- Covers: AC1
- Type: positive
- Preconditions: The application is available and a product list containing several products is displayed. A sorting control is available on the product list (the story does not specify which sort options exist).

Steps:
1. Open the product list and note the products currently displayed.
2. Apply one of the available sorting options.
3. Review the order of the products shown after sorting.

Expected: The products are re-ordered according to the selected sorting option; the sorting works properly. The exact sort options, ordering rules and resulting order are not specified in the story.

## TC-2: Each available sorting option produces a correct order
- Covers: AC1
- Type: positive
- Preconditions: The application is available and a product list containing several products is displayed, with more than one sorting option available (the story does not specify which).

Steps:
1. Open the product list.
2. Apply the first available sorting option and review the resulting product order.
3. Apply each remaining sorting option in turn, reviewing the product order after each one.

Expected: For every available sorting option the products are ordered according to that option; sorting works properly for all options. The specific options and their ordering rules are not specified in the story.

## TC-3: Sorting a list with no products
- Covers: AC1
- Type: edge
- Preconditions: The application is available and the product list is displayed with no products in it (for example, a category or filter result that contains no products).

Steps:
1. Open the product list so that no products are displayed.
2. Apply an available sorting option.

Expected: The application handles the sorting request without error and the empty product list is still displayed. Any message or specific behaviour for an empty list is not specified in the story.

## TC-4: Sorting a list containing a single product
- Covers: AC1
- Type: edge
- Preconditions: The application is available and the product list is displayed with exactly one product in it.

Steps:
1. Open the product list showing exactly one product.
2. Apply an available sorting option.
3. Review the product list.

Expected: The sorting is applied without error and the single product remains displayed.

## TC-5: Sorting is re-applied after changing the sort option back and forth
- Covers: AC1
- Type: edge
- Preconditions: The application is available and a product list containing several products is displayed, with more than one sorting option available.

Steps:
1. Open the product list.
2. Apply one sorting option and note the resulting order.
3. Apply a different sorting option and note the resulting order.
4. Apply the first sorting option again and review the order.

Expected: Each time a sorting option is applied the products are re-ordered according to the currently selected option; re-applying the first option produces the same order as in step 2.
