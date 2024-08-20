import {expect, Locator, Page} from "@playwright/test"
import {allure} from "allure-playwright";

export class CommonPage {
    public readonly page: Page

    constructor(page: Page) { this.page = page; }

    async validaCarritoConProducto(cantidad: string) {
        await allure.step('Valida carrito con Producto', async () => {
            await expect(this.page.locator("//a[@class='shopping_cart_link']/span[contains(text(),'" + cantidad + "')]")).toBeVisible()
        });
    }

    async clickCarrito() {
        await allure.step('Click Carrito', async () => {
            await this.page.locator("//a[@class='shopping_cart_link']").click()
        });
    }
}