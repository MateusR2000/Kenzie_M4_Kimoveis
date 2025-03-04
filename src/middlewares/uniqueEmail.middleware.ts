import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

export const uniqueEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const email: string = req.body.email;
    if (!email) return next();

    const foundUser: User | null = await userRepository.findOneBy({email});
    if (foundUser) throw new AppError("Email already exists", 409);

    return next();
};