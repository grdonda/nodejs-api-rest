const mongoose = require("mongoose");
const ProductsSchema = require("../../core/products/products-schema");
const { getConfiguration } = require("./app/common/config");
const db = getConfiguration().db;
mongoose.connect(
  `mongodb+srv://${db.user}:${db.pass}@${db.host}/${db.database}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const productModelName =
  process.env.NODE_ENV !== "testing" ? "products" : "products-test";

const Products = mongoose.model(productModelName, ProductsSchema);

module.exports = { Products };
