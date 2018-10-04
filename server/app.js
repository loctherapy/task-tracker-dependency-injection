const express 		= require("express");
const app 			= express();
const mongoose  	= require("mongoose");
const bodyParser  	= require("body-parser");
const jsonParser 	= bodyParser.json();
const config 		= require("./config");
const port			= config.port;


app.use(bodyParser.urlencoded({ extended: false })) // get our request parameters
.use(jsonParser);

app.listen(port, () => console.log("Listening on port ", port));