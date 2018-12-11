import { DbHandler } from "../db/DbHandler";
import {Application, Request, Response} from 'express'
import * as uuid from 'uuid'

module.exports = (app:Application, db:DbHandler) => {
    app.post('/user', async (req:Request, res:Response) => {
        if(!req.body.name || !req.body.password || !req.body.mail) {
            return res.sendStatus(400)
        }

        await db.addUser(req.body.name, req.body.password, req.body.mail)
        res.sendStatus(204)
    })

    app.put('/user', async (req, res) => {
        const userName = db.getUserNameToken(req.headers.authorization)
        if(!userName) {
            return res.sendStatus(401)
        }

        await db.updateUser(userName, req.body)
        res.sendStatus(204)
    })

    app.delete('/user', async (req:Request, res:Response) => {
        const user = await db.getUser(req.body.name || req.body.mail)
        if(!user || !user.password == req.body.password) {
            return res.sendStatus(401)
        }

        await db.deleteUser(user.name)
        db.setToken(req.headers.authorization, undefined)
        res.sendStatus(204)
    })

    app.post('/user/login', async (req:Request, res:Response) => {
        const user = await db.getUser(req.body.name || req.body.mail)
        if(!user || !user.password == req.body.password) {
            return res.sendStatus(401)
        }
        
        const token = uuid()
        db.setToken(uuid, user.name)
        res.send({token})
    })

    app.delete('/user/login', async (req:Request, res:Response) => {
        await db.setToken(req.headers.authorization, undefined)
        res.sendStatus(204)
    })
}