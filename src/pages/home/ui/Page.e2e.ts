import { expect, test } from '@playwright/test';

test('Should have correct title after initial render', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Movie/i);
});
