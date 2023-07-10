import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnDeletedAt1688265775912 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'products',
      new TableColumn({
        name: 'deteted_at',
        type: 'timestamptz',
        isNullable: true,
        default: null,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'deteted_at');
  }
}
