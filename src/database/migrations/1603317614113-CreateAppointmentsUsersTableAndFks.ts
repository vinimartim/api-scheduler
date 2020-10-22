import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAppointmentsUsersTableAndFks1603317614113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'appoint_members',
      columns: [
        {
          name: 'appointmentId',
          type: 'tinyint'
        },
        {
          name: 'memberId',
          type: 'tinyint'
        }
      ]
    }))

    await queryRunner.createForeignKey('appoint_members', new TableForeignKey({
      columnNames: ['appointmentId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'appointments'
    }))

    await queryRunner.createForeignKey('appoint_members', new TableForeignKey({
      columnNames: ['memberId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('appoint_members')
    const appointFk = table?.foreignKeys.find(fk => fk.columnNames.indexOf('appointmentId') !== 1)
    const memberFk = table?.foreignKeys.find(fk => fk.columnNames.indexOf('memberId') !== 1)
    
    if(appointFk && memberFk) {
      await queryRunner.dropForeignKeys('appointments', [appointFk, memberFk])
    }

    await queryRunner.dropTable('appoint_members')
  }

}
