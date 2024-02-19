const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, required: true, min: 1, max: 3000 },
  discountPercentage: { type: Number, min: 0, max: 50 },
  rating: { type: Number, min: 0, max: 5 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
  images: [String],
});

//Declare model
exports.Product = mongoose.model("Product", productSchema);
