import { describe, expect, it } from 'vitest'
import virtual from '../src/index'

describe('virtual Plugin', () => {
  it('virtual', () => {
    const virtualPlugin = virtual({ a: 'b' })
    expect(virtualPlugin).toBeDefined()
  })
})
