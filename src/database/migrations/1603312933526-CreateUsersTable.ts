import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1603312933526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: 'users',
        columns: [
            {
              name: 'id',
              type: 'tinyint',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment'
            },
            {
              name: 'username',
              type: 'varchar'
            },
            {
              name: 'password',
              type: 'varchar'
            }
        ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
