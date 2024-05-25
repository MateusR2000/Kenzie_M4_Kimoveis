import { Request, Response } from "express";
import { categoryServices } from "../services";
import { CategoryRead } from "../interfaces";
import { Category } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category: Category = await categoryServices.create(req.body);
    return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
    const categories: CategoryRead = await categoryServices.read();
    return res.status(200).json(categories);
};

const realEstateByCategory = async (req: Request, res: Response): Promise<Response> => {
    const realEstatesByCategory = await categoryServices.realEstateByCategory(Number(req.params.id));
    return res.status(200).json(realEstatesByCategory);
}


export default { create, read, realEstateByCategory };