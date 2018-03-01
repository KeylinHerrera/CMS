/** Imports Frameworks. */
const express = require('express')

/** Imports Modules. */
const authController = require('../controllers/auth.controller')

/** Calls routes */
const router = express.Router()

/** Makes routes based on methods */
router.post('/', authController.authUser)

/** Exports Router. */
module.exports = router
