const express = require('express')
const app = express()
import { DB } from './db/Mongo'

// init db
const db = new DB()
app.db = db
db.init()

// init routes
require('./routes/game')(app)
require('./routes/user')(app)

// TODO users & stuff

app.listen(7946, () => {
  console.log('Example app listening on port 7946!')
})