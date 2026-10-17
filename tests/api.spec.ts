import { test, expect } from '@playwright/test';

test('login API returns a token', { tag: '@smoke' }, async ({ request }) => {
  const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
    data: { email: 'customer3@practicesoftwaretesting.com', password: 'pass123' },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.access_token).toBeTruthy();
});

test('products API returns a page of products', { tag: '@regression' }, async ({ request }) => {
  const response = await request.get('https://api.practicesoftwaretesting.com/products');

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.length).toBeGreaterThan(0);
  for (const product of body.data) {
    expect(product.name).toBeTruthy();
    expect(product.price).toBeGreaterThan(0);
  }
});

test('product details match the product list', { tag: '@regression' }, async ({ request }) => {
  const listResponse = await request.get('https://api.practicesoftwaretesting.com/products');
  const firstProduct = (await listResponse.json()).data[0];

  const detailsResponse = await request.get(`https://api.practicesoftwaretesting.com/products/${firstProduct.id}`);

  expect(detailsResponse.status()).toBe(200);
  const details = await detailsResponse.json();
  expect(details.id).toBe(firstProduct.id);
  expect(details.name).toBe(firstProduct.name);
  expect(details.price).toBe(firstProduct.price);
});
