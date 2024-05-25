import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { userReturnSchema, userReadSchema, userUpdateSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = userRepository.create(payload);
    await userRepository.save(user);

    return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
    return userReadSchema.parse(await userRepository.find());
};

const partialUpdate = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
   const updatedUser = await userRepository.save({...user, ...payload});

   return userReturnSchema.parse(updatedUser);
};

const destroy = async (user: User): Promise<void> => {
    await userRepository.softRemove(user);
};

export default { create, read, partialUpdate, destroy };