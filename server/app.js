// Import all dependencies & middlewares here
import express from 'express';
import logger from 'winston';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import mongoose from 'mongoose';

import { config } from './store/config';
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

// use all controllers(APIs) here
app.use('/', userController);
/**
 * Get port from environment and store in Express
 */
const { port, mongoDBUri, mongoHostName } = config.env;
// Start Server here
app.listen(port, () => {
    logger.info(`Started successfully server at port ${port}`);
    mongoose
        .connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            logger.info(`Connected to mongoDB at ${mongoHostName}`);
        });
});

