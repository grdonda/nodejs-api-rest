const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  code: { type: String, required: true, max: 8 },
  name: { type: String, required: true, max: 32 },
  removed: { type: Boolean, required: false, default: false },
});

module.exports = ProductsSchema;
