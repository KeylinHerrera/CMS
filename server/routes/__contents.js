/** Imports Frameworks. */
const express = require('express')

/** Imports Modules. */
const contentsController = require('../controllers/content.controller')

/** Calls routes */
const router = express.Router()

/** Makes routes based on methods */
router.post('/', contentsController.addContent)
router.get('/', contentsController.getContent)
router.delete('/:content_id', contentsController.deleteContent)
router.put('/:content_id', contentsController.updateContent)

/** Exports Router. */
module.exports = router
