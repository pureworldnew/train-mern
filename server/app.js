// Import all dependencies & middlewares here
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';

import { applyPassportStrategy } from './store/passport';
import { userController } from './controller';

// Init an Express App.
const app = express();
// Set up CORS
app.use(cors());
// Apply strategy to passport
applyPassportStrategy(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ status: true });
})
// use all controllers(APIs) here
app.use('/', userController);


export default app;