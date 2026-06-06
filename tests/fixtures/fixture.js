import { test as base , expect} from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('http://uitestingplayground.com/');
    await expect(page).toHaveTitle(/UI Test Automation Playground/);
    console.log("In fixture setup")
    
    await use(page); // provide fixture

    // teardown (optional)

    console.log("In fixture teardown");
  },
});