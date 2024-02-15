const express = require("express");
const fs = require("fs");

const server = express();

server.use(express.json());

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const carts = data.carts;

exports.create = (req, res) => {
  carts.push(req.body);
  res.json(req.body);
};

exports.get = (req, res) => {
  const id = +req.params.id;
  const cart = carts.find((p) => p.id === id);

  cart ? res.json(cart) : res.json({ error: "invalid id" });
};

exports.getAll = (req, res) => {
  res.json(carts);
};

exports.replace = (req, res) => {
  const id = +req.params.id;
  const cartIndex = carts.findIndex((p) => p.id === id);
  carts.splice(cartIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
};

exports.update = (req, res) => {
  const id = +req.params.id;
  const cartIndex = carts.findIndex((p) => p.id === id);
  const cart = carts[[cartIndex]];
  carts.splice(cartIndex, 1, { ...cart, ...req.body });
  res.status(201).json(req.body);
};

exports.remove = (req, res) => {
  const id = +req.params.id;
  const cartIndex = carts.findIndex((p) => p.id === id);
  carts.splice(cartIndex, 1);
  res.status(200).json("mission successful");
};

exports;
