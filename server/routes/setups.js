/** Imports Frameworks. */
const express = require('express')

/** Imports Modules. */
const setupsController = require('../controllers/setup.controller')

/** Calls routes */
const router = express.Router()

/** Makes routes based on methods */
router.post('/', setupsController.addUser)

/** Exports Router. */
module.exports = router
