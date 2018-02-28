/** Imports Frameworks. */
const mongoose = require('mongoose')

/** Shema of the data */
const pageSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String, required: true },
})

/** Creates Module with Mongoose */
const Page = mongoose.model('page', pageSchema)

/** Exports Page Module */
module.exports = Page
