import { test } from './fixtures/fixture';
import { expect} from '@playwright/test';

test('Trying fixtures', async ({ loggedInPage }) => {
    await loggedInPage.getByRole('link', { name: 'Load Delay' }).click();
    await expect(loggedInPage).toHaveTitle(/Load Delays/);
    console.log("In test");
});