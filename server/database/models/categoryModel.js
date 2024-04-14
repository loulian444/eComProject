const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  products: {
    type: Array,
    required: true,
  },
});

const Category = model(`Category`, categorySchema);

module.exports = Category;
