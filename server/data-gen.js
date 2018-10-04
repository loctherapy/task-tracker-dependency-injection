const config 		= require("./config");
const TaskSchema	= require('./data-access/schemas/task');

// Factories
const dbConnectionFactory	= require('./data-access/dbConnection');
const modelFactory  		= require('./data-access/model');
const taskGeneratorFactory  = require('./data-gen/task-generator');

// Instances
const prodConnection 	= dbConnectionFactory(config.dbUris.test);
const TaskModel 		= modelFactory(prodConnection, 'Task', TaskSchema);
const tasksGenerator	= taskGeneratorFactory(TaskModel, config.generate.tasks);

tasksGenerator.generate().then((tasks) => {
	for (let i = 0; i < tasks.length; i++) {
		console.log(`Task name: "${ tasks[i].name }". Completed: ${ tasks[i].completed }`);
	}
});


