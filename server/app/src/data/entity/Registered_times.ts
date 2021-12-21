import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Notifications } from "./Notifications";
import { Users } from "./Users";

@Entity()
export class Registered_times {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    created_at: Date;

    @Column()
    time_registered: Date;

    @Column()
    user_id: string;

    @OneToMany(() => Notifications, notifications => notifications.users)
    notifications: Notifications[];

    @ManyToOne(() => Users, users => users.registered_times)
    @JoinColumn({ name: 'user_id'})
    user: Users;

}