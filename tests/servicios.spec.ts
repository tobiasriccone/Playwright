import { test, expect } from '@playwright/test';

test.describe('Pruebas de Servicios', () => {

    test('GET /posts - Obtener lista de publicaciones', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');
        expect(response.status()).toBe(200);

        const posts = await response.json();
        expect(posts.length).toBeGreaterThan(0);

        expect(posts[0]).toHaveProperty('userId');
        expect(posts[0]).toHaveProperty('id');
        expect(posts[0]).toHaveProperty('title');
        expect(posts[0]).toHaveProperty('body');
    });

});