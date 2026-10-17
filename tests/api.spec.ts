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
