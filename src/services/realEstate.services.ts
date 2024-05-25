import { RealEstateCreate } from "../interfaces";
import { RealEstate, Address, Category } from "../entities";
import { realEstateRepository, addressRepository, categoryRepository } from "../repositories";
import { AppError } from "../errors";


const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
    
    const { address, categoryId, ...restOfPayload } = payload
    const verifyAddress: Address | null = await addressRepository.findOne({where: {number: address.number}})
    if (verifyAddress){
        throw new AppError("Address already exists", 409);
    }

    const createdAddress: Address | null = addressRepository.create(address)
    await addressRepository.save(createdAddress);

    const verifyCategory: Category | null = await categoryRepository.findOne({where: {id: categoryId}})
    if (!verifyCategory){
        throw new AppError("Category not found", 404);
    }


    const realEstateBody = { ...restOfPayload, address: createdAddress, category: verifyCategory }

    const realEstate: RealEstate = realEstateRepository.create(realEstateBody);
    await realEstateRepository.save(realEstate);

    return realEstate;
};

const read = async () => {
    return  await realEstateRepository.find({relations: {address: true}});
};



export default { create, read };