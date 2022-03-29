import app from './app';

import { config } from './store/config';

const { port } = config.env;

const server = app.listen(port, () => {
    console.log("Server has started!")
});

export default server;