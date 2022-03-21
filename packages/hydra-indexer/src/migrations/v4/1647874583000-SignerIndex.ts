import { MigrationInterface, QueryRunner } from 'typeorm'

export class SignerIndex1647874583000 implements MigrationInterface {
  name = 'SignerIndex1647874583000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX idx_substrate_extrinsic_signer ON substrate_extrinsic(signer)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "idx_substrate_extrinsic_signer"`)
  }
}
