import 'dotenv/config'

export const env = {
  pricesAPI: process.env.PRICES_API,
  queue: process.env.QUEUE_NAME,
  amqp: process.env.AMQP_SERVER
}
