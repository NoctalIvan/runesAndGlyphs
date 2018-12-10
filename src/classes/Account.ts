import { Rune } from "./rune";
import { Deck } from "./Deck";
import { Player } from "./Player";

export class Account {
    name:string
    runes:Rune[]
    decks:Deck[]

    constructor (name:string) {
        this.name = name
    }

    getPlayer(deckNbr:number) {
        return new Player(this.name, this.decks[deckNbr])
    }
}