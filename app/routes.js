const express = require('express')
const router = express.Router()
const translator = require('./models/translator')

router.get('/', function(req, res) {
  	res.status(200).render('home',{
    result: ""
  })
})

router.post('/submit-text', function(req, res) {
	const lang = req.body.lang;
	const input = req.body.input;
	const pc = req.body.pc;
    res.status(200).render('home',{
    result: translator.translate(input,pc,lang)
  })
})

module.exports = router