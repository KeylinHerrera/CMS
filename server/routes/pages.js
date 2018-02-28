/** Imports Frameworks. */
const express = require('express')

/** Imports Modules. */
const pagesController = require('../controllers/page.controller')

/** Calls routes */
const router = express.Router()

/** Makes routes based on methods */
router.post('/', pagesController.addPage)
router.get('/', pagesController.getPage)
router.delete('/:page_id', pagesController.deletePage)
router.put('/:page_id', pagesController.updatePage)

/** Exports Router. */
module.exports = router
