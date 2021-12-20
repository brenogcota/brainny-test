import {MigrationInterface, QueryRunner} from "typeorm";

export class RegisteredTime1640032633368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "registered_times" 
                                ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                                 "time_registered" TIMESTAMP NOT NULL DEFAULT now(), 
                                 "user_id" uuid NOT NULL,
                                 "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
                                 CONSTRAINT "PK_1640032633368_Resgistered_time" PRIMARY KEY ("id"),
                                 CONSTRAINT "FK_UserId" FOREIGN KEY (user_id)
                                 REFERENCES users(id))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("registered_times");
    }

}
