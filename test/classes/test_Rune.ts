import { Rune } from "../../src/classes/Rune";
const assert = require('assert')

describe('Rune', () => {
    it('should create', () => {
        const rune = new Rune({_id: 'id', name: 'test', atk: 2, hp: 2, cost: 1, glyphs: []})
        assert.equal(rune.name, 'test')
    })
})