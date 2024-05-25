import { z } from "zod";
import { categoryCreateSchema, categoryReadSchema } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;

type CategoryRepo = Repository<Category>;

type CategoryRead = z.infer<typeof categoryReadSchema>;

export { CategoryCreate, CategoryRepo, CategoryRead };