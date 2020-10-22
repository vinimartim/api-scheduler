import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterColumnUsernameUsersTable1603319157599 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('users', 'username', new TableColumn({
      name: 'username',
      type: 'varchar',
      isUnique: true,
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('users', 'username', new TableColumn({
      name: 'username',
      type: 'varchar'
    }))
  }

}
