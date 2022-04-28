import { MigrationInterface, QueryRunner } from 'typeorm'

export class ExtrinsicHashIndex1647874583000 implements MigrationInterface {
  name = 'ExtrinsicHashIndex1651176587000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX idx_substrate_extrinsic_hash ON substrate_extrinsic(hash)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "idx_substrate_extrinsic_hash"`)
  }
}
