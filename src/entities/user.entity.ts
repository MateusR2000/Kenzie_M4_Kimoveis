import { Entity, 
         PrimaryGeneratedColumn, 
         Column,
         CreateDateColumn,
         UpdateDateColumn,
         DeleteDateColumn,
         OneToMany,
         BeforeInsert,
         BeforeUpdate
} from "typeorm";
import { Schedule } from "./schedule.entity";
import { hashSync, getRounds } from "bcryptjs";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({length: 45})
    name: string;

    @Column({length: 45, unique: true})
    email: string;

    @Column({default: false})
    admin: boolean;

    @Column({length: 120})
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt: Date;

    @UpdateDateColumn({type: "date"})
    updatedAt: Date;

    @DeleteDateColumn({type: "date"})
    deletedAt: Date | null;

    @OneToMany(() => Schedule, (s) => s.user)
    schedules: Array<Schedule>;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword () {
        const rounds: number = getRounds(this.password);
        if (!rounds) {
            this.password = hashSync(this.password, 10);
        }
    }
}
