import { Rune } from "../../src/classes/Rune";
const assert = require('assert')

describe('Rune', () => {
    it('should create', () => {
        const rune = new Rune('test', 2, 2, [])
        assert.equal(rune.name, 'test')
    })
})