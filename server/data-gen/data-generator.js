const TaskSchema	= require('../data-access/schemas/task');

// Factories
const modelFactory  		= require('../data-access/model');
const taskGeneratorFactory  = require('./task-generator');
const taskDropperFactory 	= require('./task-dropper');

module.exports = (connection, generateConfig) => {
	// Instances
	const Task				= modelFactory(connection, 'Task', TaskSchema);
	const tasksGenerator	= taskGeneratorFactory(Task, generateConfig.tasks);
	const taskDropper 		= taskDropperFactory(Task);

	return {
		generate: () => {
			// Drop tasks
			taskDropper.drop().then(() => {
				// Generate new tasks
				return tasksGenerator.generate();
			}).then((tasks) => {

				for (let i = 0; i < tasks.length; i++) {
					console.log(`Task name: "${ tasks[i].name }". Completed: ${ tasks[i].completed }`);
				}
			});
		}
	};
};
