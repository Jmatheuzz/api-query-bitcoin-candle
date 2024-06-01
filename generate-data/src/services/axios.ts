import { HttpGetClient, HttpPostClient, HttpGetClientParams, HttpPostClientParams } from '@/models'
import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient, HttpPostClient {
  async get ({ url, config }: HttpGetClientParams): Promise<any> {
    const result = await axios.get(url, config)
    return result.data
  }

  async post ({ url, body, params }: HttpPostClientParams): Promise<any> {
    const result = await axios.post(url, body, params)
    return result.data
  }
}
