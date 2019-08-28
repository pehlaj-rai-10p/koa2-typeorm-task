import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddTableUsers1565176237621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isNullable: false,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'name',
                  type: 'character varying',
                  isNullable: false,
                  length: '100',
                },
                {
                    name: 'email',
                    type: 'character varying',
                    isUnique: true,
                    isNullable: false,
                    length: '100',
                },
                {
                    name: 'password',
                    type: 'character varying',
                    isNullable: false,
                    length: '100',
                },
                {
                  name: 'isActive',
                  type: 'boolean',
                  isNullable: false,
                  default: true,
                },
                {
                  name: 'isDeleted',
                  type: 'boolean',
                  isNullable: false,
                  default: false,
                },
              ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('users');
    }

}
