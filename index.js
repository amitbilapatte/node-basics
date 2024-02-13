const express = require("express");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();

server.get("/products", (req, res) => {
  res.json(products);
});

server.listen("8000");
