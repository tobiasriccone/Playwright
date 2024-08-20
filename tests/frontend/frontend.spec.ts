import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import {allure} from "allure-playwright";
import {ProductDetailPage} from "../../pages/ProductDetailPage";
import {CommonPage} from "../../pages/CommonPage";
import {CartPage} from "../../pages/CartPage";
import {CheckoutPage} from "../../pages/CheckoutPage";

test.describe('Pruebas de Frontend', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let productDetailPage: ProductDetailPage;
  let commonPage: CommonPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    productDetailPage = new ProductDetailPage(page);
    commonPage = new CommonPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await page.goto("https://www.saucedemo.com");
    // await page.route(
    //     "**/*.{png,jpg}",
    //     (route) => route.abort()
    // );
  });

  test('El usuario inicia sesion', async ({ page }) => {
    await allure.description("El usuario inicia sesion con credenciales válidas y visualiza el logo de la pantalla principal");

    await loginPage.typeUser("standard_user");
    await loginPage.typePassword("secret_sauce");
    await loginPage.clickLogin();
    await homePage.validaLogo();
  });

  test('El usuario compra un producto', async ({ page }) => {
    await allure.description("El usuario inicia sesion agrega un producto al carrito");

    await loginPage.typeUser("standard_user");
    await loginPage.typePassword("secret_sauce");
    await loginPage.clickLogin();

    await homePage.clickProduct("Backpack");

    await productDetailPage.addToCart();

    await commonPage.clickCarrito();

    await cartPage.validaProductoEnCarrito("Backpack");
    await cartPage.clickCheckout();

    await checkoutPage.ingresarNombre("Tobías");
    await checkoutPage.ingresarApellido("Riccone");
    await checkoutPage.ingresarCP("1640");
    await checkoutPage.clickContinuar();
    await checkoutPage.clickFinish();
    await checkoutPage.validarCheckoutCompleted();
  });
});