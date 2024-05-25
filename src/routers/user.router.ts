import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
    "",
    middlewares.validateBody(userCreateSchema),
    middlewares.uniqueEmail,
    userControllers.create
);

userRouter.get(
    "",
    middlewares.verifyToken,
    middlewares.isAdmin,
    userControllers.read
);

userRouter.use("/:id", middlewares.verifyId);

userRouter.patch(
    "/:id",
    middlewares.verifyToken,
    middlewares.userToken,
    middlewares.validateBody(userUpdateSchema),
    middlewares.uniqueEmail,
    userControllers.partialUpdate
); 

userRouter.delete(
    "/:id",
    middlewares.updateAdmin,
    middlewares.verifyToken,
    middlewares.isAdmin,
    userControllers.destroy
);


