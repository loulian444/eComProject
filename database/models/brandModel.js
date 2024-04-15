const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;

const brandSchema = new Schema({
  brandName: {
    type: String,
    required: true,
    unique: true,
  },
  products: {
    type: Array,
    required: true,
  },
});

const Brand = model(`Brand`, brandSchema);

module.exports = Brand;
