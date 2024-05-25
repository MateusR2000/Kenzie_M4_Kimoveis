import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp } from "typeorm";
import { User } from "./user.entity";
import { RealEstate } from "./realEstate.entity";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "date"})
    date: Date;

    @Column({type: "time"})
    hour: Timestamp;

    @ManyToOne(() => User, (u) => u.schedules)
    user: User;

    @ManyToOne(() => RealEstate, (re) => re.schedules)
    realEstate: RealEstate;
}