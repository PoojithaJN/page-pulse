import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  return res.status(err.status || 500).json({
    success: false,
    requestId: (req as any).requestId,
    error: {
      code: err.code || "INTERNAL_SERVER_ERROR",
      message: err.message || "Something went wrong"
    }
  });
}