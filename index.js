const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/product":
      console.log("hi");
      console.log(req.url.split("/"));
      console.log(req.url);
      res.setHeader("Content-Type", "text/html");
      let modifiedIndex = index
        .replace("**title**", product[productNumber].title)
        .replace("**price**", product[productNumber].price)
        .replace("**source**", product[productNumber].thumbnail)
        .replace("**brand**", product[productNumber].brand);
      res.end(modifiedIndex);
      break;
    default:
      res.writeHead(405);
      res.end();
      break;
  }
  // res.end(product);
});

server.listen("8000");
