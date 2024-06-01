import './config/module-alias'
import 'reflect-metadata'
import express, { Request, Response } from 'express'
import CandleMessageChannel from '@/services/consume-candle'
import { CandleRepository, dataSource } from '@/utils/database/sqlite'
import { env } from '@/main/config'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
void dataSource.initialize().then(async () => {
  const server = app.listen(env.port)
  const candleMsgChannel = new CandleMessageChannel(server)
  await candleMsgChannel.consumeMessages()
})

const repo = new CandleRepository()
// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use('/candles', async (req: Request, res: Response) => {
  const candles = await repo.get()
  return res.send(candles)
})
