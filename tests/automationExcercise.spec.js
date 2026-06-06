import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.js';

test('Sign Up Validation',async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.signUp();
})