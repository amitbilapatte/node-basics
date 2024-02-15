const express = require("express");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const productController = require("./controller/product");

const server = express();
server.use(express.json());
server.use(express.static("public"));

server.get("/products", productController.getAll);

server.post("/add-product", productController.create);
server.get("/products/:id", productController.get);
server.put("/products/:id", productController.replace);
server.patch("/products/:id", productController.update);
server.delete("/products/:id", productController.remove);

server.listen("8000");
