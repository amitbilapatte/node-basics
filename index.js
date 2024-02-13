const express = require("express");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
});

const Auth = (req, res, next) => {
  if (req.query.q) {
    console.log(req.query);
    next();
  } else {
    res.send(401);
  }
};
const Authenticate = (req, res, next) => {
  if (req.body.q) {
    console.log(req.body);
    next();
  } else {
    res.send(401);
  }
};
// server.use(Auth);

server.get("/", Auth, (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", Authenticate, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "Patch" });
});
server.delete("/", (req, res) => {
  res.json({ type: "delete" });
});

server.get("/demo", (req, res) => {
  // res.send("hello");
  // res.send("./favicon.ico");
  // res.send(products[1].thumbnail);
  // res.json(products[1].thumbnail);
  res.sendFile("/home/lenovo/Desktop/AMIT/udemy/node-basics/favicon .ico");
});

server.listen("8000");
