const express = require("express");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const server = express();

const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

//middleware
server.use(express.json());
server.use(express.static("public"));
server.use("/products", productRoute.productRouter);
server.use("/carts", cartRoute.cartRouter);

server.listen("8000");
