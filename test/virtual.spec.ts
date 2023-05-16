import { describe, test } from 'vitest'
import virtual from '../src/index'

describe('Virtual Plugin', () => {
  test('virtual', () => {
    const virtualPlugin = virtual({ a: 'b' })
  })
})
