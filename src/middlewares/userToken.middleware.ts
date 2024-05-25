import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const userToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { decoded } = res.locals;
    const admin: boolean = decoded.admin;


    if (!admin){
        if (decoded.sub !== req.params.id){
            throw new AppError("Insufficient permission", 403);
        }
    }

    return next();
}