const express = require("express");
const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

const server = express();

server.use(express.json());

exports.create = async (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.get = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);

  product ? res.json(product) : res.json({ error: "invalid id" });
};

exports.getAll = (req, res) => {
  res.json(products);
};

exports.replace = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
};

exports.update = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[[productIndex]];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
};

exports.remove = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.status(200).json("mission successful");
};

exports;
