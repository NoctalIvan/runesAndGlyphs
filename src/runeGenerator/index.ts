import { ISerializedRune } from "../classes/rune";
import * as uuid from 'uuid'
import { Glyph } from "../classes/Glyph";

export function generateRune():ISerializedRune {    
    return {
        _id: uuid(),
        name:  'new rune',
        atk:  Math.floor(Math.random()*3),
        hp:  Math.floor(Math.random()*2) + 1,
        cost:  Math.floor(Math.random()*3),
        glyphs: [],
    }
}

export function generateRunes(n:number):ISerializedRune[] {
    const runes:ISerializedRune[] = []
    for(let i = 0; i < n; i ++) {
        runes.push(generateRune())
    }

    return runes
}