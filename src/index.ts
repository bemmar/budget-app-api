import express, { Application } from 'express';
import protectedRouter from './router/protected.router';
import openRouter from './router/open.router';
import bodyParser from 'body-parser'
import cors from 'cors';
import config from './config';

const app: Application = express();

console.log(config);

app.use(cors());
app.use(bodyParser.json())

app.use(openRouter);

app.use(protectedRouter);

app.listen(process.env.PORT);