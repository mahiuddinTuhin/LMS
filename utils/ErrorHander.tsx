class ErrorHandler extends Error {
  StatusCode: Number;
  constructor(message: any, StatusCode: number) {
    super(message);
    this.StatusCode = StatusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
