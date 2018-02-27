/** Imports Frameworks. */
const mongoose = require('mongoose')

/** Shema of the data */
const setupSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
})

/** Creates Module with Mongoose */
const SetUp = mongoose.model("setUp", setupSchema)

/** Exports SetUp Module */
module.exports = SetUp
