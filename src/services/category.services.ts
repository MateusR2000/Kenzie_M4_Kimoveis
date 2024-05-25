import { Category } from "../entities";
import { CategoryCreate, CategoryRead, RealEstateRead } from "../interfaces";
import { categoryRepository, realEstateRepository } from "../repositories";
import { categoryReadSchema } from "../schemas";

const create = async (payload: CategoryCreate): Promise<Category> => {
    const category: Category = categoryRepository.create(payload);
    await categoryRepository.save(category);

    return category;
};

const read = async (): Promise<CategoryRead> => {
    return categoryReadSchema.parse(await categoryRepository.find());
};


const realEstateByCategory = async (categoryId: number) => {
    return await(categoryRepository.findOne({where: {id: categoryId} ,relations: {realEstate: true}}));
}

export default { create, read, realEstateByCategory }