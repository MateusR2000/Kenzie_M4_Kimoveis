import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyEstateId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const categoryId: number = Number(req.params.id);

    const foundEstate: RealEstate | null = await realEstateRepository.findOneBy({id: categoryId});
    if (!foundEstate) throw new AppError("RealEstate not found", 404);
    

    return next();
}