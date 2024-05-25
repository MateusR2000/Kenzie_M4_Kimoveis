import { NextFunction, Request, Response } from "express";
import { scheduleRepository } from "../repositories";
import { AppError } from "../errors";
import { Schedule } from "../entities";

export const uniqueUserSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(res.locals.decoded.sub);
    const { date, hour } = req.body

    const foundSchedule: Schedule | null = await scheduleRepository.findOne({where: {date: date, hour: hour}, relations: {user: true}});
    if (userId === foundSchedule?.user.id){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409);
    };

    return next();
}