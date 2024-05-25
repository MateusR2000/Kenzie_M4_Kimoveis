import { NextFunction, Request, Response } from "express";
import { Category, User } from "../entities";
import { categoryRepository, userRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userId: number = Number(req.params.id);
    const categoryId: number = req.body.categoryId || Number(req.params.categoryId);

    if (userId){
        const foundUser: User | null = await userRepository.findOneBy({id: userId});
        if(!foundUser) throw new AppError("User not found", 404);
        res.locals = { ...res.locals, foundUser };
    };

    if (categoryId){
        const foundCategory: Category | null = await categoryRepository.findOneBy({id: categoryId});
        if (!foundCategory) throw new AppError("Category not found", 404);
    }




    return next();
};