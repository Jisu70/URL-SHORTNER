const express = require('express');
const generateUrlController = require('../controllers/urlController')
const router = express.Router();


router.post('/',generateUrlController.generateShortUrl)

module.exports = router; 

