import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateColumnFKAppointmentsTable1603314791780 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
  
    await queryRunner.addColumn('appointments', new TableColumn({
      name: 'ownerId',
      type: 'tinyint'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'ownerId')
  }

}
