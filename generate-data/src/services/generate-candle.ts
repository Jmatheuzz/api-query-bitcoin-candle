import { PeriodEnum } from '@/models'
import { CandleServices, createMessageChannel, getAPIData } from '.'
import { env } from '@/main/config'

export async function generateCandle (): Promise<void> {
  const messageChannel = await createMessageChannel()

  if (messageChannel) {
    while (true) {
      try {
        const loopTimes = PeriodEnum.TEN_MINUTES / PeriodEnum.ONE_MINUTE
        const candle = new CandleServices('BTC', 'USD')

        for (let i = 0; i < loopTimes; i++) {
          const returnAPI = await getAPIData()
          candle.addValue(Number(Number(returnAPI.price).toFixed(2)))
          console.log(Number(Number(returnAPI.price).toFixed(2)))
          await new Promise((resolve, reject) => setTimeout(resolve, PeriodEnum.ONE_MINUTE))
        }

        candle.closeCandle()
        const candleObj = candle.toSimpleObject()
        console.log(candleObj)
        const candleJson = JSON.stringify(candleObj)
        messageChannel.sendToQueue(env.queue!, Buffer.from(candleJson), { persistent: true })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
