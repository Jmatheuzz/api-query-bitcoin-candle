import { BitcoinAPI } from '@/models'
import { AxiosHttpClient } from './axios'
import { env } from '@/main/config'

export async function getAPIData (): Promise<BitcoinAPI> {
  const axios = new AxiosHttpClient()
  const data = await axios.get({ url: `${env.pricesAPI!}`, config: {} })
  console.log(data)
  return data
}
