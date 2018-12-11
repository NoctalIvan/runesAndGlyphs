import { ISerializedDeck } from "./classes/Deck";
import { ISerializedRune } from "./classes/Rune";

export interface IUser {
    name: string
    password: string
    token: string

    decks:ISerializedDeck[]
    activeDeckIndex:number
    runes:ISerializedRune[]
}