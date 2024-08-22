import { Locator, Page } from "@playwright/test";
import { allure } from "allure-playwright";

export class LoginPage {
    public readonly usernameInput: Locator
    public readonly passwordInput: Locator
    public readonly loginButton: Locator

    constructor(page: Page) {
        this.usernameInput = page.locator("//input[@placeholder='Username']")
        this.passwordInput = page.locator("//input[@placeholder='Password']")
        this.loginButton = page.locator("//input[@value='Login']")
    }

    async typeUser(username: string) {
        await allure.step('Login: Ingresa el usuario', async () => {
            await this.usernameInput.fill(username)
        });
    }

    async typePassword(password: string) {
        await allure.step('Login: Ingresa la password', async () => {
            await this.passwordInput.fill(password)
        })
    }

    async clickLogin() {
        await allure.step('Login: Click en Ingresar', async () => {
            await this.loginButton.click()
        })
    }
}