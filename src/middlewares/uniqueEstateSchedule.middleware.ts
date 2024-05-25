import { NextFunction, Request, Response } from "express";
import { scheduleRepository } from "../repositories";
import { Schedule } from "../entities";
import { AppError } from "../errors";

export const uniqueEstateSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { date, hour, realEstateId } = req.body;

    const foundSchedule: Schedule | null = await scheduleRepository.findOne({where: {date: date, hour: hour}, relations: {realEstate: true}});
    if (realEstateId === foundSchedule?.realEstate.id){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409);
    };

    return next();
}