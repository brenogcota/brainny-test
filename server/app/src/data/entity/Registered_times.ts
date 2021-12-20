import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Registered_times {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    created_at: Date;

    @Column()
    registered_times: Date;

    @Column()
    user_id: string;

    @ManyToOne(() => Users, user => user.registered_times)
    @JoinTable({ name: 'user_id'})
    user: Users;
}