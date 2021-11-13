import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connectServerInDb } from './config/db';
import { routerUser } from './routes/user';
import { routerLaunch } from './routes/launch';

// Create app
export const app = express();

// Acess control
app.use(cors());

// Json config
app.use(bodyParser.json());

// Logs config
app.use(logger('dev'));

//Conecta no DB
connectServerInDb();

//Routes
app.use('/user', routerUser);
app.use('/launch', routerLaunch);
