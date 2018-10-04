module.exports = (Task) => {
	return {
		drop: () => {
			return new Promise((resolve, reject) => {
				Task.deleteMany((err, res) => {
					if(err) {
						return reject(err);
					}

					return resolve(res);
				});
			});
		}
	};
};