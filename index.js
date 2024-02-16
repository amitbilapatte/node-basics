const express = require("express");
const fs = require("fs");

const server = express();

//import routes
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");

const index = fs.readFileSync("index.html", "utf-8");

//middleware
server.use(express.json());
server.use(express.static("public"));

//here we can use any API structure for e.g. /products/api/v1/
server.use("/products", productRoute.productRouter);
server.use("/carts", cartRoute.cartRouter);

server.listen("8000");
