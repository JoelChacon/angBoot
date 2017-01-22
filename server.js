//requiring dependencies
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	morgan = require('morgan'),
	mongoose = require('mongoose');	

//requiring any files needed


//instatiating express
var app = express();

////middleware:////
//connecting to the front-end
app.use(express.static(path.join(__dirname, "/public")));
//defining a set of headers that allow the browser and server
//to communicate about which requests are (and are not) allowed
app.use(cors());
//request logger
app.use(morgan('dev'));
//parsing specification
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//connections
var mongoUri = 'mongodb://localhost:27017/angBoot';

mongoose.connect(mongoUri, function() {
	console.log("connected to the db at: " + mongoUri);
})

var port = process.env.PORT || 9002;

app.listen(port, function() {
	console.log("listening on port: " + port);
})