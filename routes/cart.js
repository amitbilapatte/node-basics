const express = require("express");

//create router
const cartRouter = express.Router();
const cartController = require("../controller/cart");

cartRouter
  .get("/", cartController.getAll)
  .post("/", cartController.create)
  .get("/:id", cartController.get)
  .put("/:id", cartController.replace)
  .patch("/:id", cartController.update)
  .delete("/:id", cartController.remove);

exports.cartRouter = cartRouter;
