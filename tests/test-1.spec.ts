import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://stg.gold4cards.com/auth/complete-profile?token=2d5871ed30ecd3922b35542d2e46f32145ee5255');
});