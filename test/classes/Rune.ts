import { Rune } from "../../src/classes/rune";
const assert = require('assert')

describe('Rune', () => {
    it('should create', () => {
        const rune = new Rune('test')
        assert.equal(rune.name, 'test')
    })
})