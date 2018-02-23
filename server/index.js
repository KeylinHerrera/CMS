require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/csmdatabase'

const setupRoutes = require('./routes/setups')
const pageRoutes = require('./routes/pages')
const app = express()

// This allows to skip the "Same origin policy" to access resources from remote hosts
app.use(cors())
//This allows to get data from a POST
app.use(express.json())


app.use(morgan('tiny'))

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.send('SET UP API HOME PAGE 💩')
})

app.use('/api/v2/setups', setupRoutes)

app.use('/api/v2/pages', pageRoutes)

app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



