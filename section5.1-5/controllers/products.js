const express = require("express");
const router = express.Router();

let products = [
	{ id: 1, name: "Table" },
	{ id: 2, name: "Ladder" },
	{ id: 3, name: "Chair" },
];

router.get("/", (req, res) => {
	res.json(products);
});

router.post("/", (req, res) => {
	const newItem = products.push({ id: Date.now(), name: req.body.name });
	res.status(201).json({ msg: "Product added successfully", newItem });
});

router.get("/:id", (req, res) => {
	let item = products.find((product) => product.id == req.params.id);
	if (!item) {
		res.json({ msg: "Product doesnt exist" });
	} else {
		res.json(item);
	}
});

router.delete("/:id", (req, res) => {});

// export default
module.exports = router;
