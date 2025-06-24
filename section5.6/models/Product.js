const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
	name: { type: String },
	description: { type: String },
});

//Product -> look for a collection in plural form 'products'
module.exports = mongoose.model("Product", ProductSchema);
