import { test, expect } from '@playwright/test';

test('health endpoint is available', async ({ request }) => {
  const response = await request.get('/health');
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toEqual({ status: 'ok' });
});

test('API rejects invalid task input', async ({ request }) => {
  const response = await request.post('/tasks', { data: { title: '' } });
  expect(response.status()).toBe(400);
});
