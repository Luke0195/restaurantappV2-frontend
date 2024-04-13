import { describe, expect, test } from 'vitest'
import validator from './index'

describe('Validator', () => {
  test('ensure isString return false if invalid value is provided', () => {
    const result = validator.isString(null)
    expect(result).toBe(false)
  })
})
