import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterNameEventsTable1603314450189 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('events', 'appointments')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('appointments', 'events')
  }

}
