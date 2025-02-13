const express = require('express')
const salesController = require('../controllers/salesController')
const router = express.Router()

router.get('/aggregate', salesController.getAggragate)

module.exports = router