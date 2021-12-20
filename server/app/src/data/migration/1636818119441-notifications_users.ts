import {MigrationInterface, QueryRunner} from "typeorm";

export class notificationsUsers1636818119441 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notifications_users" 
                                ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                                 "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                 "user_id" uuid NOT NULL,
                                 "notification_id" uuid NOT NULL,
                                 CONSTRAINT "PK_notifications_users" PRIMARY KEY ("id"),
                                 CONSTRAINT "FK_UserId" FOREIGN KEY (user_id)
                                 REFERENCES users(id),
                                 CONSTRAINT "FK_NotificationId" FOREIGN KEY (notification_id)
                                 REFERENCES notifications(id))`);
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notifications_users");
    }

}
