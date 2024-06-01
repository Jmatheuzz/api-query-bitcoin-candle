import { Channel, connect } from 'amqplib'
import { Server } from 'socket.io'
import * as http from 'http'
import { Candle } from '@/models'
import { CandleRepository } from '@/utils/database/sqlite'
import { env } from '@/main/config'

export default class CandleMessageChannel {
  private _channel: Channel | null = null
  private readonly repository: CandleRepository
  private readonly _io: Server

  constructor (server: http.Server) {
    this.repository = new CandleRepository()
    this._io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    })
    this._io.on('connection', () => console.log('Web socket connection created'))
  }

  private async _createMessageChanel (): Promise<void> {
    try {
      const connection = await connect(env.amqp)
      this._channel = await connection.createChannel()
      await this._channel.assertQueue(env.queue)
    } catch (err) {
      console.log('Connection to RabbitMQ failed')
      console.log(err)
    }
  }

  async consumeMessages (): Promise<void> {
    await this._createMessageChanel()
    if (this._channel) {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      await this._channel.consume(env.queue, async msg => {
        const candleObj = JSON.parse(msg!.content.toString())
        this._channel!.ack(msg!)

        const candle: Candle = candleObj
        console.log(candle)
        const ed = await this.repository.insert(candle)
        const candles = await this.repository.get()
        this._io.emit(env.socketEvent, candles)
      })
    }
  }
}
