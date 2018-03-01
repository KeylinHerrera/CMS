/** Imports Frameworks. */
const mongoose = require('mongoose')

/** Shema of the data */
const contentSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  url: { type: String, required: true },
})

/** Creates Module with Mongoose */
const Content = mongoose.model('content', contentSchema)

/** Exports Content Module */
module.exports = Content