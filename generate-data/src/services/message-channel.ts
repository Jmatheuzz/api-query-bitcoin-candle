import { Channel, connect } from 'amqplib'
import { env } from '@/main/config'

export async function createMessageChannel (): Promise<Channel | null> {
  try {
    const connection = await connect(env.amqp!)
    const channel = await connection.createChannel()
    await channel.assertQueue(env.queue!, { durable: true })
    return channel
  } catch (err) {
    console.log('Error while trying to connect to RabbitMQ')
    console.log(err)
    return null
  }
}
