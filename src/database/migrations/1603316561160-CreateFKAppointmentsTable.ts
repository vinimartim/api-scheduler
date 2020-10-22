import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFKAppointmentsTable1603316561160 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('appointments', new TableForeignKey({
      columnNames: ['ownerId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users'  
    }))       
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('users')
    const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf('ownerId') !== 1)
    
    if(foreignKey) {
      await queryRunner.dropForeignKey('appointments', foreignKey)
    }
  }

}
