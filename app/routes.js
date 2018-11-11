const express = require('express')
const router = express.Router()
const translator = require('./models/translator')
const expressValidator = require('express-validator');

router.use(expressValidator())
router.get('/', function(req, res) {
  	res.status(200).render('home',{
    result: "",
	error : ""
  })
})

router.post('/submit-text',function(req, res) {
	req.checkBody("input", "Text must be not empty!").notEmpty();
	req.checkBody("lang", "Please select the language!").notEmpty();
	req.checkBody("pc", "Please select the PC!").notEmpty();
	var errors = req.validationErrors();
  	if (errors) {
    res.status(200).render('home',{
    result: "",
	error : "All information is required!"
  	})
	return;
	}
	const lang = req.body.lang;
	const input = req.body.input;
	const pc = req.body.pc;
	res.status(200).render('home',{
	result: translator.translate(input,pc,lang)
   })
})

module.exports = router