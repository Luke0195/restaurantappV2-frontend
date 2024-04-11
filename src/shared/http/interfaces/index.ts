import { HttpStatusCode } from '../enums'

type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH'

export type HttpRequestData = {
  endpoint: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpResponseData<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}

export interface HttpClient<R = any> {
  request(data: HttpRequestData): Promise<HttpResponseData<R>>
}
