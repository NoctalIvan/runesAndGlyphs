import { Rune, ISerializedRune } from "./Rune";
const shuffle = require('shuffle-array')

export class Deck {
    name:string
    runes:Rune[]

    constructor (deck:ISerializedDeck) {
        this.name = deck.name
        this.runes = deck.runes.map(rune => new Rune(rune))
    }

    shuffle():void {
        shuffle(this.runes)
    }

    draw(n:number):Rune[] {
        return this.runes.splice(0, n)
    }
}

export interface ISerializedDeck {
    name:string
    runes:ISerializedRune[]
}