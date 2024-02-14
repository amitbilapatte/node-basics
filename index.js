const express = require("express");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();

server.use(express.json());

server.use(express.static("public"));

//CREATE /POST
server.post("/add-product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});

//READ /Get /product/:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  product ? res.json(product) : res.json({ error: "invalid id" });
});

//UPDATE /PUT /product/:id //To update whole object with new body
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
});
//UPDATE /PATCH /product/:id //To only update few params in object from body
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[[productIndex]];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
});

//DELETE /delete /product/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(200).json("mission successful");
});

server.get("/products", (req, res) => {
  res.json(products);
});

server.listen("8000");
