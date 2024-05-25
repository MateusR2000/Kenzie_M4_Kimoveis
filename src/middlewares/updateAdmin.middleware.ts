import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const updateAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (req.body.admin){
        throw new AppError("Insufficient permission", 403);
    }

    return next();
};