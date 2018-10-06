module.exports = (TaskModel) => {
	return {
		drop: () => {
			return new Promise((resolve, reject) => {
				TaskModel.deleteMany((err, res) => {
					if(err) {
						return reject(err);
					}

					return resolve(res);
				});
			});
		}
	};
};