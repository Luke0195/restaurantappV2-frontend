class Validator {
  isString(value: any): boolean {
    return typeof value === 'string'
  }

  isBoolean(condictionalValue: any): boolean {
    return condictionalValue !== null
  }
}

export default new Validator()
