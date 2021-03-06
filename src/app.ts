import 'reflect-metadata';
import express from 'express';
import { usersRoutes } from './routes/users.routes';
import { publicationsRoutes } from './routes/publications.routes';

import createConnection from './typeorm/index';

import './container';

createConnection();

const app = express();

app.use(express.json());

app.use('/publications', publicationsRoutes);
app.use('/users', usersRoutes);

export { app };
