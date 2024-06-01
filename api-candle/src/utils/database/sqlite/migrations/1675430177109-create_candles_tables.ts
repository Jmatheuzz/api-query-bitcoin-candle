import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm'

export class createCandlesTables1675430177109 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'candles',
      columns: [
        new TableColumn({
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        }),
        new TableColumn({
          name: 'low',
          type: 'float'
        }),
        new TableColumn({
          name: 'high',
          type: 'float'
        }),
        new TableColumn({
          name: 'open',
          type: 'float'
        }),
        new TableColumn({
          name: 'close',
          type: 'float'
        }),
        new TableColumn({
          name: 'final_date_time',
          type: 'timestamp'
        }),
        new TableColumn({
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        }),
        new TableColumn({
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        })
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('candles')
  }
}
