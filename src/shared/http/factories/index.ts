const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const getHeaders = (headers: any): any => {
  return headers === null ? defaultHeaders : headers
}
