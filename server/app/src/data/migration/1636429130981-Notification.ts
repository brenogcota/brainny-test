import {MigrationInterface, QueryRunner} from "typeorm";

export class Notification1636429130981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notifications" 
                                ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                                 "message" character varying NOT NULL,
                                 "read" boolean NOT NULL DEFAULT false,
                                 "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                 "user_id" uuid NOT NULL,
                                 CONSTRAINT "PK_a3ffb1c0dsx416b9sc9apss6f907b7433" PRIMARY KEY ("id"),
                                 CONSTRAINT "FK_UserId" FOREIGN KEY (user_id)
                                 REFERENCES users(id))`);
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notifications");
    }

}
