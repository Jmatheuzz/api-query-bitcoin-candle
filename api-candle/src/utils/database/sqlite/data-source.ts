import { DataSource } from 'typeorm'
import { env } from '@/main/config'
import { Candle } from './entities'

export const dataSource = new DataSource({
  type: env.dbType,
  host: env.dbHost,
  username: env.dbUser,
  password: env.dbPassword,
  port: parseInt(env.dbPort),
  database: env.db,
  entities: [Candle],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: true
})
