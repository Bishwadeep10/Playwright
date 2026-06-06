import { test, expect } from '@playwright/test';

test('Go to Youtube Music', async ({ page }) => {

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle(/Google/);

    await page.getByRole('button', { name: 'Google apps' }).click();
    await page.locator('iframe[name="app"]').contentFrame().getByRole('link', { name: 'YouTube Music, row 6 of 6 and' }).click();
    await expect(page).toHaveTitle(/YouTube Music/);

});


  