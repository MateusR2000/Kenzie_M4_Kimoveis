import { Schedule } from "../entities";
import { scheduleCreateSchema, scheduleReadSchema } from "../schemas";
import { Repository } from "typeorm";
import { z } from "zod";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleRead = z.infer<typeof scheduleReadSchema>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleRead, ScheduleRepo }