import { MigrationInterface, QueryRunner } from 'typeorm'

export class TimestampIndex1652106398000 implements MigrationInterface {
  name = 'TimestampIndex1652106398000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX idx_substrate_block_timestamp ON substrate_block(timestamp)`
    )
    await queryRunner.query(
      `CREATE INDEX idx_substrate_event_block_timestamp ON substrate_event(block_timestamp)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "idx_substrate_block_timestamp"`)
    await queryRunner.query(`DROP INDEX "idx_substrate_event_block_timestamp"`)
  }
}
