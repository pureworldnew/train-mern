import app from './app';
import logger from 'winston';
import mongoose from 'mongoose';
import { config } from './store/config';

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