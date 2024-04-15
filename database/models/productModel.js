const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = model(`Product`, productSchema);

module.exports = Product;
