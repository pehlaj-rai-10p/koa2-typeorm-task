import {MigrationInterface, QueryRunner, Unique} from "typeorm";
import { TableUnique } from "typeorm/schema-builder/table/TableUnique";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";
import { UniqueMetadata } from "typeorm/metadata/UniqueMetadata";

export class UpdateTableUsers1565184146553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createUniqueConstraint("users", new TableUnique ({name: "uniqueemail", columnNames:["email"]})); 
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropUniqueConstraint("users", new TableUnique ({name: "uniqueemail", columnNames:["email"]}));
    }

}
