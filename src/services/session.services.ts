import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors";
import { SessionCreate, SessionReturn } from "../interfaces";
import { sign } from "jsonwebtoken";
import { userRepository } from "../repositories";

const create = async ({
    email,
    password
}: SessionCreate): Promise<SessionReturn> => {
    const foundUser: User | null = await userRepository.findOneBy({email});
    if(!foundUser) throw new AppError("Invalid credentials", 401);

    const samePassword: boolean = await compare(password, foundUser.password);
    if (!samePassword) throw new AppError("Invalid credentials", 401);

    const token: string = sign(
        { admin: foundUser.admin },
        process.env.SECRET_KEY!,
        { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token };
};

export default { create };