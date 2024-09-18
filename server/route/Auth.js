const express = require('express')
const router = express.Router();
const Authcontroller = require('../controller/AuthController');






// Authcontroller.loginValid, 
router.post('/findAll', Authcontroller.getData);
router.get('/fetch',Authcontroller.FetchSocket)


module.exports = router

