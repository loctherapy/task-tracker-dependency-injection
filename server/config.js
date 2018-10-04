module.exports = {
	dbUris: {
		prod: process.env.MONGODB_TASK_TRACKER_URI || 'mongodb://localhost:27017/task-tracker',
		test: 'mongodb://localhost:27017/task-tracker-test'
	},
	port: process.env.PORT || '7000',
	generate: {
		tasks: 100
	}
};