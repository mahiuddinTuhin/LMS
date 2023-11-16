import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHander";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  /* wrong mongodb ID error */

  if (err.name === "CastError") {
    const message = `Resources not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  /* Duplicate key error */
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  /* Wrong JWT error */
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, try again.`;
    err = new ErrorHandler(message, 400);
  }

  /* JWT Expired error */
  if (err.code === "TokenExpiredError") {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.status).json({
    success: false,
    message: err.message,
  });
};

export default errorHandler;
