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
      res.status(400).json({ message: err.message });
    });
};

exports.get = async (req, res) => {
  const id = +req.params.id;
  // const id = req.params.id;
  try {
    const product = await Product.find({ id: id });
    // const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
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
  const id = +req.params.id;
  // const id = req.params.id;
  try {
    const product = await Product.replaceOne({ id: id }, req.body);
    // const product = await Product.findOneAndReplace({ id: id }, req.body, { new: true });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  const id = +req.params.id;
  // const id = req.params.id;
  try {
    const product = await Product.updateOne({ id: id }, { $set: req.body });
    // const product = await Product.findByIdAndUpdate({ id: id }, req.body, { new: true });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  const id = +req.params.id;
  // const id = req.params.id;
  try {
    const product = await Product.deleteOne({ id: id });
    // const product = await Product.findByIdAndDelete({ id: id });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports;
