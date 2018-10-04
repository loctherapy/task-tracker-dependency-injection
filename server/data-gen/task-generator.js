const random = require('./../random');

module.exports = (TaskModel, n) => {

	return {
		generate: () => {
			return new Promise((resolve, reject) => {
				let i, task, counter = 0, tasks = [];

				for (i = 0; i < n; i++) {

					task = new TaskModel({
						name: random.getRandomString(20, 40),
						description: random.getRandomString(100, 300),
						completed: random.getRandomInteger(0, 50) > 10
					});

					task.save((err, t) => {
						if (err) {
							return reject(err);
						}

						counter++;
						tasks.push(t);

						if (counter === n) {
							return resolve(tasks);
						}
					});
				}
			});
		}
	};
};