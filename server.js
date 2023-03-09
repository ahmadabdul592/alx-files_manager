import express from 'express';
import startServer from './libs/boot';
import injectMiddleware from './libs/middlewares';
import injectRoutes from './routes/index';

const server = express();

injectMiddleware(server);
injectRoutes(server);
startServer(server);

export default server;
