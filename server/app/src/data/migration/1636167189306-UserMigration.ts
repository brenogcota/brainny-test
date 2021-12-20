import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration1636167189306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" 
                                ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
                                 "name" character varying NOT NULL,
                                 "password" character varying NOT NULL, 
                                 "email" character varying NOT NULL UNIQUE,
                                 "email_verified_at" character varying,
                                 "remember_token" character varying,
                                 "avatar_url" character varying,
                                 "token" character varying NOT NULL UNIQUE,
                                 "roles" text[] NOT NULL,
                                 "permissions" text[] NOT NULL,
                                 "type" character varying NOT NULL DEFAULT 'guest',
                                 "phone" character varying,
                                 "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                                 CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
                                 )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
