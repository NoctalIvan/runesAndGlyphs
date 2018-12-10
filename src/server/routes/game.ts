import {Application, Request, Response} from 'express'
import { DbHandler } from '../db/DbHandler';

const games = {}

module.exports = (app:Application, db:DbHandler) => {
    // create a game with two players, returns the id
    app.post('/game/:id1/:id2', (req:Request, res:Response) => {
        const id = Math.random().toString()
        const player1 = null // get player 1
        const player2 = null // get player 2

        const game = null

        res.send(game) // id, status & all events
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