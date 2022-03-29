// users.spec.js

import supertest from 'supertest';
import app from '../app';
import mongoose from 'mongoose';


beforeEach((done) => {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => done());
});

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        mongoose.connection.close(() => done())
    });
});

describe("Testing users API", () => {
    it("tests the base route and returns true for status", async () => {
        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body.status).toBe(true);

    });
});


