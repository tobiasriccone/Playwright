import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Pruebas de Login', () => {
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
    await loginPage.typeUser("standard_user_incorrecto");
    await loginPage.typePassword("secret_sauce");
    await loginPage.clickLogin();
    await expect(homePage.logo).toBeVisible();
  });

  test('El usuario inicia sesion con usuario incorrecto', async ({ page }) => {
    await loginPage.typeUser("standard_user");
    await loginPage.typePassword("secret_sauce");
    await loginPage.clickLogin();
    await expect(homePage.logo).toBeVisible();
  });
});