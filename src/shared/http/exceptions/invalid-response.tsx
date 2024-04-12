export class InvalidResponseData extends Error {
  constructor(message: string) {
    super(message)
    this.name = `Invalid Response Data`
  }
}
