import { z } from "zod";
import { userSchema } from "./user.schemas";

const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    user: userSchema.omit({id: true, password: true}),
    realEstateId: z.number().positive(),
});

const scheduleCreateSchema = scheduleSchema.omit({id: true, user: true});

const scheduleReadSchema = scheduleSchema.omit({realEstateId: true}).array();

export { scheduleCreateSchema, scheduleSchema, scheduleReadSchema };