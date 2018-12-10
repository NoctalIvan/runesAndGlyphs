import { MongoClient, Db, Collection } from 'mongodb'

export class Db {
    client:MongoClient
    db:Db
    players:Collection<any>

    async init() {
        this.client = await MongoClient.connect('mongodb://localhost:27017')
        this.db = this.client.db('runesAndGyphs')
        this.players = this.db.collection('players')

        console.log('db init done')
    }

    /* player cors */
    async getPlayer(name:string) {
        return this.players.findOne({_id: name})
    }

    async addPlayer(name, password, mail) {
        try {
            await this.players.insertOne({
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

    async updatePlayer(name, update) {
        try {
            await this.players.updateOne({_id: name}, {$set: update})
            return true
        } catch(e) {
            return false
        }
    }

    async deletePlayer(name) {
        try {
            await this.players.deleteOne({_id: name})
            return true
        } catch(e) {
            return false
        }
    }

    /* runes */
    async addRune(name, runes) {
        try {
            await this.players.updateOne({_id: name}, {$push: {runes: {$each: runes}}})
            return true
        } catch(e) {
            return false
        }
    }

    async deleteRune(name, runeId) {
        try {
            await this.players.updateOne({_id: name}, {$pull: {runes: {$_id: runeId}}})
            return true
        } catch(e) {
            return false
        }
    }

    /* decks */
    async addDeck(name, deck) {
        try {
            await this.players.updateOne({_id: name}, {$push: {decks: deck}})
            return true
        } catch(e) {
            return false
        }
    }

    async deleteDeck(name, deckId) {
        try {
            await this.players.updateOne({_id: name}, {$pull: {decks: {$_id: deckId}}})
            return true
        } catch(e) {
            return false
        }
    }
}
