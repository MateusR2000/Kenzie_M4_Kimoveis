import { Router } from "express";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import { categoryControllers } from "../controllers";

export const categoryRouter: Router = Router();

categoryRouter.post(
    "",
    middlewares.validateBody(categoryCreateSchema),
    middlewares.verifyToken,
    middlewares.uniqueCategory,
    middlewares.isAdmin,
    categoryControllers.create
);

categoryRouter.get("", categoryControllers.read);

categoryRouter.use("/:id", middlewares.verifyCategoryId);

categoryRouter.get(
    "/:id/realEstate",
    categoryControllers.realEstateByCategory
);