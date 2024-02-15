const express = require("express");
const productRouter = express.Router();
const productController = require("../controller/product");

productRouter
  .get("/", productController.getAll)
  .post("/", productController.create)
  .get("/:id", productController.get)
  .put("/:id", productController.replace)
  .patch("/:id", productController.update)
  .delete("/:id", productController.remove);

exports.productRouter = productRouter;
