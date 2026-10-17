import { test, expect } from '@playwright/test';

test('login API returns a token', { tag: '@smoke' }, async ({ request }) => {
  const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
    data: { email: 'customer3@practicesoftwaretesting.com', password: 'pass123' },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.access_token).toBeTruthy();
});
