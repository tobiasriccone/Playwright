import {expect, Locator, Page} from "@playwright/test"
import {allure} from "allure-playwright";

export class ProductDetailPage {
    public readonly page: Page

    constructor(page: Page) { this.page = page; }

    async addToCart() {
        await allure.step('Agrega Producto a Carrito', async () => {
            await this.page.locator("//button[contains(text(), 'Add to cart')]").click()
        });
    }
}