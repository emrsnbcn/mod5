const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// get all products.
router.get("/", async (req, res) => {
	const products = await Product.find();
	return res.json(products);
});

router.delete("/", (req, res) => {
	const newItem = new Product(req.body);
	// {name: "Nasi Lemak", description: "Too salty"}
	newItem.save();
	return resjson({ msg: "Product added succesfully", product: newItem });
});

module.exports = router;
