import { Deck } from "./Deck";
import { Rune } from "./Rune";
import { IUser } from "../interfaces";

export class Player {
    name:string
    
    deck:Deck
    hand:Rune[]
    board:Rune[]
    graveyard:Rune[]

    hp:number
    mana:number
    maxMana:number

    constructor (user:IUser) {
        this.name = user.name
        this.deck = new Deck(user.decks[user.activeDeckIndex])
        
        this.hp = 10
        this.mana = 0
        this.maxMana = 0
        this.hand = []
        this.board = []
        this.graveyard = []
    }

    shuffle():void {
        this.deck.shuffle()
    }

    draw(n:number):void {
        this.hand = this.hand.concat(this.deck.draw(n))
    }

    refuelMana(n:number):void {
        this.mana = this.maxMana
    }

    increaseMaxMana(n:number):void {
        this.maxMana += n
    }

    resetAttackCount():void {
        this.board.forEach(rune => rune.resetAttackCount())
    }

    canSummonRune(index:number):boolean {
        const rune = this.hand[index]
        if(!rune || rune.cost > this.mana) {
            return false
        }

        return true
    }

    summonRune(index:number):boolean {
        if(!this.canSummonRune(index)) {
            return false
        }

        const rune = this.hand[index]
        this.mana -= rune.cost
        this.board.push(this.hand.splice(index, 1)[0])
        return true
    }

    resolveDamage(n:number) {
        this.hp -= n
    }

    onRuneDestroy(index:number, attacker:Rune) {
        this.board.splice(index, 1)
        this.resolveDamage(1)
    }
}
