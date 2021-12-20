import {MigrationInterface, QueryRunner} from "typeorm";

export class ADDCOLUMNSUBSCRIBERNOTIFICATION1638548860737 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE notifications ADD COLUMN subscriber_id uuid NOT NULL;
                                ALTER TABLE notifications ADD CONSTRAINT "FK_SubscriberId" FOREIGN KEY (subscriber_id)
                                REFERENCES users(id)`);
    }
    
    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE notifications DROP COLUMN subscriber_id`);
    }

}
