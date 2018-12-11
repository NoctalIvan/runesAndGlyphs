export class Glyph {
    name:string

    constructor (glyph:ISerializedGlyph) {
        this.name = glyph.name
    }
}

export interface ISerializedGlyph {
    name: string
}