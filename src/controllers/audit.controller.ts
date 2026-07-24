import { Request, Response, NextFunction } from "express";
import { auditSchema } from "../validators/audit.validator";
import { auditWebsite } from "../services/audit.service";

export const auditController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = auditSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        error: "INVALID_URL",
        message: result.error.issues[0].message,
      });
    }

    const response = await auditWebsite(result.data.url);

    return res.status(200).json({
      success: true,
      cached: false,
      data: response,
    });
  } catch (error) {
    next(error);
  }
};