const express = require('express')
const singupValidator = require('./validator')
const {singupController} = require('./controller')

const router = express.Router();

router.post('/singup',singupValidator , singupController);


module.exports = router; 