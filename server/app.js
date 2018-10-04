const express 		= require("express");
const app 			= express();
const bodyParser  	= require("body-parser");
const jsonParser 	= bodyParser.json();
const config 		= require("./config");
const port			= config.port;
const TaskSchema	= require('./data-access/schemas/task');

// Factories
const dbConnectionFactory	= require('./data-access/dbConnection');
const modelFactory  		= require('./data-access/model');

// Instances
const prodConnection 	= dbConnectionFactory(config.dbUris.prod);
const TaskModel 		= modelFactory(prodConnection, 'TaskModel', TaskSchema);

app.use(bodyParser.urlencoded({ extended: false })) // get our request parameters
.use(jsonParser);

app.get('/tasks', (req, res, next) => {
	return res.json("Hello");
});

app.listen(port, () => console.log("Listening on port ", port));