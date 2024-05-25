import { ScheduleCreate, ScheduleRead } from "../interfaces";
import { RealEstate, Schedule } from "../entities";
import { scheduleRepository, realEstateRepository } from "../repositories";
import { AppError } from "../errors";

const create = async (payload: ScheduleCreate, userId: number): Promise<Schedule> => {
    const { realEstateId, ...restOfPayload } = payload;
    const verifyRealEstate: RealEstate | null = await realEstateRepository.findOneBy({id: realEstateId});
    if (!verifyRealEstate) throw new AppError("RealEstate not found", 404);

    const scheduleBody = { ...restOfPayload, user: {id: userId}, realEstate: verifyRealEstate };
    
    const schedule: Schedule = scheduleRepository.create(scheduleBody);
    await scheduleRepository.save(schedule);

    return schedule;
};

const readEstateSchedules = async(realEstateId: number) => {
    return await realEstateRepository.findOne({where: {id: realEstateId}, relations: {schedules: {user: true}, address: true, category: true}})
}

export default { create, readEstateSchedules };
