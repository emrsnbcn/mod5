//ES5 SYNTAX
const express = require("express");
const app = express();
const port = 9999;
//ES6
// import express from 'express

app.use(express.json()); //for us to intercept data in json format
app.use("/products", require("./controllers/products"));

app.listen(port, () => console.log("Server is running on port " + port));
