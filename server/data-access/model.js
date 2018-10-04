module.exports = (connection, modelName, schema) => {
	return connection.model(modelName, schema);
};