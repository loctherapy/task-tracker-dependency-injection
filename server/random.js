function getRandomInteger (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomString(minLengh, maxLength) {

	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const length = getRandomInteger(minLengh, maxLength);
	let text = "";

	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
}

module.exports = {
	getRandomInteger,
	getRandomString
};