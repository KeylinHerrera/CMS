const mongoose = require('mongoose')

const logInSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  url: { type: String, required: true },
})

const LogIn = mongoose.model('logIn', logInSchema)

module.exports = LogIn
