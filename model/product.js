const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 1, max: [3000, "Don't be लालची"] },
  discountPercentage: { type: Number, min: 0, max: [50, "तुम्ही मोफत देत आहात का?"] },
  rating: { type: Number, min: [0, "rating can't be < 0"], max: [5, "rating can't be > 5"] },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
  images: [String],
});

//Declare model
exports.Product = mongoose.model("Product", productSchema);
