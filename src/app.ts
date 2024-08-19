import dotenv from 'dotenv';
dotenv.config();
import 'colors';
import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { errorHandler, notFound } from './middleware/error';
import indexRouter from './routes/index';
import userRoutes from './routes/user.routes';
import './database/db';

const app = express();
app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
userRoutes(app);

// Error Handler
app.use(notFound);
app.use(errorHandler);

export default app;
