import {expect, Locator, Page} from "@playwright/test"
import {allure} from "allure-playwright";

export class HomePage {
    public readonly logo: Locator
    public readonly page: Page

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator("//div[@class='app_logo']")
    }

    async validaLogo() {
        await allure.step('Home: Valida Logo Principal', async () => {
            await expect(this.page.locator("//div[@class='app_logo']")).toBeVisible()
        });
    }

    async clickProduct(productName: string) {
        await allure.step('Home: Busca Producto', async () => {
            await this.page.locator("//div[contains(text(), '" + productName + "')]").click()
        });
    }
}