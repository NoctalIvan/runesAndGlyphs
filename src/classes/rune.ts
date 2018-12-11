import { Glyph, ISerializedGlyph } from "./Glyph";

export class Rune {
    _id:string
    name:string
    hp:number
    maxHp:number
    atk:number
    cost:number
    attackCount:number
    glyphs:Glyph[]

    constructor(rune:ISerializedRune) {
        this._id = rune._id
        this.name = rune.name
        this.hp = rune.hp
        this.maxHp = rune.hp
        this.atk = rune.atk
        this.cost = rune.cost
        this.glyphs = rune.glyphs.map(glyph => new Glyph(glyph))
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

export interface ISerializedRune {
    _id:string
    name:string
    atk:number
    hp:number
    cost:number
    glyphs:ISerializedGlyph[]
}