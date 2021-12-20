import 'reflect-metadata';
import * as express from 'express';
import { join, resolve } from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { router } from '../../core/routes';
// import logger from '../../infra/logger';
import corsOptions from '../../infra/config/cors';
import { notFound, errorHandler } from '../../core/middlewares';
import socket from '../../lib/socket';
import '../../infra/database';

import { config } from 'dotenv';
config();

const app = express.default();
app.set('trust proxy', 1)

let http = require("http").Server(app);
socket.connect(http);

app.use(express.static(resolve(__dirname, '..', '..', 'public')));
app.set('views', join(__dirname, '../..', '/core/views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
// app.use(logger);

app.use(cors(corsOptions));
app.use(router);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3001;

const server = http.listen(port, () => {    
    console.log(`Running on ${port}...`);
})

