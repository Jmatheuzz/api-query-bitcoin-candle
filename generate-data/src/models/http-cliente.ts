export interface HttpGetClient {
  get: <T = any> (params: HttpGetClientParams) => Promise<T>
}

export type HttpGetClientParams = {
  url: string
  config: object
}

export interface HttpPostClient {
  post: <T = any> (params: HttpPostClientParams) => Promise<T>
}

export type HttpPostClientParams = {
  url: string
  body: any
  params?: object
}
