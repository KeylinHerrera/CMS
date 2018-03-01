const express = require('express')

const logInsController = require('../controllers/login.controller')

const router = express.Router()

router.post('/', logInsController.addPage)
router.get('/', logInsController.getPage)

module.exports = router
