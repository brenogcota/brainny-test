import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Notifications {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    message: string;

    @Column()
    read: boolean;

    @Column()
    created_at: Date;

    @Column()
    user_id: string;

    @ManyToMany(() => Users)
    @JoinTable({ 
        name: 'notifications_users',
        joinColumn: {
            name: 'notification_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    })
    users: Users[];    
}