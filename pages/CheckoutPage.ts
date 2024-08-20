import {expect, Locator, Page} from "@playwright/test"
import {allure} from "allure-playwright";

export class CheckoutPage {
    public readonly page: Page

    constructor(page: Page) { this.page = page; }

    async ingresarNombre(nombre: string) {
        await allure.step('Ingresa Nombre', async () => {
            await this.page.locator("//input[@placeholder='First Name']").fill(nombre)
        });
    }

    async ingresarApellido(apellido: string) {
        await allure.step('Ingresa Apellido', async () => {
            await this.page.locator("//input[@placeholder='Last Name']").fill(apellido)
        });
    }

    async ingresarCP(cp: string) {
        await allure.step('Ingresa Codigo Postal', async () => {
            await this.page.locator("//input[@placeholder='Zip/Postal Code']").fill(cp)
        });
    }

    async clickContinuar() {
        await allure.step('Click en Continuar', async () => {
            await this.page.locator("//input[@name='continue']").click()
        });
    }

    async clickFinish() {
        await allure.step('Click en Continuar', async () => {
            await this.page.locator("//button[contains(text(),'Finish')]").click()
        });
    }

    async validarCheckoutCompleted() {
        await allure.step('Valida Checkout Completo', async () => {
            await expect(this.page.locator("//h2[contains(text(),'Thank you for your order!')]")).toBeVisible()
        });
    }
}