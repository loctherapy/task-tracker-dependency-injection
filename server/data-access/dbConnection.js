const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

module.exports = (dbUrl) => {
	return mongoose.createConnection(dbUrl, {
		useNewUrlParser: true
	});
};
