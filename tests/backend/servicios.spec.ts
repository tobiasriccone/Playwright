import {test, expect, APIResponse} from '@playwright/test';
import {allure} from "allure-playwright";

test.describe('Pruebas de Servicios', () => {

    test('GET /posts - Obtener lista de publicaciones', async ({ request }) => {
        let response: APIResponse;

        await allure.step("Ejecuta /posts", async () => {
            response = await request.get('https://jsonplaceholder.typicode.com/posts');
            await allure.attachment("search-results.png", await response.body(), "text/plain");
        })

        await allure.step("Validación", async () => {
            expect(response.status()).toBe(200);
            const posts = await response.json();
            expect(posts.length).toBeGreaterThan(0);
            expect(posts[0]).toHaveProperty('userId');
            expect(posts[0]).toHaveProperty('id');
            expect(posts[0]).toHaveProperty('title');
            expect(posts[0]).toHaveProperty('body');
        })
    });

});