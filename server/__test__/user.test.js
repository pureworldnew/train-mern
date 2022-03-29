import request from 'supertest';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import app from '../app';
import { User } from '../database/models'

beforeEach(async () => { await User.deleteMany() })
test('Should signup a new user', async () => {
    const response = await request(app).post('/register')
        .send({
            email: "abcd@gmail.com",
            password: "12345678"
        })
        .expect(201)
    // Asset that the database was changed correctly

    const user = await User.findById(response.body.user._id);

})