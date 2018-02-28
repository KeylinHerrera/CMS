/** Imports Frameworks. */
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

/** Connects to Mongodb */
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/csmdatabase'

/** Imports Modules. */
const setupRoutes = require('./routes/setups')
// const logInRoutes = require('./routes/logIns')

const pageRoutes = require('./routes/pages')
// const contentRoutes = require('./routes/contents')

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
app.use('/api/v2/pages', pageRoutes)
// app.use('/api/v2/contents', contentRoutes)

// app.use('/api/v2/logIns', logInRoutes)
// app.use('/api/v2/media', mediaRoutes)

/** Returns an Error. */
app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



