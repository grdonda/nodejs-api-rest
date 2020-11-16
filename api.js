const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const productRoutes = require("./app/core/products/products-routes");

const api = express();
api.disable("x-powered-by");
if (process.env.NODE_ENV !== "testing") {
  api.use(morgan("combined"));
}

api.use(cors());
api.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

api.use(bodyParser.json());
api.use(productRoutes);

module.exports = api;
