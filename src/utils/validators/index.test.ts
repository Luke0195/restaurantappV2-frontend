import { describe, expect, test } from 'vitest'
import validator from './index'
import exp from 'constants'

describe('Validator', () => {
  test('ensure isString return false if invalid value is provided', () => {
    const result = validator.isString(null)
    expect(result).toBe(false)
  })

  test('ensure isBoolean return true when condionational is valid', () => {
    const request = {
      name: 'any_name',
    }
    const result = validator.isBoolean(request.name)
    expect(result).toBe(true)
  })

  test('ensure isBoolean return false when condionational is valid', () => {
    const request = null
    const result = validator.isBoolean(request)
    expect(result).toBe(false)
  })
})
