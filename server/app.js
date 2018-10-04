const express 		= require("express");
const config 		= require("./config");
const app 			= express();
const mongoose  	= require("mongoose");
const bodyParser  	= require("body-parser");
const jsonParser 	= bodyParser.json();
const port 			= config.port;

mongoose.connect(config.dbUri); // connect to database

app.use(bodyParser.urlencoded({ extended: false })) // get our request parameters
.use(jsonParser);

app.listen(port, () => console.log("Listening on port ", port));