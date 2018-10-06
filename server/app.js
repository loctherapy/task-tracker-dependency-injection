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
const dataGeneratorFactory	= require('./data-gen/data-generator');

// Prod Instances
const connection 		= dbConnectionFactory(config.dbUris.prod);
const Task 				= modelFactory(connection, 'Task', TaskSchema);

// Test Instances
const testConnection 	= dbConnectionFactory(config.dbUris.test);
const dataGenerator 	= dataGeneratorFactory(testConnection, config.generate);

// Generate Test DB
dataGenerator.generate();

app.use(bodyParser.urlencoded({ extended: false })) // get our request parameters
.use(jsonParser);

app.get('/tasks', (req, res) => {
	Task.find((err, tasks) => {
		if(err) {
			return res.sendStatus(400);
		}

		return res.json(tasks);
	});
});

app.listen(port, () => console.log("Listening on port ", port));