import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

export const uniqueCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const name: string = req.body.name;
    if (!name) return next();

    const foundCategory: Category | null = await categoryRepository.findOneBy({name});
    if (foundCategory) throw new AppError("Category already exists", 409);

    return next();
};