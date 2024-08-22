import {expect, Page} from "@playwright/test"
import {allure} from "allure-playwright";

export class CartPage {
    public readonly page: Page

    constructor(page: Page) { this.page = page; }

    async validaProductoEnCarrito(nombreProducto: string) {
        await allure.step('Carrito: Valida Producto en Carrito', async () => {
            await expect(this.page.locator("//div[contains(text(),'" + nombreProducto + "')]")).toBeVisible()
        });
    }

    async clickCheckout() {
        await allure.step('Carrito: Click en Checkout', async () => {
            await this.page.locator("//button[contains(text(),'Checkout')]").click()
        });
    }
}