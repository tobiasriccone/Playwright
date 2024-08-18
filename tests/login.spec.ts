import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('El usuario inicia sesion', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)

  await page.goto('https://saucedemo.com/');
  
  await page.route(
    "**/*.{png,jpg}",
    (route) => route.abort()
  )

  await loginPage.usernameInput.fill("standard_user")
  await loginPage.passwordInput.fill("secret_sauce")
  await loginPage.loginButton.click()

  await expect(homePage.logo).toBeVisible()
});

test('El usuario inicia sesion 2', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)

  await page.goto('https://saucedemo.com/');

  await page.route(
      "**/*.{png,jpg}",
      (route) => route.abort()
  )

  await loginPage.usernameInput.fill("standard_user")
  await loginPage.passwordInput.fill("secret_sauce")
  await loginPage.loginButton.click()

  await expect(homePage.logo).toBeVisible()
});