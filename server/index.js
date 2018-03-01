/** Imports Frameworks. */
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const config = require('./config') //----------->>

/** Connects to Mongodb */
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/csmdatabase'


/** Imports Modules. */
const setupRoutes = require('./routes/setups')
const authRoutes = require('./routes/auths') //----------->>
const pageRoutes = require('./routes/pages')

const app = express()

/** This allows to skip the "Same origin policy" to access resources from remote hosts. */
app.use(cors())

/** This allows to get data from a POST. */
app.use(express.json())

/** Saves logs to mongodb database. */
app.use(morgan('tiny'))

/** Defines PORT 3000. */
app.set('port', process.env.PORT || 3000)

/** Prints 'SET UP API HOME PAGE' menssage */
app.get('/', (req, res) => {
  res.send('SET UP API HOME PAGE')
})

/** Uses predefined URL in client */
app.use('/api/v2/setups', setupRoutes)
app.use('/api/v2/auths', authRoutes) //----------->>
app.use('/api/v2/pages', pageRoutes)

/** Returns an Error. */
app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



