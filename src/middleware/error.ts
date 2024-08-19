import { Request, Response, NextFunction } from 'express';

// TypeScript type for the custom Error object
interface CustomError extends Error {
    statusCode?: number;
}

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
    const error: CustomError = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    const statusCode: number = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};


/**
// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); 
 */