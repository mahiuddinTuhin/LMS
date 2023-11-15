import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();

/*  body parser */
const app = express();

app.use(express.json({ limit: "50mb" }));

/* cookie parser */
app.use(cookieParser());

/* cors */
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

/* testing api */

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API working",
  });
});

/* unknown route */
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

export default app;
