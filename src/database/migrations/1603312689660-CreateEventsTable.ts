import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEventsTable1603312689660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'events',
      columns: [
        {
          name: 'id',
          type: 'tinyint',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'initial',
          type: 'timestamp'
        },
        {
          name: 'final',
          type: 'timestamp'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events')
  }

}
