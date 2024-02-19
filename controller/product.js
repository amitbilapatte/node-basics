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

exports.get = async (req, res) => {
  const id = +req.params.id;
  try {
    const product = await Product.find({ id: id });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.replace = async (req, res) => {
  try {
    const id = +req.params.id;
    const body = req.body;
    const product = await Product.replaceOne({ id: id }, body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const id = +req.params.id;
    const body = req.body;
    const product = await Product.updateOne({ id: id }, { $set: body });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.remove = async (req, res) => {
  try {
    const id = +req.params.id;
    const product = await Product.deleteOne({ id: id });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports;
