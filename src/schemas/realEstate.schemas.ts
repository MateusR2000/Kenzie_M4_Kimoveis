import { z } from "zod";
import { categorySchema } from "./category.schemas";

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.union([z.string(), z.number()]).default(0),
    size: z.number().positive(),
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().positive(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
    category: categorySchema,
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    categoryId: z.number().positive(),
});

const realEstateCreateSchema = realEstateSchema.omit({
    id: true,
    sold: true,
    category: true,
    createdAt: true,
    updatedAt: true, 
    addressId: true,
});

const realEstateReturnSchema = realEstateSchema.omit({categoryId: true, category: true});

const realEstateReadSchema = realEstateReturnSchema.array();

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema, realEstateReturnSchema };