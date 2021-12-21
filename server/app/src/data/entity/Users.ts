import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Notifications } from "./Notifications";
import { Registered_times } from "./Registered_times";

@Entity()
export class Users {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    email_verified_at: string;

    @Column()
    remember_token: string;

    @Column()
    avatar_url: string;

    @Column()
    token: string;

    @Column("text", { array: true })
    roles: string[];

    @Column("text", { array: true })
    permissions: string[];

    @Column()
    type: string;

    @Column()
    created_at: Date;

    @OneToMany(() => Notifications, notifications => notifications.users)
    notifications: Notifications[];

    @OneToMany(() => Registered_times, times => times.user)
    registered_times: Registered_times[];

}
