import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const validateDate = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const dateString = req.body.date + " " + req.body.hour;
    const dateFormat = new Date(dateString);

    if (dateFormat.getDay() === 0 || dateFormat.getDay() === 6){
        throw new AppError("Invalid date, work days are monday to friday");
    }

    if (dateFormat.getHours() <= 8 || dateFormat.getHours() >= 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM")
    }

    return next();
}