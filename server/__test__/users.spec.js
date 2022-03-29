// users.spec.js

import supertest from 'supertest';
import app from '../server'

describe("Testing users API", () => {
    it("tests the base route and returns true for status", async () => {
        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);

    });

    // it("tests the get users endpoint and have message property", async () => {

    //     const response = await supertest(app).get('/movies');

    //     expect(response.status).toBe(200);
    //     expect(response.body.status).toBe('success');
    //     expect(response.body).toHaveProperty('message');
    // })
});

