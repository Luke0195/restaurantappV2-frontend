import formatters from '.'
import { describe, test, expect } from 'vitest'

describe('Formatters', () => {
  test('ensure notEmptyStringOrDefault return a string when valid param is provided', () => {
    const expectedValue = 'any_value'
    const result = formatters.notEmptyStringOrDefault(expectedValue)
    expect(result).toEqual('any_value')
  })

  test('ensure notEmptyStringOrDefault return default value when invalid data is provided', () => {
    const invalidValue = 0
    const result = formatters.notEmptyStringOrDefault(invalidValue)
    expect(result).toBe('-')
  })
})
