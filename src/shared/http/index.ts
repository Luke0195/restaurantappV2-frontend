import { HttpClient, HttpRequestData, HttpResponseData } from './interfaces'
import { getHeaders } from './factories'
import { InvalidResponseData } from './exceptions/invalid-response'

class HttpFetchClient implements HttpClient {
  private readonly baseUrl

  constructor() {
    this.baseUrl = 'http://localhost:8080/v1'
  }

  async request({
    endpoint,
    method,
    body,
    headers,
  }: HttpRequestData): Promise<HttpResponseData<any>> {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      body: JSON.stringify(body),
      method: method,
      headers: getHeaders(headers),
    }).then((response) => response.json())
    return response
  }
}
const httpClient = new HttpFetchClient()

export { httpClient, getHeaders, InvalidResponseData }
