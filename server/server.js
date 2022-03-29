import app from './app';
import logger from 'winston';

import { config } from './store/config';

const { port } = config.env;
let pt = 3300;

const server = app.listen(pt, () => {
    logger.info(`Started successfully server at port ${port}`);
});

export default server;