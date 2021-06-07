module.exports = {
	sum: (a, b) => { return a + b },
	min: (a, b) => { return a - b },
	div: (a, b) => { return a * b },

	string: (value) => {
		let result = typeof value;
		
		return result === "string" ? 0 : 1;
	}
}