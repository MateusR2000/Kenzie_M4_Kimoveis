import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,  
    OneToMany,
    OneToOne,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    JoinTable } from "typeorm";
import { Schedule } from "./schedule.entity";
import { Category } from "./category.entity";
import { Address } from "./address.entity";

@Entity("realEstates")
export class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({default: false})
    sold: boolean;

    @Column("decimal", { precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column()
    size: number;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @ManyToOne(() => Category, (c) => c.realEstate)
    category: Category;

    @OneToOne(() => Address, (a) => a.realEstate)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Schedule, (s) => s.realEstate)
    @JoinTable()
    schedules: Array<Schedule>;
}