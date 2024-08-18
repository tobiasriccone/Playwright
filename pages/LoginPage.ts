import { Locator, Page } from "@playwright/test"

export class LoginPage {
    public readonly usernameInput: Locator
    public readonly passwordInput: Locator
    public readonly loginButton: Locator

    constructor(page: Page) {
        this.usernameInput = page.locator("//input[@placeholder='Username']")
        this.passwordInput = page.locator("//input[@placeholder='Password']")
        this.loginButton = page.locator("//input[@value='Login']")
    }
}