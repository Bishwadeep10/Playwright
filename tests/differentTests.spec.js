import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/UI Test Automation Playground/);

});

test('load delay', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    await expect(page).toHaveTitle(/UI Test Automation Playground/);

    // load delay handling
    await page.getByRole('link', { name: 'Load Delay' }).click();
    await expect(page).toHaveTitle(/Load Delays/);

    await page.goBack();
    await expect(page).toHaveTitle(/UI Test Automation Playground/);
    await page.getByRole('link', { name: 'Client Side Delay' }).click();
    await expect(page).toHaveTitle(/Client Side Delay/);
    await page.getByRole('button', { name: 'Button Triggering Client Side Logic' }).click();

    // explicit timeout for link which takes extra time
    await expect(page.locator("//div[@id='content']/p")).toHaveText("Data calculated on the client side.",{timeout: 20000});
});

test('scroll bars test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    await expect(page).toHaveTitle(/UI Test Automation Playground/);

    // scroll bars handling
    await page.getByRole('link', { name: 'Scrollbars' }).click();
    await expect(page).toHaveTitle(/Scrollbars/);
    await page.getByRole('button', { name: 'Hiding Button' }).click();
});

test('Open/Switch to new tab/window', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    await expect(page).toHaveTitle(/UI Test Automation Playground/);

});
