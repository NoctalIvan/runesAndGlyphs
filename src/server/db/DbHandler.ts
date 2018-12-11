import { MongoClient, Db, Collection } from 'mongodb'
import { IUser } from '../../interfaces';
import { ISerializedRune } from '../../classes/Rune';

export class DbHandler {
    client:MongoClient
    db:Db
    users:Collection<any>
    tokens:Object

    async init() {
        this.client = await MongoClient.connect('mongodb://localhost:27017')
        this.db = this.client.db('runesAndGyphs')
        this.users = this.db.collection('users')
        this.tokens = {}

        console.log('db init done')
    }

    /* user cors */
    async getUser(name:string):Promise<IUser> {
        return this.users.findOne({$or: [{_id: name}]})
    }
    getUserNameToken(token:string):string {
        return this.tokens[token]
    }
    async setToken(token:string, name:string) {
        this.tokens[token] = name
        return
    }

    async addUser(name:string, password:string, mail:string) {
        try {
            await this.users.insertOne({
                _id: name,
                password,
                mail,
                decks: [],
                runes: []
            })
            return true
        } catch (e) {
            return false
        }
    }

    async updateUser(name:string, update) {
        try {
            await this.users.updateOne({_id: name}, {$set: update})
            return true
        } catch(e) {
            return false
        }
    }

    async deleteUser(name:string) {
        try {
            await this.users.deleteOne({_id: name})
            return true
        } catch(e) {
            return false
        }
    }

    /* runes */
    async addRune(name:string, runes:ISerializedRune) {
        try {
            await this.users.updateOne({_id: name}, {$push: {runes: {$each: runes}}})
            return true
        } catch(e) {
            return false
        }
    }

    async deleteRune(name:string, runeId) {
        try {
            await this.users.updateOne({_id: name}, {$pull: {runes: {$_id: runeId}}})
            return true
        } catch(e) {
            return false
        }
    }

    /* decks */
    async addDeck(name:string, deck) {
        try {
            await this.users.updateOne({_id: name}, {$push: {decks: deck}})
            return true
        } catch(e) {
            return false
        }
    }

    async deleteDeck(name:string, deckId) {
        try {
            await this.users.updateOne({_id: name}, {$pull: {decks: {$_id: deckId}}})
            return true
        } catch(e) {
            return false
        }
    }
}
