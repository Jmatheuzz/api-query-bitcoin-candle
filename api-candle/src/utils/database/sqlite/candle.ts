import { Candle } from '@/utils/database/sqlite/entities/candle'
import { dataSource } from '.'
import { Between } from 'typeorm'

export class CandleRepository {
  async get (): Promise<Candle[]> {
    const date = new Date()
    const initial = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const final = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
    const repo = dataSource.getRepository(Candle)
    return await repo.find({order: {finalDateTime: 'ASC'},where: {finalDateTime: Between(initial, final)}})
  }

  async insert (input: Candle): Promise<Candle> {
    const repo = dataSource.getRepository(Candle)
    return await repo.save(input)
  }
}
