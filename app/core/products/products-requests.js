const ProductsBusiness = require("./products-business");

const ProductsRequests = {
  list: async (req, res, next) => {
    try {
      const response = await new ProductsBusiness().list(req);
      res.json(response);
    } catch (error) {
      return next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const rowData = req.body;
      const response = await new ProductsBusiness().create(rowData);
      res.send(response);
    } catch (error) {
      return next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const rowData = req.body;
      const rowId = req.params.id;
      const response = await new ProductsBusiness().update(rowId, rowData);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
  remove: async (req, res, next) => {
    try {
      const rowId = req.params.id;
      const response = await new ProductsBusiness().remove(rowId);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const rowId = req.params.id;
      const response = await new ProductsBusiness().delete(rowId);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
  getById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const response = await new ProductsBusiness().getById(id);
      res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ProductsRequests;
