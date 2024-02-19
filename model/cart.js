const mongoose = require("mongoose");
const { Schema } = mongoose;

//Schema
const cartSchema = new Schema({
  id: { type: Number, unique: true },
  products: [
    {
      id: { type: Number },
      quantity: { type: Number },
      total: { type: Number },
      title: { type: String, required: true },
      price: { type: Number, required: true, min: 1, max: 6000 },
      discountPercentage: { type: Number, min: 0, max: 50 },
      discountPrice: { type: Number, min: 10, max: 5000 },
      thumbnail: { type: String },
    },
  ],
});

//Declare model
exports.Cart = mongoose.model("Cart", cartSchema);
