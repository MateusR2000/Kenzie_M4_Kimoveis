import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas";
import { scheduleControllers } from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.validateBody(scheduleCreateSchema),
    middlewares.validateDate,
    middlewares.uniqueUserSchedule,
    middlewares.uniqueEstateSchedule,
    scheduleControllers.create
);

scheduleRouter.use("/realEstate/:id", middlewares.verifyEstateId);

scheduleRouter.get(
    "/realEstate/:id",
    middlewares.verifyToken,
    middlewares.isAdmin,
    scheduleControllers.readEstateSchedules
);