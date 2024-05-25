import { Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleServices } from "../services";
import { ScheduleRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(res.locals.decoded.sub);
    const schedule: Schedule = await scheduleServices.create(req.body, userId);
    return res.status(201).json({message: "Schedule created"});
};

const readEstateSchedules = async (req: Request, res: Response): Promise<Response> => {
    const realEstateSchedules = await scheduleServices.readEstateSchedules(Number(req.params.id));
    return res.status(200).json(realEstateSchedules)
};

export default { create, readEstateSchedules }; 