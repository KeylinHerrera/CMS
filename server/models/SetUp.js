const mongoose = require('mongoose')

const setupSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

const SetUp = mongoose.model("setUp", setupSchema)
module.exports = SetUp
