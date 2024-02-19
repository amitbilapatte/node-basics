const express = require("express");
const fs = require("fs");
const model = require("../model/cart");
const Cart = model.Cart;

const server = express();

server.use(express.json());

exports.create = async (req, res) => {
  const cart = new Cart(req.body);
  cart
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
    const cart = await Cart.find({ id: id });
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.replace = async (req, res) => {
  try {
    const id = +req.params.id;
    const body = req.body;
    const cart = await Cart.replaceOne({ id: id }, body);
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const id = +req.params.id;
    const body = req.body;
    const cart = await Cart.updateOne({ id: id }, { $set: body });
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.remove = async (req, res) => {
  try {
    const id = +req.params.id;
    const cart = await Cart.deleteOne({ id: id });
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports;
