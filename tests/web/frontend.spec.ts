import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import {allure} from "allure-playwright";

test.describe('Pruebas de Frontend', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await page.goto("https://www.saucedemo.com");
    await page.route(
        "**/*.{png,jpg}",
        (route) => route.abort()
    );
  });

  test('El usuario inicia sesion', async ({ page }) => {
    await allure.description("El usuario inicia sesion con credenciales válidas y visualiza el logo de la pantalla principal");

    await loginPage.typeUser("standard_user");
    await loginPage.typePassword("secret_sauce");
    await loginPage.clickLogin();
    await expect(homePage.logo, 'No se visualizo el Logo principal').toBeVisible();
  });
});