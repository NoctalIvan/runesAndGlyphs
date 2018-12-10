import { Rune } from "./rune";
const shuffle = require('shuffle-array')

export class Deck {
    name:string
    runes:Rune[]

    constructor (name:string) {
        this.name = name
    }

    shuffle():void {
        shuffle(this.runes)
    }

    draw(n:number):Rune[] {
        return this.runes.splice(0, n)
    }
}