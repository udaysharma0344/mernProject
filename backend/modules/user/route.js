const express = require('express')
const {singupValidator, singinValidator} = require('./validator')
const {singupController, singinController} = require('./controller')

const router = express.Router();

router.post('/singup',singupValidator , singupController);
router.post('/singin',singinValidator, singinController);


module.exports = router; 