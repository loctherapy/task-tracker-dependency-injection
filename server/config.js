module.exports = {
	dbUri: process.env.MONGODB_TASK_TRACKER_URI || 'mongodb://localhost:27017/task-tracker',
	port: process.env.PORT || '7000'
};