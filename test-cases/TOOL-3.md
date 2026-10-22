# TOOL-3: TOOL-3  Search for products 

## Acceptance criteria
- AC1: A search term matching existing products → only matching products are listed.
- AC2: A term with no matches → an empty state message, no error.
- AC3: Search is case-insensitive.
- AC4: Clearing the search restores the full product list.
- AC5: Search matches product names (partial, case-insensitive)

## TC-1: Search term matching existing products lists only matching products
- Covers: AC1
- Type: positive
- Preconditions: The product list contains several products, at least two whose names contain the word "hammer" (e.g. "Claw Hammer", "Sledge Hammer") and at least two products whose names do not contain it (e.g. "Screwdriver", "Wrench").

Steps:
1. Open the product list page.
2. Note the full set of products displayed.
3. Enter "hammer" in the search field and run the search.

Expected: Only the products whose names contain "hammer" are listed; products whose names do not contain the term (e.g. "Screwdriver", "Wrench") are not shown.

## TC-2: Search term with no matches shows an empty state message and no error
- Covers: AC2
- Type: negative
- Preconditions: The product list contains products, and none of their names contain the string "zzzzqq".

Steps:
1. Open the product list page.
2. Enter "zzzzqq" in the search field and run the search.
3. Observe the result area of the page.

Expected: No products are listed and an empty state message is shown. No error is displayed (the exact message text is not specified in the story).

## TC-3: Search is case-insensitive for upper, lower and mixed case terms
- Covers: AC3, AC5
- Type: positive
- Preconditions: The product list contains a product named "Claw Hammer".

Steps:
1. Open the product list page.
2. Search for "hammer" (all lowercase) and note the results.
3. Clear the field, search for "HAMMER" (all uppercase) and note the results.
4. Clear the field, search for "HaMMeR" (mixed case) and note the results.

Expected: All three searches return the same results, including the product "Claw Hammer".

## TC-4: Clearing the search restores the full product list
- Covers: AC4
- Type: positive
- Preconditions: The product list contains several products, at least one of which is named "Claw Hammer".

Steps:
1. Open the product list page and note the full list of products displayed.
2. Enter "hammer" in the search field and run the search, confirming the list is now filtered.
3. Clear the search field.

Expected: The full product list is displayed again, matching the list noted in step 1.

## TC-5: Partial product name term matches products
- Covers: AC5
- Type: positive
- Preconditions: The product list contains a product named "Screwdriver" and at least one product whose name does not contain "driv".

Steps:
1. Open the product list page.
2. Enter the partial term "driv" in the search field and run the search.

Expected: The product "Screwdriver" is listed; products whose names do not contain "driv" are not listed.

## TC-6: Term matching only a non-name field does not list the product
- Covers: AC5
- Type: edge
- Preconditions: The product list contains a product whose name is "Claw Hammer" and whose other details (e.g. description) contain the word "steel", and no product name contains "steel".

Steps:
1. Open the product list page.
2. Enter "steel" in the search field and run the search.

Expected: "Claw Hammer" is not listed, because search matches product names; as no product name matches, the empty state message is shown and no error is displayed (the exact message text is not specified in the story).
