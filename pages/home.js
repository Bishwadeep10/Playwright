import { expect} from '@playwright/test';

export class HomePage {

    page;
    homeButton;
    signUpButton;
    newUserBanner;
    nameForSignup;
    emailForSignup;
    signUpButtoninSignup;

    constructor(page) {
        this.page = page;
        this.homeButton = this.page.getByRole('link', { name: ' Home' });
        this.signUpButton = this.page.getByRole('link', { name: ' Signup / Login' });
        this.newUserBanner = this.page.getByRole('heading', { name: 'New User Signup!' });
        this.nameForSignup = this.page.getByRole('textbox', { name: 'Name' });
        this.emailForSignup = this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signUpButtoninSignup = this.page.getByRole('button', { name: 'Signup' });
    }

    async signUp() {
        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/Automation Exercise/);
        await this.homeButton.click();
        await this.signUpButton.click();
        await expect(this.page).toHaveTitle(/Signup/);
        await expect(this.newUserBanner).toContainText('New User Signup!');
        await this.page.getByRole('textbox', { name: 'name' }).fill('Dummy');
        await this.page.locator("//form[@action='/signup']/input[@placeholder='Email Address']").fill('dummy@gmail.com');
        await this.page.getByRole('button', { name: 'Signup' }).click();
    }


}