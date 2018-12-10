import * as express from 'express'
const app = express()
import { DbHandler } from './db/DbHandler'

// init db
const db = new DbHandler()
db.init()

// init routes
require('./routes/game')(app, db)
require('./routes/user')(app, db)

// TODO users & stuff

app.listen(7946, () => {
  console.log('Example app listening on port 7946!')
})