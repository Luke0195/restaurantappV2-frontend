import { HttpResponseData, HttpClient, HttpRequestData } from './interfaces'
import { getHeaders } from './factories'

class HttpFetchClient implements HttpClient {
  private readonly baseUrl

  constructor() {
    this.baseUrl = 'http://localhost:8080'
  }

  async request({
    endpoint,
    method,
    body,
    headers,
  }: HttpRequestData): Promise<HttpResponseData<any>> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      body: body,
      method: method || 'GET',
      headers: getHeaders(headers),
    })
    return response.json()
  }
}

export default new HttpFetchClient()
