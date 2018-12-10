import { Db } from "../db/Db";

const tokens = {}

module.exports = (app) => {
    const db:Db = app.db

    app.push('/user', async (req, res) => {
        if(!req.body.name || !req.body.password || !req.body.mail) {
            res.sendStatus(400)
            return
        }

        await db.addPlayer(req.body.name, req.body.password, req.body.mail)
        res.sendStatus(204)
    })

    app.put('/user', async (req, res) => {
        
    })

    app.delete('/user', async (req, res) => {

    })

    app.push('/user/login', async (req, res) => {
        
    })

    app.delete('/user/login', async (req, res) => {
        
    })
}