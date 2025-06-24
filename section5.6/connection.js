const mongoose = require("mongoose");

module.exports = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/cohort1");
		console.log("Connected to MongoDB");
	} catch (e) {
		console.error(`Error connecting to MongoDB: ${e.message}`);
		process.exit(1);
		//0 - success (no errors)
		//1 - generic failure / error
		//other - custom or specific errors
	}
};
