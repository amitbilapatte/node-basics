const express = require("express");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const productController = require("./controller/product");

const server = express();
const productRouter = express.Router();
server.use(express.json());
server.use(express.static("public"));
server.use("/p", productRouter);

productRouter
  .get("/products", productController.getAll)
  .post("/add-product", productController.create)
  .get("/products/:id", productController.get)
  .put("/products/:id", productController.replace)
  .patch("/products/:id", productController.update)
  .delete("/products/:id", productController.remove);

server.listen("8000");
