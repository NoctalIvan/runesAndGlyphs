import { Player } from "./Player";
import { TurnPhase } from "../enums";

export class Game {
    id:number
    turn:number
    playerTurn:number
    turnPhase:TurnPhase
    players:Player[]

    constructor (id:number) {
        this.id = id
        this.turn = 0
        this.playerTurn = 0
        this.turnPhase = TurnPhase.DRAW

        this.players.forEach(player => {
            player.shuffle()
            player.draw(4)
        })
    }

    /* game phases*/
    onDrawPhase () {
        this.players[this.playerTurn].draw(1)
        this.turnPhase = TurnPhase.MANA
        this.onManaPhase()
    }

    onManaPhase () {
        this.players[this.playerTurn].increaseMaxMana(1)
        this.players[this.playerTurn].refuelMana
        this.turnPhase = TurnPhase.SUMMON
        this.onSummonPhaseStart()
    }

    onSummonPhaseStart() {
        // this.onSummonPhaseEnd()
    }

    onSummonPhaseEnd() {
        this.turnPhase = TurnPhase.ATTACK
        this.onAttackPhaseStart()
    }

    onAttackPhaseStart() {
        this.players[this.playerTurn].resetAttackCount()
    }

    onAttackPhaseEnd() {
        this.endTurn()
    }

    endTurn() {
        this.turn ++
        this.playerTurn = +!this.playerTurn
        this.turnPhase = TurnPhase.DRAW
    }

    /* summon */
    sumonRune(index:number) {
        this.players[this.playerTurn].summonRune(index)
    }

    /* attack */
    attackRune(index:number, targetIndex:number) {
        const rune = this.players[this.playerTurn].board[index]
        if(targetIndex === -1) {
            this.players[+!this.playerTurn].resolveDamage(rune.getPlayerDamage())
            return
        }

        const targetRune = this.players[+!this.playerTurn].board[targetIndex]
        const damage1 = rune.getRuneDamage(targetRune)
        const damage2 = targetRune.getRuneDamage(rune)
        
        const destroy1 = rune.resolveRuneDamage(damage2)
        const destroy2 = targetRune.resolveRuneDamage(damage1)

        if(destroy1) {
            this.players[this.playerTurn].onRuneDestroy(index, targetRune)
        }
        if(destroy2) {
            this.players[+!this.playerTurn].onRuneDestroy(targetIndex, rune)
        }
    }
}