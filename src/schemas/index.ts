import { 
    userSchema,
    userCreateSchema,
    userReadSchema,
    userReturnSchema,
    userUpdateSchema 
} from "./user.schemas";
import { sessionSchema } from "./session.schemas";
import { categorySchema, categoryCreateSchema, categoryReadSchema } from "./category.schemas";
import { scheduleSchema, scheduleCreateSchema, scheduleReadSchema } from "./schedule.schemas";
import { addressSchema, addressCreateSchema } from "./address.schemas";
import { 
    realEstateSchema,
    realEstateCreateSchema,
    realEstateReturnSchema,
    realEstateReadSchema,
} from "./realEstate.schemas";

export {
    userSchema,
    userCreateSchema,
    userReadSchema,
    userUpdateSchema,
    userReturnSchema,
    sessionSchema,
    categorySchema,
    categoryCreateSchema,
    categoryReadSchema,
    scheduleCreateSchema,
    scheduleSchema,
    scheduleReadSchema,
    addressSchema,
    addressCreateSchema,
    realEstateCreateSchema,
    realEstateSchema,
    realEstateReturnSchema,
    realEstateReadSchema,
}