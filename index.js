require("dotenv").config();
const express = require("express");
const fs = require("fs");

const server = express();
const mongoose = require("mongoose");

//db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("db connected");
}

//import routes
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const index = fs.readFileSync("index.html", "utf-8");
console.log("env", process.env.DB_PASSWORD);

//middleware
server.use(express.json());
server.use(express.static("public"));

//here we can use any API structure for e.g. /products/api/v1/
server.use("/products", productRoute.productRouter);
server.use("/carts", cartRoute.cartRouter);

server.listen("8000");
