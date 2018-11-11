const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
var bodyParser = require("body-parser");

const app = express()
const port = 3000

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));
app.use(require('./routes'))

app.listen(port, function(err){
	if (err) {
		throw err
	}
	console.log(`Server started on port ${port} . . . `)
})