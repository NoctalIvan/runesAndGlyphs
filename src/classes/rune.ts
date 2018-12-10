import { Glyph } from "./Glyph";

export class Rune {
    public name:string
    public hp:number
    public maxHp:number
    public atk:number
    public cost:number
    public attackCount:number
    // public type
    // public element
    public glyphs:Glyph[]

    constructor(name:string, atk: number, hp:number, cost:number, glyphs) {
        this.name = name
        this.hp = hp
        this.maxHp = hp
        this.atk = atk
        this.cost = cost
        this.glyphs = glyphs
        this.attackCount = 0
    }

    resetAttackCount() {
        this.attackCount = 1
    }

    canAttack():boolean {
        return this.attackCount > 0
    }

    takeDamage(n:number):boolean {
        this.hp -= n
        return this.hp < 0
    }

    getPlayerDamage():number {
        return 1
    }

    getRuneDamage(target:Rune):number {
        return this.atk
    }

    resolveRuneDamage(damage:number):boolean {
        this.hp -= damage
        return this.hp <= 0
    }
}