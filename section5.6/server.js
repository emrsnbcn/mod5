const express = require("express");
const app = express();
const port = 8888;
const connectDB = require("./connection");

app.use(express.json());
app.use("/products", require("./controllers/products"));

connectDB();
app.listen(port, () => console.log("Server is running on port " + port));
