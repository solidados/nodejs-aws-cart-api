import { MigrationInterface, QueryRunner } from "typeorm";

export class CartTable1722183161229 implements MigrationInterface {
    name = 'CartTable1722183161229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."cart_status_enum" AS ENUM('OPEN', 'STATUS')`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "status" "public"."cart_status_enum" NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TYPE "public"."cart_status_enum"`);
    }

}
