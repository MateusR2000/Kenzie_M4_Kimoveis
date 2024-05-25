import { RealEstate } from "../entities";
import { realEstateCreateSchema, realEstateReadSchema, realEstateReturnSchema } from "../schemas";
import { Repository } from "typeorm";
import { z } from "zod";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateCreate, RealEstateRead, RealEstateRepo, RealEstateReturn }