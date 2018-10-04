const mongoose = require("mongoose");

module.exports = (dbUrl) => {
	return mongoose.createConnection(dbUrl);
};