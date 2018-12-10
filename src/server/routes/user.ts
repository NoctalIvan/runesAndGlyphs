import { DbHandler } from "../db/DbHandler";
import {Application, Request, Response} from 'express'

const tokens = {}

module.exports = (app:Application, db:DbHandler) => {
    app.post('/user', async (req:Request, res:Response) => {
        if(!req.body.name || !req.body.password || !req.body.mail) {
            res.sendStatus(400)
            return
        }

        await db.addPlayer(req.body.name, req.body.password, req.body.mail)
        res.sendStatus(204)
    })

    app.put('/user', async (req:Request, res:Response) => {
        
    })

    app.delete('/user', async (req:Request, res:Response) => {

    })

    app.post('/user/login', async (req:Request, res:Response) => {
        
    })

    app.delete('/user/login', async (req:Request, res:Response) => {
        
    })
}