import {Application, Request, Response} from 'express'
import { DbHandler } from '../db/DbHandler';
import * as uuid from 'uuid'
import { Game } from '../../classes/Game';
import { Player } from '../../classes/Player';

const games = {}

module.exports = (app:Application, db:DbHandler) => {

    // create a game with two players
    app.post('/game', async (req:Request, res:Response) => {
        const player1 = await db.getUser(req.body.user1)     
        const player2 = await db.getUser(req.body.user2)
        if(!player1 || !player2) {
            return res.send(404)
        }

        const id = uuid()
        games[id] = new Game(
            id,
            new Player(player1),
            new Player(player2)
        )
        
        res.send({id})
    })

    // summon a rune in a game
    app.post('/game/:id/summon/:index', (req:Request, res:Response) => {
        // check & do action
        const game = null
        res.send(game) // id, status & all events
    })

    // attack a rune in a game
    app.post('/game/:id/attack/:index1/:index2', (req:Request, res:Response) => {
        // check & do action
const game = null
        res.send(game) // id, status & all events
    })
}