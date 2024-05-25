import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository, userRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const categoryId: number = Number(req.params.id);

    const foundCategory: Category | null = await categoryRepository.findOneBy({id: categoryId});
    if (!foundCategory) throw new AppError("Category not found", 404);
    

    return next();
}